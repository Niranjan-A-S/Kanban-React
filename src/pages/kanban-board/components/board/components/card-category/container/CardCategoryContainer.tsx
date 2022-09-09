import { CardStateTitles } from "../../../../../../../types/cardEnums";
import { CardAvatar } from "../components/cards-container/components/cards/components/CardAvatar";
import { CardDescription } from "../components/cards-container/components/cards/components/CardDescription";
import { CardHeading } from "../components/cards-container/components/cards/components/CardHeading";
import { CardPriority } from "../components/cards-container/components/cards/components/CardPriority";
import { Card } from "../components/cards-container/components/cards/container/Card";
import { CardsContainer } from "../components/cards-container/container/CardsContainer";
import { CardCategoryTitle } from "../components/category-title/components/CardCategoryTitle";
import styled from "styled-components";
import { CategoryProps } from "../../../../../../../types/cardTypes";
import React, { useContext } from "react";
import { CardContext } from "../../../../../container/KanbanBoard";

const StyledCardCategoryContainer = styled.div.attrs(
  (props: CategoryProps) => ({
    category: props.category,
  })
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme, category }) => theme.categoryColors[category]} 0px 2px
    4px;
`;

export const CardCategoryContainer = () => {
  const { cardsArray } = useContext(CardContext);

  // const highlightContainers = (event: DragEvent<HTMLDivElement>): void => {
  //   console.log(event.target);
  // };

  return (
    <>
      <StyledCardCategoryContainer category="requested">
        <CardCategoryTitle
          children={CardStateTitles.REQUESTED}
          category="requested"
        />
        <CardsContainer category="requested">
          {cardsArray.map(
            (card) =>
              card.status === "requested" && (
                <Card type={card.type} key={card.id} draggable>
                  <CardAvatar src={card.avatar} />
                  <CardHeading children={card.name} />
                  <CardDescription children={card.description} />
                  <CardPriority
                    children={`Priority : ${card.priority}`}
                    type={card.type}
                  />
                </Card>
              )
          )}
        </CardsContainer>
      </StyledCardCategoryContainer>
      <StyledCardCategoryContainer category="inProgress">
        <CardCategoryTitle
          children={CardStateTitles.INPROGRESS}
          category="inProgress"
        />
        <CardsContainer category="inProgress">
          {cardsArray.map(
            (card) =>
              card.status === "in-progress" && (
                <Card type={card.type} key={card.id}>
                  <CardAvatar src={card.avatar} />
                  <CardHeading children={card.name} />
                  <CardDescription children={card.description} />
                  <CardPriority
                    children={`Priority : ${card.priority}`}
                    type={card.type}
                  />
                </Card>
              )
          )}
        </CardsContainer>
      </StyledCardCategoryContainer>
      <StyledCardCategoryContainer category="completed">
        <CardCategoryTitle
          children={CardStateTitles.COMPLETED}
          category="completed"
        />
        <CardsContainer category="completed">
          {cardsArray.map(
            (card) =>
              card.status === "completed" && (
                <Card type={card.type} key={card.id}>
                  <CardAvatar src={card.avatar} />
                  <CardHeading children={card.name} />
                  <CardDescription children={card.description} />
                  <CardPriority
                    children={`Priority : ${card.priority}`}
                    type={card.type}
                  />
                </Card>
              )
          )}
        </CardsContainer>
      </StyledCardCategoryContainer>
    </>
  );
};
