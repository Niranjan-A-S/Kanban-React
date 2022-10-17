import { memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CardCategory, Toolbar } from "../containers";
import { GlobalStyles } from "../styles";
import { CardContext } from "../context";
import { AddCardForm, Loader } from "../components";
import { CardSortCriterion } from "../enums";
import { ICardDetailsType } from "../types";
import { sortCards } from "../utils";

export const KanbanBoard = memo(() => {
  const [cardsArray, setCardsArray] = useState<ICardDetailsType[]>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortValue, setSortValue] = useState<string>(
    CardSortCriterion.HIGH_TO_LOW
  );

  useEffect(() => {
    axios
      .get("https://6319a5318e51a64d2be8c353.mockapi.io/card")
      .then((response) => {
        setLoading(false);
        prepareCards(response.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <>
      <CardContext.Provider
        value={{
          cardsArray: cardsArray,
          setCards: setCardsArray,
          sortValue: sortValue,
          onSort: onSort,
          setDisplay: setDisplay,
        }}
      >
        {display && <OverlayContainer />}
        {loading ? (
          <Loader />
        ) : (
          <KanbanBoardWrapper>
            <GlobalStyles />
            <Title children={"Kanban Board"} />
            <Toolbar />
            {display && <AddCardForm />}
            <CategoryWrapper>
              <CardCategory />
            </CategoryWrapper>
          </KanbanBoardWrapper>
        )}
      </CardContext.Provider>
    </>
  );
});

const KanbanBoardWrapper = styled.div`
  position: relative;
  margin: 0;
`;

const Title = styled.h1`
  color: #4b7be5;
  text-align: center;
  font-weight: bolder;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px;
`;

const OverlayContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
`;
