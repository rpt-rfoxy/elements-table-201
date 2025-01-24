import { createContext } from "react";
import { IData } from "./types";

export const TableDriver = createContext<IData<any, any>>({
  rows: [],
  heads: []
})