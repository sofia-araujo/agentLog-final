
import React, { createContext, useState, useContext, useEffect } from "react";

import axios from "axios";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log("useEffect foi chamado");

    const token = localStorage.getItem("authToken");
    console.log(`Token`, token)
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const loginPost = async (email, senha) => {


    try {
      const response = await axios.post('http://localhost:3000/usuario/login', { email, senha });
      localStorage.setItem('authToken', response.data.token);
        // ARMAZENA O TOKEN NO LOCALSTORAGE
      setIsAuthenticated(true);

    } catch (error) {
      console.error("Erro no login:", error);
    }

};

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginPost, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useAuth = () => {
  return useContext(AuthContext);
};
