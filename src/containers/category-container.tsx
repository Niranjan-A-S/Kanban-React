import { useContext, memo, useCallback } from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import { Category } from "../components";
import { CardContext } from "../context";
import { CardStates, ItemType } from "../enums";
import { sortCards } from "../utils";

interface IDragItem {
  id: number;
  status: string;
}

export const CategoryList = memo(() => {
  const { cardsArray, setCardsArray, sortValue } = useContext(CardContext);

  const dropCard = useCallback(
    (item: IDragItem, currentStatus: string, newStatus: string) => {
      console.log("dragging");

      cardsArray.map((card) => {
        card.id === item.id &&
          card.status === currentStatus &&
          (card.status = newStatus);
        return card;
      });

      sortCards(sortValue, cardsArray);
      setCardsArray(cardsArray);
    },
    [cardsArray, setCardsArray, sortValue]
  );

  const [, requested] = useDrop(
    () => ({
      accept: ItemType.CARD,
      drop: (item: IDragItem) => {
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
      drop: (item: IDragItem) => {
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
      drop: (item: IDragItem) => {
        dropCard(item, "in-progress", "completed");
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [cardsArray, dropCard]
  );

  return (
    <CategoryContainerWrapper>
      <Category
        category={"requested"}
        status={CardStates.REQUESTED}
        cardsArray={cardsArray}
        ref={requested}
      />
      <Category
        category={"inProgress"}
        status={CardStates.INPROGRESS}
        cardsArray={cardsArray}
        ref={inProgress}
      />
      <Category
        category={"completed"}
        status={CardStates.COMPLETED}
        cardsArray={cardsArray}
        ref={completed}
      />
    </CategoryContainerWrapper>
  );
});

const CategoryContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px;
`;
