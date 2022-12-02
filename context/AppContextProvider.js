import React from "react";
import { EventContext } from "./providers/EventContext";
import { combineComponents } from "./helpers/combineComponents";

const providers = [EventContext];
export const AppContextProvider = combineComponents(...providers);
