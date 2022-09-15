import { memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import {
  CardCategoryContainer,
  FormContainer,
  Toolbar,
  OverlayContainer,
} from "../containers";
import GlobalStyles from "../styles/globalStyle";
import { CardSortCriterion, ICardDetailsType } from "../types";
import { sortCards } from "../common/utils";
import { CardContext } from "../context";

export const KanbanContainer = memo(() => {
  const [cardsArray, setCardsArray] = useState<ICardDetailsType[]>([]);

  const [sortValue, setSortValue] = useState<string>(
    CardSortCriterion.HIGHTOLOW
  );

  const [display, setDisplay] = useState<boolean>(false);

  const prepareCards = useCallback(
    (data: ICardDetailsType[]) => {
      sortCards(sortValue, data);
      setCardsArray(data);
    },
    [sortValue]
  );

  const onSort = useCallback(
    (value: string) => {
      setSortValue(value);
      sortCards(value, cardsArray);
    },
    [cardsArray]
  );

  useEffect(() => {
    fetch("https://6319a5318e51a64d2be8c353.mockapi.io/card")
      .then((cardData) => cardData.json())
      .then((cardsArray) => prepareCards(cardsArray));
  }, [prepareCards]);

  return (
    <CardContext.Provider
      value={{
        cardsArray: cardsArray,
        setCards: prepareCards,
        sortValue: sortValue,
        setSortValue: onSort,
        setDisplay: setDisplay,
      }}
    >
      <OverlayContainer display={display} />
      <Container>
        <GlobalStyles />
        <TitleWrapper>Kanban Board</TitleWrapper>
        <Toolbar />
        <FormContainer displayForm={display} animate={true} />
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
  padding: 50px;
`;
