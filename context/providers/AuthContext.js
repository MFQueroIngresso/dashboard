import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../../src/libs/api";

const AuthContext = createContext();
export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({ user: "Teste" });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
