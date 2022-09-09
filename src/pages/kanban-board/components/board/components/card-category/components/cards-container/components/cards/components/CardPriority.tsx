import styled from "styled-components";
import { CardPriorityTypes } from "../../../../../../../../../../../types/cardTypes";
import { CardText } from "../../../../../../../../../common/CardText";

export const CardPriority = styled(CardText).attrs(
  (props: CardPriorityTypes) => ({
    children: props.children,
    type: props.type,
  })
)`
  font-weight: 600;
  font-size: 1rem;
  height: fit-content;
  align-self: flex-end;
  color: ${({ theme, type }) => theme.cardTypeColors[type]};
`;
