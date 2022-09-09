import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import styled from "styled-components";
import { CardContext } from "../../../../../container/KanbanBoard";
import { FormButton } from "../components/FormButton";
import { InputDescription } from "../components/InputDescription";
import { InputName } from "../components/InputName";
import { InputPriority } from "../components/InputPriority";
import { SelectType } from "../components/SelectType";

export const StyledForm = styled.form`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  padding: 1rem;
  width: 34.2vw;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const AddTaskForm = () => {
  const { cardsArray, setCardsArray } = useContext(CardContext);

  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [type, setType] = useState<string>("*Type");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
