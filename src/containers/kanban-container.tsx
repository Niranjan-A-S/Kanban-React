import { memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CategoryList, Toolbar } from "../containers";
import { GlobalStyles } from "../styles";
import { CardContext } from "../context";
import { AddCardForm, Loader } from "../components";
import { CardSortCriterion } from "../enums";
import { ICardDetails } from "../types";
import { sortCards } from "../utils";

export const KanbanBoard = memo(() => {
  const [cardsArray, setCardsArray] = useState<ICardDetails[]>([]);
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
    (data: ICardDetails[]) => {
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
          cardsArray,
          setCardsArray,
          sortValue,
          onSort,
          setDisplay,
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
            <CategoryList />
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
  margin-top: 20px;
`;

const OverlayContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: -20px;
`;
