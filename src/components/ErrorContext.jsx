import React, { createContext, useState, useContext } from "react";

// Crear el contexto con un valor predeterminado para evitar errores en el acceso.
export const ErrorContext = createContext({
  error: null,
  setError: () => {},
  resetError: () => {},
});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  // Función para resetear el error
  const resetError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, setError, resetError }}>
      {children}
    </ErrorContext.Provider>
  );
};

// Hook personalizado para acceder al contexto de error
export const useErrorContext = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useErrorContext debe usarse dentro de un ErrorProvider");
  }
  return context;
};
