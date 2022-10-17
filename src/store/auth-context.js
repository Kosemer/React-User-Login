import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // Ezt csak azért csinálom meg itt, hogy a VS code IDE lássa az onLogout-ot msáhol is és akkor nem kell leírni, csak egy kis tipp.
  onLogin: () => {}
}); // Létrehozok egy Context objektumot. Ez egy komponens vagy egy objektum lesz, amely komponenseket is tartalmaz, fogalmazzuk meg így.

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "Logged_In") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "Logged_In");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}; //Exportálom az AuthContextProvider-emet is az alapértelmezetten kívül nevesített exportként.

export default AuthContext;
