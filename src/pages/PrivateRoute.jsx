/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/Spinner";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isAdmin } = useContext(AuthContext);
    const location = useLocation();


    if (isAuthenticated() && isAdmin()) {
        return children;
    }

    return (
        <Navigate
            to="/"
            state={{ from: location }}
            replace
        />
    );
};

export default PrivateRoute;

