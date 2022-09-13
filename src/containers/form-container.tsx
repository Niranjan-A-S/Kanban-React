import styled from "styled-components";
import { AddTaskForm } from "./add-task-form";

const StyledFormContainer = styled.div`
  width: fit-content;
  margin: 20px 0;
  position: fixed;
  right: -530px;
  /* right: 0px; */
`;

export const FormContainer = (props: unknown) => {
  return (
    <StyledFormContainer>
      <AddTaskForm />
    </StyledFormContainer>
  );
};
