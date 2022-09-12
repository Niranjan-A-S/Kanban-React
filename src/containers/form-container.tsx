import styled from "styled-components";
import { AddTaskForm } from "./add-task-form";

const StyledFormContainer = styled.div`
  width: fit-content;
`;

export const FormContainer = (props: unknown) => {
  return (
    <StyledFormContainer>
      <AddTaskForm/>
    </StyledFormContainer>
  );
};
