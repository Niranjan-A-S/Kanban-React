import GlobalStyles from "../styles/globalStyle";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import React, { createContext, useEffect, useState } from "react";
import { CardSortCriterion } from "../types/cardEnums";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ICardContextType, ICardDetailsType } from "../types";
import { HeaderContainer, FormContainer, CardBoard } from "../containers";

export const CardContext = createContext<ICardContextType>({
  cardsArray: [],
});

const StyledKanbanBoard = styled.div`
  position: relative;
`;

export const KanbanBoard = () => {
  const [cardsArray, setCardsArray] = useState<ICardDetailsType[]>([]);

  useEffect(() => {
    fetch("https://6319a5318e51a64d2be8c353.mockapi.io/card")
      .then((cardData) => cardData.json())
      .then((cardData) => {
        setCardsArray([...cardData]);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={HTML5Backend}>
        <CardContext.Provider
          value={{
            cardsArray: cardsArray,
            setCardsArray: setCardsArray,
            sortCards: (sortValue: string) => {
              if (sortValue === CardSortCriterion.HIGHTOLOW) {
                let newArray: Array<ICardDetailsType> = cardsArray.sort(
                  (a: ICardDetailsType, b: ICardDetailsType) =>
                    b.priority - a.priority
                );
                setCardsArray([...newArray]);
              } else if (sortValue === CardSortCriterion.LOWTOHIGH) {
                let newArray: Array<ICardDetailsType> = cardsArray.sort(
                  (a: ICardDetailsType, b: ICardDetailsType) =>
                    a.priority - b.priority
                );
                setCardsArray([...newArray]);
              }
            },
          }}
        >
          <StyledKanbanBoard>
            <GlobalStyles />
            <HeaderContainer />
            <FormContainer />
            <CardBoard />
          </StyledKanbanBoard>
        </CardContext.Provider>
      </DndProvider>
    </ThemeProvider>
  );
};
