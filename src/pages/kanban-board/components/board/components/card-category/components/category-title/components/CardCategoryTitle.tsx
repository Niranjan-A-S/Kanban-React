import styled from "styled-components";
import { CategoryTitleProps } from "../../../../../../../../../types/cardTypes";

export const CardCategoryTitle = styled.h1.attrs(
  (props: CategoryTitleProps) => ({
    children: props.children,
    category: props.category,
  })
)`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.09rem;
  font-size: 1.2rem;
  padding: 0.1rem;
  color: #fff;
  background-color: ${({ theme, category }) => theme.categoryColors[category]};
`;
