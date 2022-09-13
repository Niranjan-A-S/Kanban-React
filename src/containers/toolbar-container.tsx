import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Button, SelectField } from "../common";

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
  const [sortValue, setSortValue] = useState<string>("highToLow");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.target.value);
  };

  return (
    <ToolbarContainer>
      <Button buttonName="Add Task" />
      <SelectField
        optionsArray={optionsArray}
        value={sortValue}
        handleChange={handleChange}
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
