import styled from "styled-components";
import React, { ReactNode, useContext } from "react";
import { useDrag } from "react-dnd/dist/hooks";
import {
  ICardPriorityTypes,
  CardStates,
  ICategoryProps,
  ICategoryTitleProps,
  ItemTypes,
} from "../types";
import { CardText } from "../common";
import { CardContext } from "../pages/kanban-board";

const StyledCardCategoryContainer = styled.div.attrs(
  (props: ICategoryProps) => ({
    category: props.category,
  })
)`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme, category }) => theme.categoryColors[category]} 0px 2px
    4px;
`;

const CardCategoryTitle = styled.h1.attrs((props: ICategoryTitleProps) => ({
  children: props.children,
  category: props.category,
}))`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.09rem;
  font-size: 1.2rem;
  padding: 0.1rem;
  color: #fff;
  background-color: ${({ theme, category }) => theme.categoryColors[category]};
`;

const CardsContainer = styled.div.attrs((props: ICategoryProps) => ({
  category: props.category,
}))`
  padding: 2rem;
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 0.5rem;
  }
  &&::-webkit-scrollbar-track {
    background: #fff;
  }
  &&::-webkit-scrollbar-thumb {
    background: ${({ theme, category }) => theme.categoryColors[category]};
  }
`;

const Card = styled.div<{ type: string }>`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  font-size: 1rem;
  gap: 1rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  height: 30vh;
  width: 20vw;
  border-left: ${({ theme, type }) => theme.cardTypeColors[type]} solid;
  border-width: 0.5vw;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  user-select: none;
`;

const CardAvatar = styled.img.attrs((props) => ({
  src: props.src,
  draggable: false,
}))`
  height: 9vh;
  width: 4.5vw;
  border-radius: 100%;
`;

const CardDescription = styled(CardText)`
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 3;
  word-wrap: break-word;
  max-width: 16.7rem;
  min-height: 8vh;
  max-height: 8rem;
  -webkit-box-orient: vertical;
`;

const CardHeading = styled(CardText).attrs((props) => ({
  children: props.children,
}))`
  font-size: 1.7rem;
  font-weight: 600;
  margin-top: 10px;
  /* width: fit-content; */
`;

const CardPriority = styled(CardText).attrs((props: ICardPriorityTypes) => ({
  children: props.children,
  type: props.type,
}))`
  font-weight: 600;
  font-size: 1rem;
  height: fit-content;
  align-self: flex-end;
  color: ${({ theme, type }) => theme.cardTypeColors[type]};
`;

export const CardCategoryContainer = () => {
  const { cardsArray } = useContext(CardContext);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  console.log(drag);

  const renderCards = (cardStatus: string): ReactNode => {
    return (
      cardsArray &&
      cardsArray.map((card) => {
        let cardDiv;
        if (card.status === cardStatus) {
          cardDiv = (
            <Card
              ref={drag}
              style={{ opacity: isDragging ? 0.5 : 1 }}
              type={card.type}
              key={card.id}
            >
              <CardAvatar unselectable="on" src={card.avatar} ref={drag} />
              <CardHeading unselectable="on" children={card.name} />
              <CardDescription unselectable="on" children={card.description} />
              <CardPriority
                children={`Priority : ${card.priority}`}
                type={card.type}
              />
            </Card>
          );
        }
        return cardDiv;
      })
    );
  };

  return (
    <>
      <StyledCardCategoryContainer category="requested">
        <CardCategoryTitle
          children={CardStates.REQUESTED}
          category="requested"
        />
        <CardsContainer
          category="requested"
          children={renderCards(CardStates.REQUESTED)}
        ></CardsContainer>
      </StyledCardCategoryContainer>
      <StyledCardCategoryContainer category="inProgress">
        <CardCategoryTitle
          children={CardStates.INPROGRESS}
          category="inProgress"
        />
        <CardsContainer
          category="inProgress"
          children={renderCards(CardStates.INPROGRESS)}
        ></CardsContainer>
      </StyledCardCategoryContainer>
      <StyledCardCategoryContainer category="completed">
        <CardCategoryTitle
          children={CardStates.COMPLETED}
          category="completed"
        />
        <CardsContainer
          children={renderCards(CardStates.COMPLETED)}
          category="completed"
        ></CardsContainer>
      </StyledCardCategoryContainer>
    </>
  );
};
