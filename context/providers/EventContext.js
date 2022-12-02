import { createContext, useState, useContext } from "react";

const EventContext = createContext();
export default EventContext;

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("opa");

  return (
    <EventContext.Provider value={{ theme, setTheme }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  return useContext(EventContext);
};
