import { useContext, memo, useCallback } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { CardContext } from "../context";
import { Card } from "../components";
import { CardStates, ItemType } from "../enums";
import { sortCards } from "../utils";

interface IDragItem {
  id: number;
  status: string;
}

export const CardCategory = memo(() => {
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

  const [, requested] = useDrop(
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

  const [, inProgress] = useDrop(
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

  const [, completed] = useDrop(
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
      <CardCategoryWrapper category="requested">
        <Title children={CardStates.REQUESTED} category="requested" />
        <CardsList category="requested" ref={requested}>
          {cardsArray?.map((card) => {
            return (
              card.status === "requested" && <Card key={card.id} item={card} />
            );
          })}
        </CardsList>
      </CardCategoryWrapper>
      <CardCategoryWrapper category="inProgress">
        <Title children={CardStates.INPROGRESS} category="inProgress" />
        <CardsList category="inProgress" ref={inProgress}>
          {cardsArray?.map((card) => {
            return (
              card.status === "in-progress" && (
                <Card key={card.id} item={card} />
              )
            );
          })}
        </CardsList>
      </CardCategoryWrapper>
      <CardCategoryWrapper category="completed">
        <Title children={CardStates.COMPLETED} category="completed" />
        <CardsList category="completed" ref={completed}>
          {cardsArray?.map((card) => {
            return (
              card.status === "completed" && <Card key={card.id} item={card} />
            );
          })}
        </CardsList>
      </CardCategoryWrapper>
    </>
  );
});

const CardCategoryWrapper = styled.div<{ category: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme, category }) => theme.categoryColors[category]} 0px 2px
    4px;
`;

const Title = styled.h1<{ children: string; category: string }>`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 20px;
  padding: 5px 0;
  color: #fff;
  background-color: ${({ theme, category }) => theme.categoryColors[category]};
`;

const CardsList = styled.div<{ category: string }>`
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
