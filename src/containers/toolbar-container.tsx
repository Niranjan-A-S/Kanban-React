import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Button } from "../common";
import { SelectPriority } from "../components";

export const Toolbar = () => {
  const [sortValue, setSortValue] = useState<string>("highToLow");

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortValue(event.target.value);
  };

  return (
    <ToolbarContainer>
      <Button buttonName="Add Task" />
      <SelectPriority value={sortValue} handleChange={handleChange} />
    </ToolbarContainer>
  );
};

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 20px;
`;
