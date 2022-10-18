import { CardSortCriterion } from "./enums";
import { ICardDetails } from "./types";

export const sortCards = (
  sortValue: string,
  cards: Array<ICardDetails>
): Array<ICardDetails> => {
  sortValue === CardSortCriterion.HIGH_TO_LOW
    ? cards.sort((a, b) => b.priority - a.priority)
    : cards.sort((a, b) => a.priority - b.priority);
  return cards;
};
