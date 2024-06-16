import axios from 'axios';

const clientAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
    //baseURL: `https://paulo-freire-backend.vercel.app/api`
});

export default clientAxios;