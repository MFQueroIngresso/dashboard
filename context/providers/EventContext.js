import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../../src/libs/api";

const EventContext = createContext();
export default EventContext;

export const EventContextProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEvents = async () => {
    try {
      const { data } = await api.get("eventos");
      setEvents(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventContext.Provider value={{ events, loading }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  return useContext(EventContext);
};
