import React from "react";

export interface ICategoryProps {
  category: string;
}

export interface ICategoryTitleProps {
  children: string;
  category: string;
}

export interface ICardPriorityTypes {
  children: string;
  type: string;
}

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
  cardsArray?: ICardDetailsType[];
  setCardsArray?: React.Dispatch<React.SetStateAction<Array<ICardDetailsType>>>;
  sortCards?(sortValue: string): void;
}

export interface ISortValueContextType {
  sortValue: string;
}

export const ItemTypes = {
  CARD: "card",
};
