import { EventContextProvider } from "./providers/EventContext";
import { ProofContextProvider } from "./providers/ProofContext";
import { AuthContextProvider } from "./providers/AuthContext";
import { combineComponents } from "./helpers/combineComponents";

const providers = [
  AuthContextProvider,
  EventContextProvider,
  ProofContextProvider,
];
export const AppContextProvider = combineComponents(...providers);
