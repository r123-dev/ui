import { Reducer } from "./perform";
import { setUser } from "./user";

import { combineReducers } from "redux";
export const rootreducer = combineReducers({ Reducer, setUser });
