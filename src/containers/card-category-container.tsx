import { useContext, memo, useCallback } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import { CardStates, ItemType } from "../types";
import { CardContext } from "../context";
import { Card } from "../components";
import { sortCards } from "../common";

interface IDragItem {
  id: number;
  status: string;
}

export const CardCategoryContainer = memo(() => {
  const { cardsArray, setCards, sortValue } = useContext(CardContext);

  const dropCard = useCallback(
    (item: IDragItem, currentStatus: string, newStatus: string) => {
      cardsArray.map((card) => {
        card.id === item.id &&
          card.status === currentStatus &&
          (card.status = newStatus);
        return card;
      });

      sortCards(sortValue, cardsArray);
      setCards(cardsArray);
    },
    [cardsArray, setCards, sortValue]
  );

  const [, req] = useDrop(
    () => ({
      accept: ItemType.CARD,
      drop: (item: IDragItem, monitor) => {
        dropCard(item, "in-progress", "requested");
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [cardsArray, dropCard]
  );

  const [, prog] = useDrop(
    () => ({
      accept: ItemType.CARD,
      drop: (item: IDragItem, monitor) => {
        dropCard(item, "requested", "in-progress");
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [cardsArray, dropCard]
  );

  const [, comp] = useDrop(
    () => ({
      accept: ItemType.CARD,
      drop: (item: IDragItem, monitor) => {
        dropCard(item, "in-progress", "completed");
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [cardsArray, dropCard]
  );

  return (
    <>
      <CardCategoryContainerWrapper category="requested">
        <CardCategoryTitle
          children={CardStates.REQUESTED}
          category="requested"
        />
        <CardsContainer category="requested" ref={req}>
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
        <CardsContainer category="inProgress" ref={prog}>
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
        <CardsContainer category="completed" ref={comp}>
          {cardsArray?.map((card) => {
            return (
              card.status === "completed" && <Card key={card.id} item={card} />
            );
          })}
        </CardsContainer>
      </CardCategoryContainerWrapper>
    </>
  );
});

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
  width: 360px;
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
