import styled from "styled-components";
import { CardText } from "../../../../../../../../../common/CardText";

export const CardDescription = styled(CardText).attrs((props) => ({
  children: props.children,
}))`
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
