import React, { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const userSignedIn = () => {
    setIsLoggedIn(true);
  };

  const userSignedOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, userSignedIn, userSignedOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
