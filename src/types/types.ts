export interface ICardDetails {
  id: number;
  avatar: string;
  name: string;
  description: string;
  priority: number;
  type: string;
  status: string;
}

export interface ICardContext {
  cardsArray: ICardDetails[];
  setCardsArray: (data: ICardDetails[]) => void;
  sortValue: string;
  onSort: (sortValue: string) => void;
  setDisplay: (displayForm: boolean) => void;
}
