import {
  FormEvent,
  useContext,
  useState,
  MouseEvent,
  useCallback,
  useMemo,
} from "react";
import styled from "styled-components";

import { CardContext } from "../context";
import { Button, SelectField } from "../components/common";
import { ICardDetailsType } from "../types";
import { sortCards } from "../utils";

export const AddCardForm = () => {
  const { cardsArray, setCardsArray, setDisplay, sortValue } =
    useContext(CardContext);

  const [name, setName] = useState<string>("");
  const [priority, setPriority] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const optionsArray = useMemo(
    () => [
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
    ],
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      let newCardsArray: ICardDetailsType[] = [
        ...cardsArray,
        {
          name,
          avatar: "/images/user.png",
          description,
          priority,
          type,
          status: "requested",
          id: cardsArray.length + 1,
        },
      ];

      sortCards(sortValue, newCardsArray);

      setCardsArray(newCardsArray);

      setDisplay(false);
    },
    [
      cardsArray,
      description,
      name,
      priority,
      setCardsArray,
      setDisplay,
      sortValue,
      type,
    ]
  );

  const hideFormOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setDisplay(false);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="*Name"
        required
        maxLength={15}
        minLength={3}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <InputField
        type="number"
        placeholder="*Priority"
        required
        max={100}
        min={0}
        value={priority}
        onChange={(event) => setPriority(parseInt(event.target.value))}
      />
      <SelectField
        optionsArray={optionsArray}
        onChange={(event) => setType(event.target.value)}
        required
      />
      <TextArea
        placeholder={"Describe Your Card.."}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <Button buttonName="Cancel" onClick={hideFormOnClick} />
      <Button buttonName="Save" />
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  width: 500px;
  padding: 20px;
  position: fixed;
  right: 0;
  animation: moveInLeft 0.8s;
  background-color: #fff;
  z-index: 2;
`;

const InputField = styled.input`
  padding: 5px;
  border: solid black;
  font-size: 20px;
  border-width: 1px;
  width: 35.5%;
`;

const TextArea = styled.textarea`
  border: solid black;
  border-width: 1px;
  font-size: 16px;
  resize: none;
  width: 100%;
  height: 80px;
`;
