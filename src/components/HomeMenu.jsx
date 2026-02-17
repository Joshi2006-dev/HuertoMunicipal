import React from "react";

const HomeMenu = ({ onSelectSection }) => {
  const sections = [
    {
      id: 1,
      title: "Zanahoria",
      desc: "Planta herbácea cultivada por su raíz.",
      page: 3,
    },
    {
      id: 2,
      title: "Remolacha",
      desc: "Produce una raíz tuberosa roja comestible.",
      page: 7,
    },
    {
      id: 3,
      title: "Tomate",
      desc: "Planta de fruto dulce, redondo u ovalado.",
      page: 11,
    },
    {
      id: 4,
      title: "Pimiento",
      desc: "Planta anual de frutos dulces o picantes.",
      page: 15,
    },
    {
      id: 5,
      title: "Cebolla Blanca",
      desc: "Planta bianual que forma un bulbo comestible.",
      page: 19,
    },
    {
      id: 6,
      title: "Orégano",
      desc: "Hierba perenne de hojas muy aromáticas.",
      page: 23,
    },
    {
      id: 7,
      title: "Zacate de Limón",
      desc: "Planta perenne de rápido crecimiento y aroma.",
      page: 27,
    },
    {
      id: 8,
      title: "Rábano",
      desc: "Planta de ciclo corto y raíz comestible.",
      page: 31,
    },
    {
      id: 9,
      title: "Cilantro",
      desc: "Hierba aromática usada en cocina y medicina.",
      page: 35,
    },
    {
      id: 10,
      title: "Mostaza",
      desc: "Planta cultivada por sus hojas y semillas.",
      page: 39,
    },
    {
      id: 11,
      title: "Repollo",
      desc: "Forma una cabeza compacta de hojas.",
      page: 43,
    },
    {
      id: 12,
      title: "Chile Dulce",
      desc: "Produce frutos carnosos de varios colores.",
      page: 47,
    },
    {
      id: 13,
      title: "Habichuela",
      desc: "Leguminosa que produce vainas verdes.",
      page: 51,
    },
    {
      id: 14,
      title: "Yuca",
      desc: "Arbusto tropical con raíz tuberosa comestible.",
      page: 55,
    },
    {
      id: 15,
      title: "Pataste",
      desc: "Enredadera perenne de alto rendimiento.",
      page: 59,
    },
    {
      id: 16,
      title: "Zapallo",
      desc: "Planta rastrera de frutos comestibles grandes.",
      page: 63,
    },
    {
      id: 17,
      title: "Camote",
      desc: "Planta rastrera de raíces dulces y resistentes.",
      page: 67,
    },
  ];

  return (
    <div style={homeContainer}>
      <header style={welcomeHeader}>
        <h1 style={mainTitle}>HUERTO MUNICIPAL DEL DISTRITO CENTRAL</h1>
        <div style={divider}></div>
        <p style={subtitle}>ÍNDICE</p>
      </header>

      <div style={cardGrid}>
        {sections.map((section) => (
          <div
            key={section.id}
            style={cardStyle}
            onClick={() => onSelectSection(section.page)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.12)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.05)")
            }
          >
            <div style={textContainer}>
              <h3 style={cardTitle}>{section.title}</h3>
              <p style={cardDesc}>{section.desc}</p>
            </div>
            <div style={dotStyle}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- ESTILOS MANTENIDOS ---

const homeContainer = {
  width: "100%",
  minHeight: "100vh",
  padding: "60px 5%",
  boxSizing: "border-box",
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  backgroundColor: "#0a0a0a",
  display: "flex",
  flexDirection: "column",
};

const welcomeHeader = { textAlign: "center", marginBottom: "60px" };

const mainTitle = {
  color: "#ffffff",
  fontSize: "clamp(1.8rem, 5vw, 3rem)",
  fontWeight: "300",
  letterSpacing: "4px",
  margin: "0",
};

const divider = {
  width: "60px",
  height: "2px",
  backgroundColor: "#4CAF50",
  margin: "20px auto",
};

const subtitle = {
  color: "#4CAF50",
  fontSize: "1.2rem",
  textTransform: "uppercase",
  letterSpacing: "5px",
  fontWeight: "600",
  opacity: 0.9,
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: "25px",
  width: "100%",
};

const cardStyle = {
  position: "relative",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderRadius: "20px",
  padding: "35px 25px",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  cursor: "pointer",
  transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
};

const textContainer = { zIndex: 2 };

const cardTitle = {
  color: "#fff",
  margin: "0 0 10px 0",
  fontSize: "1.4rem",
  fontWeight: "500",
  letterSpacing: "0.5px",
};

const cardDesc = {
  color: "rgba(255, 255, 255, 0.4)",
  margin: "0",
  fontSize: "0.9rem",
  lineHeight: "1.5",
};

const dotStyle = {
  position: "absolute",
  top: "25px",
  right: "25px",
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: "#4CAF50",
  boxShadow: "0 0 15px rgba(76, 175, 80, 0.4)",
};

export default HomeMenu;
