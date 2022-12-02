import { createContext, useState, useContext } from "react";

const AppContext = createContext();
export default AppContext;

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("true");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
