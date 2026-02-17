import React, { useState } from "react";
import HomeMenu from "./components/HomeMenu";
import PDFViewer from "./components/PDFViewer";

function App() {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleBack = () => {
    setSelectedPage(null);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      {selectedPage === null ? (
        <HomeMenu onSelectSection={(page) => setSelectedPage(page)} />
      ) : (
        <PDFViewer initialPage={selectedPage} onBack={handleBack} />
      )}
    </div>
  );
}

export default App;
