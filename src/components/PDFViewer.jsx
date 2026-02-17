import React, { useState, useEffect } from "react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiArrowLeft,
  HiMagnifyingGlassPlus,
  HiMagnifyingGlassMinus,
} from "react-icons/hi2";
import Loader from "./Loader";

import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";

const pdfjsVersion = "3.4.120";
const workerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;

const PDFViewer = ({ initialPage = 1, onBack }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(initialPage - 1);
  const pdfFile = "/pdf/guia.pdf";

  const pageNavigationPluginInstance = pageNavigationPlugin();
  const zoomPluginInstance = zoomPlugin();
  const { jumpToPage } = pageNavigationPluginInstance;
  const { ZoomIn, ZoomOut } = zoomPluginInstance;

  useEffect(() => {
    setPageNumber(initialPage - 1);
  }, [initialPage]);

  const handleDocumentLoad = (e) => {
    setNumPages(e.doc.numPages);
  };

  const handleNextPage = () => {
    if (pageNumber < numPages - 1) {
      const next = pageNumber + 1;
      setPageNumber(next);
      jumpToPage(next);
    }
  };

  const handlePrevPage = () => {
    if (pageNumber > 0) {
      const prev = pageNumber - 1;
      setPageNumber(prev);
      jumpToPage(prev);
    }
  };

  return (
    <div style={darkThemeContainer}>
      {/* HEADER */}
      <div style={headerStyle}>
        <div style={leftSection}>
          <button onClick={onBack} style={backButtonStyle}>
            <HiArrowLeft size={20} />
          </button>
          <div style={titleGroup}>
            <h1 style={titleStyle}>HUERTO MUNICIPAL</h1>
            <p style={subTitleText}>CATÁLOGO TÉCNICO</p>
          </div>
        </div>
        <div style={badgeStyle}>PÁG {pageNumber + 1}</div>
      </div>

      {/* VISOR OCUPA TODA LA PANTALLA */}
      <div className="viewer-fullscreen-container">
        <Worker workerUrl={workerUrl}>
          <div className="pdf-viewer-scroll-container">
            <Viewer
              fileUrl={pdfFile}
              initialPage={pageNumber}
              onDocumentLoad={handleDocumentLoad}
              renderLoader={() => <Loader />}
              theme="dark"
              defaultScale={SpecialZoomLevel.PageFit}
              plugins={[pageNavigationPluginInstance, zoomPluginInstance]}
            />
          </div>
        </Worker>
      </div>

      {/* CONTROLES */}
      <div style={controlsStyle}>
        <div style={controlSection}>
          <button
            onClick={handlePrevPage}
            disabled={pageNumber <= 0}
            style={{ ...navButtonStyle, opacity: pageNumber <= 0 ? 0.2 : 1 }}
          >
            <HiChevronLeft size={24} />
          </button>
          <div style={pageInfoStyle}>
            <span style={{ color: "#fff" }}>{pageNumber + 1}</span>
            <span style={dividerStyle}>/</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>
              {numPages || "--"}
            </span>
          </div>
          <button
            onClick={handleNextPage}
            disabled={pageNumber >= numPages - 1}
            style={{
              ...navButtonStyle,
              opacity: pageNumber >= numPages - 1 ? 0.2 : 1,
            }}
          >
            <HiChevronRight size={24} />
          </button>
        </div>

        <div style={verticalDivider} />

        <div style={controlSection}>
          <ZoomOut>
            {(props) => (
              <button onClick={props.onClick} style={navButtonStyle}>
                <HiMagnifyingGlassMinus size={22} />
              </button>
            )}
          </ZoomOut>
          <ZoomIn>
            {(props) => (
              <button onClick={props.onClick} style={navButtonStyle}>
                <HiMagnifyingGlassPlus size={22} />
              </button>
            )}
          </ZoomIn>
        </div>
      </div>

      <style>{`
        .pdf-viewer-scroll-container {
          height: 100vh; 
          width: 100%;
          overflow-y: auto !important;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .pdf-viewer-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .rpv-core__inner-pages, .rpv-core__viewer, .rpv-core__page-layer {
          background-color: transparent !important;
          box-shadow: none !important;
          margin:30px auto !important;
        }

        .viewer-fullscreen-container {
          width: 100%;
          height: 100%;
          position: relative;
        }
      `}</style>
    </div>
  );
};

// --- ESTILOS ---
const darkThemeContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  minHeight: "100vh",
  width: "100vw",
  backgroundColor: "#0a0a0a",
  fontFamily: "'Inter', sans-serif",
  overflow: "hidden",
};

const headerStyle = {
  width: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(20px)",
  padding: "12px 20px",
  position: "fixed",
  top: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: 100,
  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  boxSizing: "border-box",
};

const leftSection = { display: "flex", alignItems: "center", gap: "15px" };
const backButtonStyle = {
  background: "rgba(255, 255, 255, 0.06)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: "#4CAF50",
  borderRadius: "10px",
  width: "40px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const titleStyle = {
  margin: 0,
  fontSize: "0.9rem",
  fontWeight: "600",
  color: "#4CAF50",
};
const subTitleText = {
  margin: 0,
  fontSize: "0.55rem",
  color: "rgba(255,255,255,0.4)",
};
const titleGroup = { display: "flex", flexDirection: "column" };
const badgeStyle = {
  border: "1px solid rgba(76, 175, 80, 0.3)",
  color: "#4CAF50",
  padding: "4px 12px",
  borderRadius: "10px",
  fontSize: "0.6rem",
  fontWeight: "bold",
};

const controlsStyle = {
  position: "fixed",
  bottom: "30px",
  display: "flex",
  alignItems: "center",
  gap: "15px",
  background: "rgba(20, 20, 20, 0.85)",
  backdropFilter: "blur(15px)",
  padding: "8px 20px",
  borderRadius: "50px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  zIndex: 100,
  boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
};

const controlSection = { display: "flex", alignItems: "center", gap: "10px" };
const verticalDivider = {
  width: "1px",
  height: "20px",
  background: "rgba(255,255,255,0.1)",
  margin: "0 5px",
};
const navButtonStyle = {
  background: "transparent",
  color: "#4CAF50",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: "5px",
  transition: "transform 0.2s ease",
};
const pageInfoStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.85rem",
  fontWeight: "600",
};
const dividerStyle = { color: "rgba(255,255,255,0.2)", margin: "0 8px" };

export default PDFViewer;
