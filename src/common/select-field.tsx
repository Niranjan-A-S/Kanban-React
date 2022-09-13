import { ChangeEvent } from "react";
import styled from "styled-components";

interface IOptions {
  label: string;
  value: string;
}

interface ISelectField {
  optionsArray: Array<IOptions>;
  value: string;
  handleChange(event: ChangeEvent<HTMLSelectElement>): void;
}

export const SelectField = (props: ISelectField) => {
  const { optionsArray, value, handleChange } = props;

  return (
    <SelectFieldWrapper value={value} onChange={handleChange}>
      {optionsArray.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectFieldWrapper>
  );
};

const SelectFieldWrapper = styled.select`
  width: 155px;
  height: 30px;
  border: solid black;
  border-width: 1px;
  font-size: 16px;
`;
