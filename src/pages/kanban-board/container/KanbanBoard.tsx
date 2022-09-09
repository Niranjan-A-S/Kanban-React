import GlobalStyles from "../../../styles/globalStyle";
import { CardBoard } from "../components/board/container/CardBoard";
import { FormContainer } from "../components/form/container/FormContainer";
import { HeaderContainer } from "../components/header/container/HeaderContainer";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../../styles/theme";
import { CardDetailsType, CardContextType } from "../../../types/cardTypes";
import React, { createContext, useEffect, useState, createRef } from "react";

let cardObj: CardContextType = {
  cardsArray: [],
  setCardsArray: () => {},
};

export const CardContext = createContext<CardContextType>(cardObj);
const StyledKanbanBoard = styled.div`
  position: relative;
`;

export const FormRef = createRef<HTMLDivElement>();

export const KanbanBoard = () => {
  const [cardsArray, setCardsArray] = useState<CardDetailsType[]>(
    cardObj.cardsArray
  );

  useEffect(() => {
    fetch("https://6319a5318e51a64d2be8c353.mockapi.io/card")
      .then((cardData) => cardData.json())
      .then((cardData) => {
        setCardsArray([...cardData]);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CardContext.Provider
        value={{
          cardsArray: cardsArray,
          setCardsArray: setCardsArray,
        }}
      >
        <StyledKanbanBoard>
          <GlobalStyles />
          <HeaderContainer />
          <FormContainer />
          <CardBoard />
        </StyledKanbanBoard>
      </CardContext.Provider>
    </ThemeProvider>
  );
};
