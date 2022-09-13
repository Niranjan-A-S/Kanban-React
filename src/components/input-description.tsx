import { ChangeEvent } from "react";
import styled from "styled-components";

interface IInputDescription {
  placeholder: string;
  value: string;
  onChange(event: ChangeEvent<HTMLTextAreaElement>): void;
}

export const InputDescription = (props: IInputDescription) => {
  const { placeholder, value, onChange } = props;

  return (
    <InputDescriptionWrapper
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const InputDescriptionWrapper = styled.textarea`
  border: solid black;
  border-width: 0.05rem;
  font-size: 1rem;
  width: 100%;
  resize: none;
  height: 10vh;
`;
