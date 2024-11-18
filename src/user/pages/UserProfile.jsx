import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const UserProfile = () => {
    const { logout } = useContext(AuthContext);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Perfil de Usuario</h1>
            <button
                onClick={logout}
                className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            >
                Cerrar Sesión
            </button>
        </div>
    );
};

export default UserProfile;
