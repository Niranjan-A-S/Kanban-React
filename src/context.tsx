import { createContext } from "react";
import { ICardContext } from "./types";

export const CardContext = createContext<ICardContext>({
  cardsArray: [],
  setCardsArray: () => {},
  sortValue: "",
  onSort: () => {},
  setDisplay: () => {},
});
