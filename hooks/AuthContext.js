import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Crea un nuevo contexto de autenticación
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // El estado para almacenar el token de autenticación
  const [token, setToken] = useState("");

  // Función para establecer el token después de iniciar sesión
  const login = async () => {
    try {
      // Realiza una solicitud para iniciar sesión y obtén el token
      const response = await axios.post(
        "https://smartwater101.herokuapp.com/login",
        {
          phoneNumber: "+59171717171",
          password: "123456",
        }
      );
      setToken(response.data.token);

      // Agrega un console.log para mostrar el token en la consola
      console.log("Token obtenido:", response.data.token);
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  }

  // Función para cerrar sesión y eliminar el token
  const logout = () => {
    setToken("");
  }

  // Verifica si el usuario ya está autenticado al cargar la aplicación
  useEffect(() => {
    // Puedes agregar aquí la lógica para verificar si el usuario ya tiene un token válido
    // Si es así, puedes establecer el token en el estado
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para acceder al contexto de autenticación
export function useAuth() {
  return useContext(AuthContext);
}
