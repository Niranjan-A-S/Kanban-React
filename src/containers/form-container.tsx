import styled from "styled-components";
import { AddCardForm } from "../components";

export const FormContainer = () => {
  return (
    <StyledFormContainer>
      <AddCardForm />
    </StyledFormContainer>
  );
};

const StyledFormContainer = styled.div`
  width: fit-content;
  margin: 20px 0;
  position: fixed;
  right: 0;
  animation: moveInLeft 0.8s;
  background-color: #fff;
  z-index: 2;
`;
