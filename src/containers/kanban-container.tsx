import { memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { CardCategoryContainer, FormContainer, Toolbar } from "../containers";
import { CardSortCriterion, ICardDetailsType } from "../types";
import { sortCards } from "../common";
import { CardContext } from "../context";
import { GlobalStyles } from "../styles";

export const KanbanContainer = memo(() => {
  const [cardsArray, setCardsArray] = useState<ICardDetailsType[]>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [sortValue, setSortValue] = useState<string>(
    CardSortCriterion.HIGHTOLOW
  );

  useEffect(() => {
    fetch("https://6319a5318e51a64d2be8c353.mockapi.io/card")
      .then((cardData) => cardData.json())
      .then((cardsArray) => {
        setLoading(false);
        prepareCards(cardsArray);
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
    <div>
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
          <LoaderContainer>
            <LoadingTitle children="Loading..." />
            <Spinner />
          </LoaderContainer>
        ) : (
          <Container>
            <GlobalStyles />
            <TitleWrapper>Kanban Board</TitleWrapper>
            <Toolbar />
            {display && <FormContainer />}
            <CardBoardWrapper>
              <CardCategoryContainer />
            </CardBoardWrapper>
          </Container>
        )}
      </CardContext.Provider>
    </div>
  );
});

const Container = styled.div`
  position: relative;
  margin: 0;
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

const OverlayContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const LoadingTitle = styled.h1<{ children: string }>`
  color: #fff;
  margin-right: 30px;
`;

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Spinner = styled.div`
  width: 70px;
  height: 70px;
  border: 3px solid;
  border-color: #fff transparent #4b7be5 transparent;
  border-radius: 100%;
  animation: spin-anim 1.2s linear infinite;
  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
