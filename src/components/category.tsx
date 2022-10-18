import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import { ICardDetails } from "../types";
import { Card } from "./card";

interface ICategory {
  category: string;
  status: string;
  cardsArray: ICardDetails[];
}

export const Category = forwardRef(
  (props: ICategory, ref: ForwardedRef<HTMLDivElement>) => {
    const { category, status, cardsArray } = props;

    return (
      <CardCategoryContainerWrapper category={category}>
        <Title category={category}>{status}</Title>
        <CardsList category={category} ref={ref}>
          {cardsArray.map(
            (card) =>
              card.status === status && <Card key={card.id} item={card} />
          )}
        </CardsList>
      </CardCategoryContainerWrapper>
    );
  }
);

const CardCategoryContainerWrapper = styled.div<{ category: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme, category }) => theme.categoryColors[category]} 0px 2px
    4px;
`;

const Title = styled.h1<{ children: string; category: string }>`
  width: 100%;
  text-transform: capitalize;
  text-align: center;
  font-size: 20px;
  padding: 5px 0;
  color: ${({ theme, category }) => theme.categoryColors[category]};
  background-color: #fff;
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
