import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Agregamos Framer Motion
import Loader from "./Loader";

// Visor de PDF
import { Worker, Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { printPlugin } from "@react-pdf-viewer/print";
import { getFilePlugin } from "@react-pdf-viewer/get-file";

// Estilos de la librería
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "@react-pdf-viewer/print/lib/styles/index.css";

const pdfjsVersion = "3.4.120";
const workerUrl = `https://unpkg.com/pdfjs-dist@${pdfjsVersion}/build/pdf.worker.min.js`;

const PDFViewer = ({ initialPage = 1, onBack }) => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(initialPage - 1);
  const pdfFile = "/pdf/guia.pdf";

  const pageNavigationPluginInstance = pageNavigationPlugin();
  const zoomPluginInstance = zoomPlugin();
  const printPluginInstance = printPlugin();
  const getFilePluginInstance = getFilePlugin();

  const { jumpToPage } = pageNavigationPluginInstance;
  const { ZoomIn, ZoomOut } = zoomPluginInstance;
  const { Print } = printPluginInstance;
  const { Download } = getFilePluginInstance;

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

  // Variantes para los botones
  const btnClick = {
    tap: { scale: 0.9 },
    hover: { scale: 1.1, color: "#4CAF50" },
  };

  return (
    <div style={viewerWrapper}>
      {/* HEADER CLARO */}
      <header style={headerStyle}>
        <div style={leftSection}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            style={backButtonStyle}
          >
            <i className="bi bi-arrow-left"></i>
          </motion.button>
          <div style={titleGroup}>
            <h1 style={titleStyle}>Huerto Municipal DC</h1>
            <p style={subTitleText}>CATÁLOGO TÉCNICO</p>
          </div>
        </div>

        <div style={rightSection}>
          <Print>
            {(props) => (
              <motion.button
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={props.onClick}
                style={actionButton}
                title="Imprimir"
              >
                <i className="bi bi-printer"></i>
              </motion.button>
            )}
          </Print>
          <Download>
            {(props) => (
              <motion.button
                whileHover={{ y: 3 }}
                whileTap={{ scale: 0.9 }}
                onClick={props.onClick}
                style={actionButton}
                title="Descargar"
              >
                <i className="bi bi-download"></i>
              </motion.button>
            )}
          </Download>
          <div style={badgeStyle}>Pág. {pageNumber + 1}</div>
        </div>
      </header>

      {/* ÁREA DEL VISOR TEMA CLARO */}
      <div className="viewer-container">
        <Worker workerUrl={workerUrl}>
          <div className="pdf-scroll-area">
            <Viewer
              fileUrl={pdfFile}
              initialPage={pageNumber}
              onDocumentLoad={handleDocumentLoad}
              renderLoader={() => <Loader />}
              theme="light"
              defaultScale={SpecialZoomLevel.PageFit}
              plugins={[
                pageNavigationPluginInstance,
                zoomPluginInstance,
                printPluginInstance,
                getFilePluginInstance,
              ]}
            />
          </div>
        </Worker>
      </div>

      {/* CONTROLES FLOTANTES CON ANIMACIÓN DE ENTRADA */}
      <motion.div
        initial={{ y: 100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        style={floatingControls}
      >
        <div style={controlGroup}>
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handlePrevPage}
            disabled={pageNumber <= 0}
            style={{ ...navBtn, opacity: pageNumber <= 0 ? 0.3 : 1 }}
          >
            <i className="bi bi-chevron-left"></i>
          </motion.button>

          <div style={pageDisplay}>
            <span style={{ color: "#2d3436" }}>{pageNumber + 1}</span>
            <span style={{ color: "#dfe6e9", margin: "0 8px" }}>/</span>
            <span style={{ color: "#b2bec3" }}>{numPages || "--"}</span>
          </div>

          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={handleNextPage}
            disabled={pageNumber >= numPages - 1}
            style={{ ...navBtn, opacity: pageNumber >= numPages - 1 ? 0.3 : 1 }}
          >
            <i className="bi bi-chevron-right"></i>
          </motion.button>
        </div>

        <div style={vDivider} />

        <div style={controlGroup}>
          <ZoomOut>
            {(props) => (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={props.onClick}
                style={navBtn}
              >
                <i className="bi bi-zoom-out"></i>
              </motion.button>
            )}
          </ZoomOut>
          <ZoomIn>
            {(props) => (
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={props.onClick}
                style={navBtn}
              >
                <i className="bi bi-zoom-in"></i>
              </motion.button>
            )}
          </ZoomIn>
        </div>
      </motion.div>

      <style>{`
        .viewer-container {
          width: 100%;
          height: 100vh;
          padding-top: 70px;
          box-sizing: border-box;
          background-color: #EDEDEDED; 
        }
        .pdf-scroll-area {
          height: 100%;
          overflow: auto;
        }
        .rpv-core__viewer {
          background-color: transparent !important;
        }
        .rpv-core__inner-pages {
          background-color: transparent !important;
        }
        .rpv-core__page-layer {
          box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important;
          margin-bottom: 40px !important;
          border: 1px solid #EDEDEDED !important;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

// --- ESTILOS (Sin cambios significativos, solo limpieza) ---
const viewerWrapper = {
  width: "100vw",
  height: "100vh",
  backgroundColor: "#fcfdfc",
  fontFamily: "'Inter', sans-serif",
  overflow: "hidden",
  position: "relative",
};

const headerStyle = {
  width: "100%",
  height: "70px",
  backgroundColor: "rgba(252, 253, 252, 0.95)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid #edf2ed",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 25px",
  position: "absolute",
  top: 0,
  zIndex: 10,
  boxSizing: "border-box",
};

const leftSection = { display: "flex", alignItems: "center", gap: "15px" };
const rightSection = { display: "flex", alignItems: "center", gap: "15px" };

const backButtonStyle = {
  background: "#ffffff",
  border: "1px solid #edf2ed",
  color: "#4CAF50",
  width: "40px",
  height: "40px",
  borderRadius: "12px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
};

const titleGroup = { display: "flex", flexDirection: "column" };
const titleStyle = {
  margin: 0,
  fontSize: "0.85rem",
  color: "#1b5e20",
  fontWeight: "800",
  letterSpacing: "0.5px",
};
const subTitleText = {
  margin: 0,
  fontSize: "0.65rem",
  color: "#95a5a6",
  fontWeight: "600",
  textTransform: "uppercase",
};

const actionButton = {
  background: "transparent",
  border: "none",
  color: "#2d3436",
  fontSize: "1.2rem",
  cursor: "pointer",
  padding: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const badgeStyle = {
  background: "#e8f5e9",
  color: "#2e7d32",
  padding: "6px 14px",
  borderRadius: "12px",
  fontSize: "0.75rem",
  fontWeight: "700",
};

const floatingControls = {
  position: "fixed",
  bottom: "35px",
  left: "50%",
  backgroundColor: "#ffffff",
  padding: "10px 25px",
  borderRadius: "100px",
  border: "1px solid #edf2ed",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  zIndex: 100,
  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
};

const controlGroup = { display: "flex", alignItems: "center", gap: "10px" };
const vDivider = {
  width: "1px",
  height: "20px",
  background: "#f1f2f6",
  margin: "0 10px",
};

const navBtn = {
  background: "transparent",
  color: "#4CAF50",
  border: "none",
  fontSize: "1.2rem",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  padding: "5px",
};

const pageDisplay = {
  fontSize: "0.9rem",
  fontWeight: "700",
  minWidth: "60px",
  textAlign: "center",
};

export default PDFViewer;
