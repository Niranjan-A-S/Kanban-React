import { ChangeEvent, FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { CardContext } from "../pages/kanban-board";
import { Button, InputFields, Select } from "../common";
import { SortValueContext } from "./header-container";

export const AddTaskForm = () => {
  const { cardsArray, setCardsArray, sortCards } = useContext(CardContext);

  const { sortValue } = useContext(SortValueContext);

  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [type, setType] = useState<string>("*Type");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sortCards && sortCards(sortValue);

    setCardsArray &&
      cardsArray &&
      setCardsArray((prevArray) => [
        ...prevArray,
        {
          name: name,
          avatar: "https://cdn-icons-png.flaticon.com/512/1177/1177568.png",
          description: description,
          priority: priority,
          type: type,
          status: "requested",
          id: cardsArray.length + 1,
        },
      ]);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputName
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setName(event.target.value)
        }
      />
      <InputPriority
        value={priority}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPriority(+event.target.value)
        }
      />
      <SelectType
        value={type}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          setType(event.target.value)
        }
      >
        <option disabled>*Type</option>
        <option value={"enhancement"}>Enhancement</option>
        <option value={"feature"}>Feature</option>
        <option value={"bug"}>Bug</option>
      </SelectType>
      <InputDescription
        value={description}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(event.target.value)
        }
      />
      <FormButton>Cancel</FormButton>
      <FormButton>Save</FormButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1rem;
  width: 34.2vw;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

const InputName = styled(InputFields).attrs((props) => ({
  type: "text",
  placeholder: "*Name",
  minLength: `${3}`,
  maxLength: `${15}`,
  required: true,
}))``;

const InputDescription = styled.textarea.attrs(() => ({
  placeholder: "Describe your card...",
  cols: 30,
  rows: 4,
}))`
  border: solid black;
  border-width: 0.05rem;
  font-size: 1rem;
  width: 100%;
  resize: none;
  height: 10vh;
`;

const InputPriority = styled(InputFields).attrs(() => ({
  type: "number",
  placeholder: "*Priority",
  max: `${100}`,
  min: `${1}`,
  required: true,
}))``;

const SelectType = styled(Select).attrs((props) => ({
  required: true,
}))`
  width: 10vw;
  height: 4vh;
  border: solid black;
  border-width: 0.05rem;
  font-size: 1rem;
`;

const FormButton = styled(Button)`
  height: 5vh;
  width: 5vw;
  font-size: 1rem;
`;
