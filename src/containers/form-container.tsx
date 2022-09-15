import styled from "styled-components";
import { AddTaskForm } from "./add-task-form";

interface IFormContainer {
  displayForm: boolean;
  animate: boolean;
}

export const FormContainer = (props: IFormContainer): any => {
  const { displayForm, animate } = props;

  return (
    displayForm && (
      <StyledFormContainer className={animate ? "animate" : "no"}>
        <AddTaskForm />
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
