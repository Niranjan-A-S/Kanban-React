import React, { MouseEvent } from "react";

export interface CategoryProps {
  category: string;
}

export interface CategoryTitleProps {
  children: string;
  category: string;
}

export interface CardPriorityTypes {
  children: string;
  type: string;
}

export interface CardDetailsType {
  id: number;
  avatar: string;
  name: string;
  description: string;
  priority: number;
  type: string;
  status: "requested" | "in-progress" | "completed";
}

export interface CardContextType {
  cardsArray: Array<CardDetailsType>;
  // cardAdded: boolean;
  // setCardAdded: React.Dispatch<React.SetStateAction<boolean>>;
  setCardsArray: React.Dispatch<React.SetStateAction<Array<CardDetailsType>>>;
}

// export interface DragEvent<T = Element> extends MouseEvent<T, NativeDragEvent> {
//   dataTransfer: DataTransfer;
// }
