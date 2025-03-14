import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useErrorContext } from "../../components/ErrorContext.jsx"; // Importa el contexto

const Error400Page = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { error, setError } = useErrorContext(); // Usa el contexto

  // Obtener el código de error de la redirección (opcional)
  const errorCode = location.state?.errorCode || error;

  useEffect(() => {
    if (errorCode !== 400) {
      navigate("/"); // Redirige al inicio si no es un error 400
    } else {
      setError(null); // Limpia el error solo si es 400
    }
  }, [errorCode, navigate, setError]);

  if (errorCode !== 400) return null; // No renderiza nada si no es un error 400

  const handleRedirect = () => {
    navigate("/"); // Redirige al inicio
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.iconContainer}>
          <div style={styles.icon}>!</div>
        </div>
        <h1 style={styles.alerta}>400</h1>
        <h1 style={styles.title}>¡Vaya! Solicitud incorrecta</h1>
        <p style={styles.message}>
          La solicitud que has enviado no es válida. Por favor, revisa los datos e inténtalo de nuevo.
        </p>
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
    justifyContent: "center",
    marginBottom: "20px",
  },
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "80px",
    height: "80px",
    backgroundColor: "#3498db",
    color: "#fff",
    fontSize: "40px",
    fontWeight: "bold",
    borderRadius: "20px",
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
    backgroundColor: "#F6C81A",
    color: "#000",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  alerta: {
    fontSize: "26px",
    fontWeight: "bold",
    margin: "20px 0",
    color: "#333",
  },
};

export default Error400Page;
