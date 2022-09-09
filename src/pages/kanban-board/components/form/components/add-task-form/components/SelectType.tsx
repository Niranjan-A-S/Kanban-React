import styled from "styled-components";
import { Select } from "../../../../../common/Select";

export const SelectType = styled(Select).attrs((props) => ({
  required: true,
}))`
  width: 10vw;
  height: 4vh;
  border: solid black;
  border-width: 0.05rem;
  font-size: 1rem;
`;
