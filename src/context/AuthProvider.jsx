import React from 'react'
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import clientAxios from '../config/clientAxios';


export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState('')

    useEffect(() => {
        const checkUser = async () => {
            let token = JSON.parse(localStorage.getItem("token")).token;
            setToken(token);
        }
        checkUser();
    }, [])


    const isAuthenticated = () => localStorage.getItem('token') ? JSON.parse(localStorage.getItem("token")) : false;

    const isAdmin = () => localStorage.getItem("token")
        ? JSON.parse(localStorage.getItem("token")).role === 0 || JSON.parse(localStorage.getItem("token")).role === 1
        : false;


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            loading,
            isAuthenticated,
            isAdmin,
            token
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider