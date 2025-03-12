import axios from 'axios';

// Crear el cliente Axios
const clientAxios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  // baseURL: `https://paulo-freire-backend.vercel.app/api` // Si prefieres usar la URL estática
});

// Interceptor de respuesta para manejar errores globalmente
clientAxios.interceptors.response.use(
  (response) => response, // Si la respuesta es exitosa, la devuelve tal cual
  (error) => {
    // Si el error no tiene respuesta, solo propaga el error
    return Promise.reject(error);
  }
);

export default clientAxios;
