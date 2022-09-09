import styled from "styled-components";
import { CardText } from "../../../../../../../../../common/CardText";

export const CardHeading = styled(CardText).attrs((props) => ({
  children: props.children,
}))`
  font-size: 1.7rem;
  font-weight: 600;
  margin-top: 10px;
  /* width: fit-content; */
`;
