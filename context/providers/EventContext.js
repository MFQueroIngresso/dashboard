import { createContext, useState, useEffect, useContext } from "react";
import { api } from "../../src/libs/api";

const EventContext = createContext();
export default EventContext;

export const EventContextProvider = ({ children }) => {
  const [allEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEvents = async () => {
    try {
      const { data } = await api.get("eventos");
      setAllEvents(data);
      handleCurrentEvents(data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const showRemaingDays = (date) => {
    const one_day = 1000 * 60 * 60 * 24;
    const presentDate = Date.now();
    const dateCompare = new Date(date);
    if (
      new Date(presentDate).getMonth() == 11 &&
      new Date(presentDate).getDate() > 25
    )
      dateCompare.setFullYear(dateCompare.getFullYear() + 1);

    const result =
      Math.round(dateCompare.getTime() - new Date(presentDate).getTime()) /
      one_day;

    const finalResult = result.toFixed(0);
    return finalResult;
  };

  const handleAllEvents = () => {
    setLoading(true);
    setTimeout(() => setEvents(allEvents), 350);
    setTimeout(() => setLoading(false), 400);
  };

  const handleCurrentEvents = (data = allEvents) => {
    setLoading(true);
    const sorteableEvents = data.sort(
      (a, b) =>
        Number(showRemaingDays(a.eve_data)) -
        Number(showRemaingDays(b.eve_data))
    );
    const removePassEvents = sorteableEvents.filter((event) => {
      return showRemaingDays(event.eve_data) > 0;
    });
    setEvents(removePassEvents);
    setLoading(false);
  };

  const handlePastEvents = () => {
    setLoading(true);
    const pastEvents = allEvents.filter(
      (event) => showRemaingDays(event.eve_data) < 0
    );
    setTimeout(() => setEvents(pastEvents), 350);
    setTimeout(() => setLoading(false), 400);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <EventContext.Provider
      value={{
        events,
        loading,
        handleAllEvents,
        handleCurrentEvents,
        handlePastEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  return useContext(EventContext);
};
