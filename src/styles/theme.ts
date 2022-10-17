import { CardStateColors, CardTypeColors } from "../enums";

export const theme = {
  categoryColors: {
    requested: CardStateColors.REQUESTED,
    inProgress: CardStateColors.INPROGRESS,
    completed: CardStateColors.COMPLETED,
  },

  cardTypeColors: {
    feature: CardTypeColors.FEATURE,
    enhancement: CardTypeColors.ENHANCEMENT,
    bug: CardTypeColors.BUG,
  },
};
