import React from "react";
import { EventContextProvider } from "./providers/EventContext";
import { ProofContextProvider } from "./providers/ProofContext";
import { combineComponents } from "./helpers/combineComponents";

const providers = [EventContextProvider, ProofContextProvider];
export const AppContextProvider = combineComponents(...providers);
