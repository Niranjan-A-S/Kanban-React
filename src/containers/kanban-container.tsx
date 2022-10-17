import { memo, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { CardCategoryContainer, Toolbar } from "../containers";
import { sortCards } from "../common";
import { GlobalStyles } from "../styles";
import { CardContext } from "../context";
import { AddCardForm } from "../components";
import { CardSortCriterion } from "../enums";
import { ICardDetailsType } from "../types";

export const KanbanContainer = memo(() => {
  const [cardsArray, setCardsArray] = useState<ICardDetailsType[]>([]);
  const [display, setDisplay] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [sortValue, setSortValue] = useState<string>(
    CardSortCriterion.HIGHTOLOW
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
          <LoaderContainer>
            <LoadingTitle children="Loading..." />
            <Spinner />
          </LoaderContainer>
        ) : (
          <KanbanContainerWrapper>
            <GlobalStyles />
            <Header>
              <Title>Kanban Board</Title>
              <Link to={"profile"}>
                <UserProfile src="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
              </Link>
            </Header>
            <Toolbar />
            {display && <AddCardForm />}
            <CardBoardWrapper>
              <CardCategoryContainer />
            </CardBoardWrapper>
          </KanbanContainerWrapper>
        )}
      </CardContext.Provider>
    </>
  );
});

const KanbanContainerWrapper = styled.div`
  position: relative;
  margin: 0;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 92% 8%;
`;

const Title = styled.span`
  color: #4b7be5;
  font-size: 30px;
  text-align: center;
  margin: 20px 0;
  font-weight: bolder;
`;

const UserProfile = styled.img`
  height: 60px;
  width: 60px;
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
