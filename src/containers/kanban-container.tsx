import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { CardCategoryContainer, FormContainer, Toolbar } from "../containers";
import GlobalStyles from "../styles/globalStyle";
import { CardSortCriterion, ICardDetailsType } from "../types";
import { sortCards } from "../common/utils";
import { CardContext } from "../context";

export const KanbanContainer = memo(() => {
  const [cardsArray, setCardsArray] = useState<ICardDetailsType[]>([]);

  useEffect(() => {
    fetch("https://6319a5318e51a64d2be8c353.mockapi.io/card")
      .then((cardData) => cardData.json())
      .then((cardsArray) => sortCards(CardSortCriterion.HIGHTOLOW, cardsArray))
      .then((sortedArray) => setCardsArray([...sortedArray]));
  }, []);

  return (
    <CardContext.Provider
      value={{
        cardsArray: cardsArray,
        setCardsArray: setCardsArray,
      }}
    >
      <Container>
        <GlobalStyles />
        <TitleWrapper>Kanban Board</TitleWrapper>
        <Toolbar />
        <FormContainer />
        <CardBoardWrapper>
          <CardCategoryContainer />
        </CardBoardWrapper>
      </Container>
    </CardContext.Provider>
  );
});

const Container = styled.div`
  position: relative;
`;

const TitleWrapper = styled.h1`
  color: #4b7be5;
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
`;

const CardBoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem;
`;
