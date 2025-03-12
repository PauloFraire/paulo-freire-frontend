import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useErrorContext } from "./ErrorContext.jsx";

const ErrorHandler = ({ error }) => {
  const navigate = useNavigate();
  const { setError } = useErrorContext();

  useEffect(() => {
    if (error) {
      const status = error.response?.status || 500;
      setError(status); // Guarda el código de error

      navigate(`/error-${status}`, { state: { errorCode: status } }); // Pasa el error al componente
    }
  }, [error, navigate, setError]);

  return null;
};

export default ErrorHandler;
