import { memo } from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";
import { ICardDetailsType, ItemType } from "../types";

interface ICard {
  item: ICardDetailsType;
}

export const Card = memo((props: ICard) => {
  const {
    item: { avatar, id, name, priority, description, type, status },
  } = props;

  const [, drag] = useDrag(() => ({
    item: { id, status },
    type: ItemType.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <CardWrapper ref={drag} type={type} key={id}>
      <CardAvatar src={avatar} />
      <CardName children={name} />
      <CardDescription children={description} />
      <CardPriority required children={`Priority : ${priority}`} type={type} />
    </CardWrapper>
  );
});

const CardWrapper = styled.div<{ type: string }>`
  height: 220px;
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  font-size: 15px;
  margin-bottom: 30px;
  gap: 15px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-left: ${({ theme, type }) => theme.cardTypeColors[type]} solid;
  border-width: 7px;
`;

const CardAvatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 100%;
`;

const CardName = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin-top: 10px;
`;

const CardDescription = styled.p`
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 4;
  word-wrap: break-word;
  max-width: 270px;
  min-height: 20px;
  max-height: 130px;
  -webkit-box-orient: vertical;
  margin: auto 0;
`;

const CardPriority = styled.p<{ type: string; required: true }>`
  font-weight: 600;
  font-size: 15px;
  height: fit-content;
  align-self: flex-end;
  color: ${({ theme, type }) => theme.cardTypeColors[type]};
`;
