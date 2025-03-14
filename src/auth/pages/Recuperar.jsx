import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSend, IoIosEye, IoIosEyeOff } from "react-icons/io";
import Spinner from '../../components/Spinner';
import { toast } from 'react-hot-toast';
import clientAxios from '../../config/clientAxios';
import ReCAPTCHA from 'react-google-recaptcha';

const Recuperar = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [token, setToken] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [passwordStrengthText, setPasswordStrengthText] = useState('');
    const [loading, setLoading] = useState(false);
    const [loadingToken, setLoadingToken] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [step, setStep] = useState(1); // Manejo de los pasos
    const captchaRef = useRef(null);
    
    // Nuevos estados para mostrar/ocultar contraseña
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
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

        if (strength <= 2) {
            setPasswordStrengthText('Débil');
        } else if (strength <= 4) {
            setPasswordStrengthText('Media');
        } else {
            setPasswordStrengthText('Fuerte');
        }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!captchaValue) {
          toast.error('Por favor verifica que no eres un robot.');
          return;
      }
  
      if (email.trim() === '') {
          toast.error('Por favor ingresa tu correo.');
          return;
      }
  
      setLoading(true);
      try {
          // Verificar si el email existe
          const response = await clientAxios.get(`/user/email/${email}`);
          if (response.status === 404) {
              toast.error('El correo no está registrado.');
              return;
          }
  
          // Si el correo existe, continuar con el envío del token
          const tokenResponse = await clientAxios.post('/token-create', { email });
          if (tokenResponse.status === 201) {
              toast.success('Se ha enviado un token de verificación a tu correo.');
              setStep(2);
          }
      } catch (error) {
          if (error.response && error.response.status === 404) {
              toast.error('El correo no está registrado.');
          } else {
              toast.error('Hubo un error al verificar el correo.');
          }
      } finally {
          setLoading(false);
      }
  };  

    const handleTokenSubmit = async (e) => {
        e.preventDefault();
        setLoadingToken(true);
        try {
            const response = await clientAxios.post('/token-verify', { email, token });
            if (response.status === 200) {
                setStep(3);
            }
        } catch (error) {
            console.error(error.response?.data || error);
            toast.error('Token inválido o ya utilizado.');
        } finally {
            setLoadingToken(false);
        }
    };

    const checkPasswordPwned = async (password) => {
      const sha1Hash = await crypto.subtle.digest('SHA-1', new TextEncoder().encode(password));
      const hashHex = Array.from(new Uint8Array(sha1Hash))
        .map((b) => b.toString(16).padStart(2, '0'))
        .join('')
        .toUpperCase();
  
      const prefix = hashHex.slice(0, 5);
      const suffix = hashHex.slice(5);
  
      try {
          const response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
          const data = await response.text();
  
          // Verificar si el sufijo está en la lista de hashes filtrados
          return data.split('\n').some((line) => line.split(':')[0] === suffix);
      } catch (error) {
          console.error('Error verificando contraseñas comprometidas:', error);
          toast.error('No se pudo verificar si la contraseña ha sido comprometida.');
          return false;
      }
  };
  
  const handlePasswordSubmit = async (e) => {
      e.preventDefault();
  
      if (password !== confirmPassword) {
          toast.error('Las contraseñas no coinciden.');
          return;
      }
  
      if (passwordStrengthText === 'Débil') {
          toast.error('La contraseña es débil. Por favor, elija una más fuerte.', { icon: '⚠️' });
          return;
      }
  
      // Verificar si la contraseña está comprometida
      const isCompromised = await checkPasswordPwned(password);
      if (isCompromised) {
          toast.error('Esta contraseña está comprometida. Por favor, elija una diferente.');
          return;
      }
  
      // Verificar si la contraseña está en el historial
      try {
          const response = await clientAxios.post('/user/password-history', { email, password });
          if (response.status === 400) {
              toast.error(response.data.message); // Mensaje del servidor si la contraseña está en el historial
              return;
          }
      } catch (error) {
          console.error(error.response?.data || error);
          toast.error('Esa contraseña ya fue usada anteriormente.');
          return;
      }
  
      setLoading(true);
      try {
          const response = await clientAxios.put(`/user/email/${email}`, { password });
          if (response.status === 200) {
              toast.success('Contraseña actualizada correctamente.');
              navigate('/login');
          }
      } catch (error) {
          console.error(error.response?.data || error);
          toast.error('Error al actualizar la contraseña.');
      } finally {
          setLoading(false);
      }
  };  

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300 my-16">
          <h1 className="text-4xl font-bold text-center text-slate-700">Recuperar Contraseña</h1>
      
          {step === 1 && (
            <form onSubmit={handleSubmit} className="my-5">
              <div className="flex flex-col space-y-5">
                <div>
                  <label htmlFor="email" className="font-medium text-slate-700 pb-2">Correo:</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className='input-auth'
                    placeholder="Ingrese su Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='flex items-center justify-center'>
                  <ReCAPTCHA
                    sitekey="6LeHymIqAAAAAIZGIyMwk1w749yFwuajNcPCUdNq"
                    onChange={handleCaptchaChange}
                    ref={captchaRef}
                  />
                </div>
                {
                  !loading ? (
                    <button className="btn-action">
                      <IoIosSend className="w-6 h-6" />
                      <span>Enviar</span>
                    </button>
                  ) : (
                    <Spinner />
                  )
                }
              </div>
            </form>
          )}
      
          {step === 2 && (
            <form onSubmit={handleTokenSubmit} className="my-5">
              <div className="flex flex-col space-y-5">
                <div>
                  <label htmlFor="token" className="font-medium text-slate-700 pb-2">Token:</label>
                  <input
                    type="text"
                    name="token"
                    id="token"
                    className='input-auth'
                    placeholder="Ingrese el token"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                  />
                </div>
                {
                  !loadingToken ? (
                    <button className="btn-action">
                      Verificar
                    </button>
                  ) : (
                    <Spinner />
                  )
                }
              </div>
            </form>
          )}
      
          {step === 3 && (
            <form onSubmit={handlePasswordSubmit} className="my-5">
              <div className="flex flex-col space-y-5">
                <div>
                  <label htmlFor="password" className="font-medium text-slate-700 pb-2">Nueva Contraseña:</label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      className="input-auth"
                      placeholder="Ingrese su nueva contraseña"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        evaluatePasswordStrength(e.target.value);
                      }}
                      required
                    />
                    <button 
                      type="button" 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                    </button>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className={`h-2 rounded ${passwordStrength <= 2 ? 'bg-red-500' : passwordStrength <= 4 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{ width: "65%" }}></div>
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
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-500"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <IoIosEyeOff /> : <IoIosEye />}
                    </button>
                  </div>
                </div>
                {
                  !loading ? (
                    <button className="btn-action">
                      Actualizar Contraseña
                    </button>
                  ) : (
                    <Spinner />
                  )
                }
              </div>
            </form>
          )}
        </div>
      );      
};

export default Recuperar;