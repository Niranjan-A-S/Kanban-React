import styled from "styled-components";

export const Card = styled.div<{ type: string }>`
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
