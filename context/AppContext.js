import { createContext, useState } from "react";

const AppContext = createContext();

export default AppContext;

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("false");

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};
