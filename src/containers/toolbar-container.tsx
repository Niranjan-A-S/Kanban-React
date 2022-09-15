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
  const { setSortValue, setDisplay } = useContext(CardContext);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.target.value);
  };

  const displayFormOnClick = () => {
    setDisplay(true);
  };

  return (
    <ToolbarContainer>
      <Button buttonName="Add Task" handleClick={displayFormOnClick} />
      <SelectField optionsArray={optionsArray} handleChange={handleChange} />
    </ToolbarContainer>
  );
};

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 20px 50px;
`;
