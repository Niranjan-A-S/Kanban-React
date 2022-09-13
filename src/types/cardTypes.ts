export interface ICardDetailsType {
  id: number;
  avatar: string;
  name: string;
  description: string;
  priority: number;
  type: string;
  status: "requested" | "in-progress" | "completed";
}

export interface ICardContextType {
  cardsArray: ICardDetailsType[];
  setCardsArray: React.Dispatch<React.SetStateAction<Array<ICardDetailsType>>>;
}

export interface ISortValueContextType {
  sortValue: string;
}

export enum CardStateColors {
  REQUESTED = "rgb(80, 123, 204)",
  INPROGRESS = "rgb(248, 180, 69)",
  COMPLETED = "rgb(75, 196, 86)",
}

export enum CardStates {
  REQUESTED = "requested",
  INPROGRESS = "in-progress",
  COMPLETED = "completed",
}

export enum CardTypeColors {
  FEATURE = "#06ff00",
  ENHANCEMENT = "#4b7be5",
  BUG = "#ff1818",
}

export enum CardSortCriterion {
  HIGHTOLOW = "highToLow",
  LOWTOHIGH = "lowToHigh",
}
