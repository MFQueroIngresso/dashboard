import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { api } from "../../src/libs/api";

const AuthContext = createContext();
export default AuthContext;

export const AuthContextProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState({});
  const [userLogged, setUserLogged] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleUserLogin = async ({ login, password }) => {
    setLoading(true);
    try {
      const { data } = await api.post("auth", {
        login: login,
        password: password,
      });

      if (data.result.length === 1) {
        const user = data.result.map(
          ({ ATIVO, CODIGO, EMAIL, GRUPO, LOGIN, REGRA_DE_ACESSO }) => {
            return { ATIVO, CODIGO, EMAIL, GRUPO, LOGIN, REGRA_DE_ACESSO };
          }
        );
        console.log(user[0]);
        setUserLogged(user[0]);
        router.push("/dashboard");
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setError(false);
    router.push("/");
    setUserLogged(null);
  };

  return (
    <AuthContext.Provider
      value={{
        handleUserLogin,
        handleLogout,
        userLogged,
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
