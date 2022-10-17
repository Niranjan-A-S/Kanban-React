import { memo, useMemo } from "react";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { ItemType } from "../enums";
import { ICardDetailsType } from "../types";

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

  const linkStyle = useMemo(() => {
    return {
      color: "#94D0CC   ",
      height: "fit-content",
      margin: "0 0 0 110px",
      fontWeight: "bold",
    };
  }, []);

  return (
    <CardWrapper ref={drag} type={type} key={id}>
      <CardAvatar src={avatar} />
      <CardName children={name} />
      <CardDescription children={description} />
      <CardPriority required children={`Priority : ${priority}`} type={type} />
      <Link
        style={linkStyle}
        to={`/kanban-board/card-info/${id}`}
        state={{ id, avatar, name, description, type, priority, status }}
      >
        Details
      </Link>
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
  border-left: 7px ${({ theme, type }) => theme.cardTypeColors[type]} solid;
`;

const CardAvatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 100%;
`;

const CardName = styled.p`
  font-size: 25px;
  font-weight: 600;
  height: fit-content;
  align-self: baseline;
  padding: 10px 20px;
`;

const CardDescription = styled.p`
  display: inline-block;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
  word-wrap: break-word;
  height: 78px;
  width: 100%;
  margin: auto 0;
`;

const CardPriority = styled.p<{ type: string; required: true }>`
  font-weight: 600;
  font-size: 15px;
  height: fit-content;
  color: ${({ theme, type }) => theme.cardTypeColors[type]};
`;
