import styled from "styled-components";
import React, { useContext } from "react";
import { Card } from "../components";
import { CardContext } from "../context";
import { CardStates } from "../types";

export const CardCategoryContainer = () => {
  const { cardsArray } = useContext(CardContext);

  return (
    <>
      <CardCategoryContainerWrapper category="requested">
        <CardCategoryTitle
          children={CardStates.REQUESTED}
          category="requested"
        />
        <CardsContainer category="requested">
          {cardsArray?.map((card) => {
            return (
              card.status === "requested" && <Card key={card.id} item={card} />
            );
          })}
        </CardsContainer>
      </CardCategoryContainerWrapper>
      <CardCategoryContainerWrapper category="inProgress">
        <CardCategoryTitle
          children={CardStates.INPROGRESS}
          category="inProgress"
        />
        <CardsContainer category="inProgress">
          {cardsArray?.map((card) => {
            return (
              card.status === "in-progress" && (
                <Card key={card.id} item={card} />
              )
            );
          })}
        </CardsContainer>
      </CardCategoryContainerWrapper>
      <CardCategoryContainerWrapper category="completed">
        <CardCategoryTitle
          children={CardStates.COMPLETED}
          category="completed"
        />
        <CardsContainer category="completed">
          {cardsArray?.map((card) => {
            return (
              card.status === "completed" && <Card key={card.id} item={card} />
            );
          })}
        </CardsContainer>
      </CardCategoryContainerWrapper>
    </>
  );
};

const CardCategoryContainerWrapper = styled.div<{ category: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme, category }) => theme.categoryColors[category]} 0px 2px
    4px;
`;

const CardCategoryTitle = styled.h1<{ children: string; category: string }>`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 20px;
  padding: 5px 0;
  color: #fff;
  background-color: ${({ theme, category }) => theme.categoryColors[category]};
`;

const CardsContainer = styled.div<{ category: string }>`
  padding: 30px;
  height: 700px;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 10px;
  }
  &&::-webkit-scrollbar-track {
    background: #fff;
  }
  &&::-webkit-scrollbar-thumb {
    background: ${({ theme, category }) => theme.categoryColors[category]};
  }
`;
