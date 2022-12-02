import React from "react";
import { EventContextProvider } from "./providers/EventContext";
import { combineComponents } from "./helpers/combineComponents";

const providers = [EventContextProvider];
export const AppContextProvider = combineComponents(...providers);
