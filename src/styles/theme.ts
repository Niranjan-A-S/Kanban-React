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

export const linkStyle = {
  color: "#94D0CC   ",
  height: "fit-content",
  margin: "0 0 0 110px",
  fontWeight: "bold",
};
