import React from "react";
import { motion } from "framer-motion";

const HomeMenu = ({ onSelectSection }) => {
  const sections = [
    {
      id: 1,
      title: "Zanahoria",
      desc: "Planta herbácea cultivada por su raíz.",
      page: 3,
      color: "#e67e22",
      shape: "40% 60% 70% 30% / 40% 50% 60% 70%",
    },
    {
      id: 2,
      title: "Remolacha",
      desc: "Raíz tuberosa roja comestible.",
      page: 7,
      color: "#9b59b6",
      shape: "50% 50% 20% 80% / 25% 80% 20% 75%",
    },
    {
      id: 3,
      title: "Tomate",
      desc: "Planta de fruto dulce y redondo.",
      page: 11,
      color: "#e74c3c",
      shape: "30% 70% 70% 30% / 30% 30% 70% 70%",
    },
    {
      id: 4,
      title: "Pimiento",
      desc: "Frutos dulces o picantes.",
      page: 15,
      color: "#27ae60",
      shape: "60% 40% 30% 70% / 60% 30% 70% 40%",
    },
    {
      id: 5,
      title: "Cebolla Blanca",
      desc: "Bulbo comestible de sabor intenso.",
      page: 19,
      color: "#95a5a6",
      shape: "40% 60% 40% 60% / 40% 40% 60% 60%",
    },
    {
      id: 6,
      title: "Orégano",
      desc: "Hierba perenne muy aromática.",
      page: 23,
      color: "#2ecc71",
      shape: "70% 30% 50% 50% / 30% 30% 70% 70%",
    },
    {
      id: 7,
      title: "Zacate de Limón",
      desc: "Planta aromática de rápido crecimiento.",
      page: 27,
      color: "#8bc34a",
      shape: "20% 80% 30% 70% / 50% 20% 80% 50%",
    },
    {
      id: 8,
      title: "Rábano",
      desc: "Planta de ciclo corto y raíz picante.",
      page: 31,
      color: "#ff4757",
      shape: "50% 50% 50% 50% / 80% 20% 80% 20%",
    },
    {
      id: 9,
      title: "Cilantro",
      desc: "Hierba aromática indispensable.",
      page: 35,
      color: "#16a085",
      shape: "30% 70% 40% 60% / 60% 40% 60% 40%",
    },
    {
      id: 10,
      title: "Mostaza",
      desc: "Cultivada por sus hojas y semillas.",
      page: 39,
      color: "#f1c40f",
      shape: "80% 20% 70% 30% / 30% 70% 30% 70%",
    },
    {
      id: 11,
      title: "Repollo",
      desc: "Cabeza compacta de hojas verdes.",
      page: 43,
      color: "#27ae60",
      shape: "50% 50% 50% 50% / 50% 50% 50% 50%",
    },
    {
      id: 12,
      title: "Chile Dulce",
      desc: "Frutos carnosos de varios colores.",
      page: 47,
      color: "#f39c12",
      shape: "40% 60% 70% 30% / 50% 50% 50% 50%",
    },
    {
      id: 13,
      title: "Habichuela",
      desc: "Leguminosa de vainas verdes.",
      page: 51,
      color: "#4caf50",
      shape: "10% 90% 10% 90% / 10% 90% 10% 90%",
    },
    {
      id: 14,
      title: "Yuca",
      desc: "Raíz tuberosa tropical esencial.",
      page: 55,
      color: "#795548",
      shape: "60% 40% 60% 40% / 40% 60% 40% 60%",
    },
    {
      id: 15,
      title: "Pataste",
      desc: "Enredadera perenne muy productiva.",
      page: 59,
      color: "#8bc34a",
      shape: "40% 60% 30% 70% / 70% 30% 60% 40%",
    },
    {
      id: 16,
      title: "Zapallo",
      desc: "Planta rastrera de frutos grandes.",
      page: 63,
      color: "#ff9800",
      shape: "70% 30% 70% 30% / 30% 70% 30% 70%",
    },
    {
      id: 17,
      title: "Camote",
      desc: "Raíces dulces y muy resistentes.",
      page: 67,
      color: "#d81b60",
      shape: "30% 70% 30% 70% / 70% 30% 70% 30%",
    },
  ];

  return (
    <div style={homeContainer}>
      <header style={welcomeHeader}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span style={topBadge}>Índice de cultivos</span>
          <h1 style={mainTitle}>HUERTO MUNICIPAL DC</h1>
          <div style={divider}></div>
        </motion.div>
      </header>

      <motion.div
        style={cardGrid}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
      >
        {sections.map((section) => (
          <motion.div
            key={section.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            style={cardStyle}
            onClick={() => onSelectSection(section.page)}
            whileHover={{
              y: -8,
              boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            {/* FIGURA ORGÁNICA PERSONALIZADA */}
            <div style={{ ...iconWrapper }}>
              <motion.div
                style={{
                  ...organicShape,
                  backgroundColor: section.color,
                  borderRadius: section.shape,
                  background: `linear-gradient(135deg, ${section.color} 0%, ${section.color}aa 100%)`,
                }}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <span style={shapeLabel}>{section.title.charAt(0)}</span>
              </motion.div>
              {/* Reflejo decorativo detrás */}
              <div
                style={{
                  ...shapeShadow,
                  backgroundColor: section.color,
                  borderRadius: section.shape,
                }}
              ></div>
            </div>

            <div style={textContainer}>
              <h3 style={cardTitle}>{section.title}</h3>
              <p style={cardDesc}>{section.desc}</p>
            </div>

            <div style={cardFooter}>
              <span style={pageTag}>Pág. {section.page}</span>
              <motion.i
                className="bi bi-arrow-right-short"
                style={{ color: section.color, fontSize: "1.5rem" }}
              ></motion.i>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// --- ESTILOS MEJORADOS ---
const homeContainer = {
  width: "100%",
  minHeight: "100vh",
  padding: "60px 20px",
  backgroundColor: "#EDEDEDED", // Un tono más "menta" muy suave
  fontFamily: "'Inter', sans-serif",
  boxSizing: "border-box",
  overflowX: "hidden",
};

const welcomeHeader = { textAlign: "center", marginBottom: "50px" };
const topBadge = {
  color: "#4CAF50",
  fontSize: "0.75rem",
  fontWeight: "800",
  letterSpacing: "2px",
  textTransform: "uppercase",
};
const mainTitle = {
  fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
  fontWeight: "900",
  color: "#1b5e20",
  margin: "10px 0",
};
const divider = {
  width: "50px",
  height: "4px",
  backgroundColor: "#4CAF50",
  margin: "15px auto",
  borderRadius: "10px",
};

const cardGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  gap: "25px",
  maxWidth: "1200px",
  margin: "0 auto",
};

const cardStyle = {
  background: "#ffffff",
  borderRadius: "24px",
  padding: "30px",
  border: "1px solid #edf2ed",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
};

const iconWrapper = {
  position: "relative",
  width: "60px",
  height: "60px",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const organicShape = {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  transition: "all 0.4s ease",
};

const shapeShadow = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "5px",
  left: "5px",
  opacity: 0.2,
  zIndex: 1,
  filter: "blur(8px)",
};

const shapeLabel = {
  color: "#fff",
  fontSize: "1.4rem",
  fontWeight: "900",
  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

const textContainer = { marginBottom: "15px" };
const cardTitle = {
  fontSize: "1.25rem",
  fontWeight: "800",
  color: "#2d3436",
  margin: "0 0 8px 0",
};
const cardDesc = {
  fontSize: "0.9rem",
  color: "#636e72",
  lineHeight: "1.5",
  margin: 0,
};

const cardFooter = {
  marginTop: "auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "15px",
  borderTop: "1px solid #f1f5f1",
};

const pageTag = { fontSize: "0.8rem", fontWeight: "700", color: "#a0aaa0" };

export default HomeMenu;
