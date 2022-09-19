import { ChangeEvent } from "react";
import styled from "styled-components";

interface IOptions {
  label: string;
  value: string;
}

interface ISelectField {
  sortValue?: string;
  optionsArray: Array<IOptions>;
  onChange(event: ChangeEvent<HTMLSelectElement>): void;
  required?: boolean;
}

export const SelectField = (props: ISelectField) => {
  const { optionsArray, onChange, sortValue, required } = props;

  return (
    <SelectFieldWrapper
      required={required}
      value={sortValue}
      onChange={onChange}
    >
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
