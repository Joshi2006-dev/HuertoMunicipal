import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import HomeMenu from "./components/HomeMenu";
import PDFViewer from "./components/PDFViewer";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#f0f8f0", minHeight: "100vh" }}>
        {" "}
        {/* Fondo claro para App.js */}
        <Routes>
          {/* Ruta principal: Menú */}
          <Route path="/" element={<HomeWrapper />} />

          {/* Ruta dinámica: El :pageNumber es una variable en la URL */}
          <Route path="/pdf/:pageNumber" element={<PDFWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

// Componente para manejar la selección en el menú
function HomeWrapper() {
  const navigate = useNavigate();
  return <HomeMenu onSelectSection={(page) => navigate(`/pdf/${page}`)} />;
}

// Componente para capturar el parámetro de la URL y pasarlo al visor
function PDFWrapper() {
  const { pageNumber } = useParams(); // Captura el número de la URL
  const navigate = useNavigate();

  return (
    <PDFViewer
      initialPage={parseInt(pageNumber)}
      onBack={() => navigate("/")}
    />
  );
}

export default App;
