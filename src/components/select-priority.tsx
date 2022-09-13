import { ChangeEvent } from "react";
import styled from "styled-components";
import { CardSortCriterion } from "../types";

interface ISelectPriority {
  value: string;
  handleChange(event: ChangeEvent<HTMLSelectElement>): void;
}

export const SelectPriority = (props: ISelectPriority) => {
  const { value, handleChange } = props;

  return (
    <SelectPriorityWrapper value={value} onChange={handleChange}>
      <option value={CardSortCriterion.HIGHTOLOW}>High to Low</option>
      <option value={CardSortCriterion.LOWTOHIGH}>Low to High</option>
    </SelectPriorityWrapper>
  );
};

const SelectPriorityWrapper = styled.select`
  border: solid black;
  border-width: 1px;
  padding: 7px 10px;
  font-size: 17px;
  margin-right: 50px;
`;
