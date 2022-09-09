import { AddTaskForm } from "../components/add-task-form/container/AddTaskForm";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  width: fit-content;
`;

export const FormContainer = (props: unknown) => {
  return (
    <StyledFormContainer>
      <AddTaskForm />
    </StyledFormContainer>
  );
};
