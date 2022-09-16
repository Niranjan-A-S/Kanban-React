import { FormEvent, useContext, useState, MouseEvent } from "react";
import styled from "styled-components";
import { CardContext } from "../context";
import { Button, InputField, SelectField, InputDescription } from "../common";

const optionsArray = [
  {
    label: "*Type",
    value: "",
  },
  {
    label: "Enhancement",
    value: "enhancement",
  },
  {
    label: "Feature",
    value: "feature",
  },
  {
    label: "Bug",
    value: "bug",
  },
];

export const AddCardForm = () => {
  const { cardsArray, setCards, setDisplay } = useContext(CardContext);

  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [type, setType] = useState<string>("enhancement");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setCards([
      ...cardsArray,
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

    setDisplay(false);
  };

  const hideFormOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDisplay(false);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="*Name"
        required={true}
        maxLength={15}
        minLength={3}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <InputField
        type="number"
        placeholder="*Priority"
        required={true}
        max={100}
        min={0}
        value={priority}
        onChange={(event) => setPriority(+event.target.value)}
      />
      <SelectField
        optionsArray={optionsArray}
        handleChange={(event) => setType(event.target.value)}
      />
      <InputDescription
        placeholder={"Describe Your Card.."}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button buttonName="Cancel" handleClick={hideFormOnClick} />
      <Button buttonName="Save" />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  width: 525px;
  flex-wrap: wrap;
  justify-content: flex-end; ;
`;