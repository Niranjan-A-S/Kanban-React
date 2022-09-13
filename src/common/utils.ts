import { ICardDetailsType, CardSortCriterion } from "../types";

export const sortCards = (
  sortValue: string,
  cards: Array<ICardDetailsType>
): Array<ICardDetailsType> => {
  if (sortValue === CardSortCriterion.HIGHTOLOW) {
    cards.sort((a, b) => {
      return b.priority - a.priority;
    });
  } else if (sortValue === CardSortCriterion.LOWTOHIGH)
    cards.sort((a, b) => {
      return a.priority - b.priority;
    });
  return cards;
};
