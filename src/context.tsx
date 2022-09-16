import { createContext } from "react";
import { ICardContextType } from "./types";

export const CardContext = createContext<ICardContextType>({
  cardsArray: [],
  setCards: () => {},
  sortValue: "",
  onSort: () => {},
  setDisplay: () => {},
});
