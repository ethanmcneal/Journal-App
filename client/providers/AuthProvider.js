import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/api";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [emailAlert, setEmailAlert] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);

  const handleRegister = async (user) => {
    try {
      let res = await axios.post(`${API_URL}/api/auth`, user);
      setUser(res.data.data);
      // console.log(user)
    } catch (error) {
      console.log(error);
      setEmailAlert(true);
      alert("email invalid or already in use");
    }
  };

  const handleLogin = async (user) => {
    try {
      let res = await axios.post(`${API_URL}/api/auth/sign_in`, user);
      setUser(res.data.data);
    } catch (error) {
      console.log(error);
      setLoginAlert(true);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.delete(`${API_URL}/api/auth/sign_out`);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        emailAlert: emailAlert,
        loginAlert: loginAlert,
        setUser: setUser,
        handleRegister: handleRegister,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
