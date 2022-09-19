import { ChangeEvent, useContext } from "react";
import styled from "styled-components";
import { Button, SelectField } from "../common";
import { CardContext } from "../context";

const optionsArray = [
  {
    label: "High to Low",
    value: "highToLow",
  },
  {
    label: "Low To High",
    value: "lowToHigh",
  },
];

export const Toolbar = () => {
  const { onSort, setDisplay, sortValue } = useContext(CardContext);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSort(event.target.value);
  };

  const displayFormOnClick = () => {
    setDisplay(true);
  };

  return (
    <ToolbarContainer>
      <Button buttonName="Add Task" handleClick={displayFormOnClick} />
      <SelectField
        sortValue={sortValue}
        optionsArray={optionsArray}
        onChange={handleChange}
      />
    </ToolbarContainer>
  );
};

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 20px 50px;
`;
