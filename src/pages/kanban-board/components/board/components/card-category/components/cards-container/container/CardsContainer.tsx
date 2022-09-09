import styled from "styled-components";
import { CategoryProps } from "../../../../../../../../../types/cardTypes";

export const CardsContainer = styled.div.attrs((props: CategoryProps) => ({
  category: props.category,
}))`
  padding: 2rem;
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  &&::-webkit-scrollbar {
    width: 0.5rem;
  }
  &&::-webkit-scrollbar-track {
    background: #fff;
  }
  &&::-webkit-scrollbar-thumb {
    background: ${({ theme, category }) => theme.categoryColors[category]};
  }
`;
