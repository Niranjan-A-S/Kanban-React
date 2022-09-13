import { ChangeEvent } from "react";
import styled from "styled-components";

interface ISelectType {
  value: string;
  onChange(event: ChangeEvent<HTMLSelectElement>): void;
}

export const SelectType = (props: ISelectType) => {
  const { value, onChange } = props;

  return (
    <SelectTypeWrapper value={value} onChange={onChange}>
      <option value={"enhancement"}>Enhancement</option>
      <option value={"feature"}>Feature</option>
      <option value={"bug"}>Bug</option>
    </SelectTypeWrapper>
  );
};

const SelectTypeWrapper = styled.select`
  width: 10vw;
  height: 4vh;
  border: solid black;
  border-width: 0.05rem;
  font-size: 1rem;
`;
