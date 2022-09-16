import styled from "styled-components";
import { AddCardForm } from "../components";

interface IFormContainer {
  displayForm: boolean;
}

export const FormContainer = (props: IFormContainer): any => {
  const { displayForm } = props;

  return (
    displayForm && (
      <StyledFormContainer>
        <AddCardForm />
      </StyledFormContainer>
    )
  );
};

const StyledFormContainer = styled.div`
  width: fit-content;
  margin: 20px 0;
  position: fixed;
  right: 0;
  animation: moveInLeft 1s;
  background-color: #fff;
  z-index: 2;
`;
