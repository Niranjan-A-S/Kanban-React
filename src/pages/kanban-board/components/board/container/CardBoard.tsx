import styled from "styled-components";
import { CardCategoryContainer } from "../components/card-category/container/CardCategoryContainer";

const StyledCardBoard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.5rem;
`;

export const CardBoard = () => {
  return (
    <StyledCardBoard>
      <CardCategoryContainer />
    </StyledCardBoard>
  );
};
