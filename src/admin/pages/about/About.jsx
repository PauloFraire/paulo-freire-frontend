import React, { useEffect, useState } from "react";
import clientAxios from "../../../config/clientAxios";

const About = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Perfil de la empresa</h1>
      <p className="text-lg mb-8">Información sobre la empresa.</p>
    </div>
  );
};

export default About;
