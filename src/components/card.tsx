import { memo } from "react";
import styled from "styled-components";
import { ICardDetailsType } from "../types";

interface ICard {
  item: ICardDetailsType;
}

export const Card = memo((props: ICard) => {
  const {
    item: { avatar, id, name, priority, description, type },
  } = props;

  return (
    <CardWrapper type={type} key={id}>
      <CardAvatar unselectable="on" src={avatar} />
      <CardName unselectable="on" children={name} />
      <CardDescription unselectable="on" children={description} />
      <CardPriority children={`Priority : ${priority}`} type={type} />
    </CardWrapper>
  );
});

const CardWrapper = styled.div<{ type: string }>`
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
`;

const CardAvatar = styled.img`
  height: 9vh;
  width: 4.5vw;
  border-radius: 100%;
`;

const CardDescription = styled.p`
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

const CardName = styled.p`
  font-size: 1.7rem;
  font-weight: 600;
  margin-top: 10px;
`;

const CardPriority = styled.p<{ type: string }>`
  font-weight: 600;
  font-size: 1rem;
  height: fit-content;
  align-self: flex-end;
  color: ${({ theme, type }) => theme.cardTypeColors[type]};
`;
