import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import clientAxios from '../../config/clientAxios';
import Spinner from '../../components/Spinner';
import CryptoJS from 'crypto-js';

export default function Registro() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordStrengthText, setPasswordStrengthText] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };  

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Validar si se trata de los campos de 'name' o 'lastName'
    if (name === 'name' || name === 'lastName') {
      const regex = /^[a-zA-ZñÑüÜáéíóúÁÉÍÓÚ\s]*$/;
      if (!regex.test(value)) {
        toast.error('Solo se permiten letras, espacios y caracteres como ñ o ü en este campo.');
        return;
      }
    }
  
    setFormData({
      ...formData,
      [name]: value,
    });
  
    // Evaluar la fortaleza de la contraseña al escribir
    if (name === 'password') {
      evaluatePasswordStrength(value);
    }
  };  

  const evaluatePasswordStrength = (password) => {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const noCommonPatterns = !/(1234|password|abcd|qwerty)/i.test(password);

    let strength = 0;
    if (hasMinLength) strength += 1;
    if (hasUpperCase) strength += 1;
    if (hasLowerCase) strength += 1;
    if (hasNumber) strength += 1;
    if (hasSpecialChar) strength += 1;
    if (noCommonPatterns) strength += 1;

    setPasswordStrength(strength);

    // Establecer el texto de fortaleza de la contraseña
    if (strength <= 2) {
      setPasswordStrengthText('Débil');
    } else if (strength <= 4) {
      setPasswordStrengthText('Media');
    } else {
      setPasswordStrengthText('Fuerte');
    }
  };

  const checkPasswordPwned = async (password) => {
    // Calcular el hash SHA-1 de la contraseña
    const hash = CryptoJS.SHA1(password).toString(CryptoJS.enc.Hex).toUpperCase();
    const hashPrefix = hash.substring(0, 5);
    const hashSuffix = hash.substring(5);
  
    try {
      // Llamar a la API de HIBP con el prefijo del hash
      const response = await fetch(`https://api.pwnedpasswords.com/range/${hashPrefix}`);
      const data = await response.text();
  
      // Comprobar si el sufijo del hash está en la respuesta
      const lines = data.split('\n');
      const found = lines.some(line => {
        const [suffix, count] = line.split(':');
        return suffix.trim() === hashSuffix;
      });
  
      if (found) {
        toast.error('La contraseña ingresada ha sido filtrada anteriormente. Por favor, elige otra.');
        return false;
      }
  
      return true;
    } catch (error) {
      console.error('Error al verificar la contraseña:', error);
      toast.error('Hubo un error al verificar la contraseña.');
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.name.trim() === '' || 
        formData.lastName.trim() === '' || 
        formData.email.trim() === '' || 
        formData.password.trim() === '' || 
        formData.confirmPassword.trim() === '') {
      toast.error('Todos los campos son obligatorios');
      return;
    }

    if (!/[A-Z]/.test(formData.password) || 
    !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password) ||
    formData.password.length < 8) {
      toast.error('La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    if (passwordStrengthText === 'Débil') {
      toast.error('La contraseña es débil. Por favor, elija una más fuerte.',{ icon: '⚠️' });
      return;
    } else if (passwordStrengthText === 'Media') {
      toast('La contraseña es media, Por favor, elija una más fuerte.', { icon: '⚠️' });
      return;
    }

    const isPasswordSafe = await checkPasswordPwned(formData.password);
    if (!isPasswordSafe) {
      return;
    }

    setLoading(true);

    try {
      const response = await clientAxios.post('/user', {
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        role: 0
      });

      setLoading(false);
      
      if (response.status === 200) {
        toast.success('Usuario registrado correctamente');
        navigate('/login');
      }

    } catch (error) {
      console.error(error.response?.data || error); 
      toast.error('Hubo un error en el registro');
      setLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 1:
      case 2:
        return 'bg-red-500';
      case 3:
      case 4:
        return 'bg-yellow-500';
      case 5:
      case 6:
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300 my-16">
      <h2 className="text-4xl font-bold text-center text-slate-700">Registro</h2>
      <form onSubmit={handleSubmit} className="my-5">
        <div className="flex flex-col space-y-5">
          <div>
            <label htmlFor="name" className="font-medium text-slate-700 pb-2">Nombre:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="input-auth"
              placeholder="Ingrese su nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="font-medium text-slate-700 pb-2">Apellido:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="input-auth"
              placeholder="Ingrese su apellido"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="font-medium text-slate-700 pb-2">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-auth"
              placeholder="Ingrese su email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="font-medium text-slate-700 pb-2">Contraseña:</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                className="input-auth"
                placeholder="Ingrese su contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
            <div className="flex items-center mt-2">
              <div className={`h-2 rounded ${getPasswordStrengthColor()}`} style={{ width: "65%" }}></div>
              <span className="ml-2">{`Fortaleza: ${passwordStrengthText}`}</span>
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="font-medium text-slate-700 pb-2">Confirmar Contraseña:</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                id="confirmPassword"
                className="input-auth"
                placeholder="Confirme su contraseña"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>
          {
            !loading ? 
              <button type="submit" className="btn-action">
                Registrar
              </button> : 
              <Spinner />
          }
        </div>
      </form>
    </div>
  );  
}
