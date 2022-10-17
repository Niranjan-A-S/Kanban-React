import { CardSortCriterion } from "./enums";
import { ICardDetailsType } from "./types";

export const sortCards = (
  sortValue: string,
  cards: Array<ICardDetailsType>
): Array<ICardDetailsType> => {
  sortValue === CardSortCriterion.HIGH_TO_LOW
    ? cards.sort((a, b) => b.priority - a.priority)
    : cards.sort((a, b) => a.priority - b.priority);
  return cards;
};
