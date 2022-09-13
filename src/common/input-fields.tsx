import { ChangeEvent } from "react";
import styled from "styled-components";

interface IInputField {
  type: string;
  placeholder: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  max?: number;
  min?: number;
  value: string | number;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

export const InputField = (props: IInputField) => {
  const {
    type,
    placeholder,
    required,
    maxLength,
    minLength,
    max,
    min,
    value,
    onChange,
  } = props;

  return (
    <InputFieldWrapper
      type={type}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      max={max}
      min={min}
      value={value}
      onChange={onChange}
    ></InputFieldWrapper>
  );
};

const InputFieldWrapper = styled.input`
  width: 152px;
  height: 30px;
  border: solid black;
  border-width: 1px;
  font-size: 16px;
`;
