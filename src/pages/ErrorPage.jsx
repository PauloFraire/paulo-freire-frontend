import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa"; // Importamos un ícono

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/"); // Redirige al inicio
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.iconContainer}>
          <FaExclamationTriangle size={80} color="#e74c3c" />
        </div>
        <h1 style={styles.title}>¡Vaya! Página no encontrada</h1>
        <p style={styles.message}>La página que buscas no existe o ha sido movida.</p>
        <button onClick={handleRedirect} style={styles.button}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    textAlign: "center",
  },
  content: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "40px 20px",
    maxWidth: "500px",
    width: "100%",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center", // Centra el icono horizontalmente
    marginBottom: "20px", // Separación entre el ícono y el título
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#333",
    margin: "20px 0",
  },
  message: {
    fontSize: "18px",
    color: "#555",
    marginBottom: "30px",
  },
  button: {
    padding: "15px 30px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default ErrorPage;
