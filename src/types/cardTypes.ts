export interface ICardDetailsType {
  id: number;
  avatar: string;
  name: string;
  description: string;
  priority: number;
  type: string;
  status: string;
}

export interface ICardContextType {
  cardsArray: ICardDetailsType[];
  setCards: (data: ICardDetailsType[]) => void;
  sortValue: string;
  onSort: (sortValue: string) => void;
  setDisplay: (displayForm: boolean) => void;
}
