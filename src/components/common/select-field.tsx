import { ChangeEventHandler } from "react";
import styled from "styled-components";

interface IOptions {
  label: string;
  value: string;
}

interface ISelectField {
  sortValue?: string;
  optionsArray: Array<IOptions>;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  required?: boolean;
}

export const SelectField = (props: ISelectField) => {
  const { optionsArray, onChange, sortValue } = props;

  return (
    <SelectFieldWrapper required value={sortValue} onChange={onChange}>
      {optionsArray.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectFieldWrapper>
  );
};

const SelectFieldWrapper = styled.select`
  height: 30px;
  border: 1px solid black;
  width: 110px;
  font-size: 16px;
`;
