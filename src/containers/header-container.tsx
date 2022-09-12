import React, { useState, useContext, createContext } from "react";
import { ISortValueContextType } from "../types";
import { CardContext } from "../pages/kanban-board";
import styled from "styled-components";
import { Button, Select } from "../common";

const Title = styled.h1`
  color: #4b7be5;
  font-size: 1.8rem;
  text-align: center;
  margin-top: 2rem;
`;

const AddTaskButton = styled(Button)`
  width: 10vw;
  height: 5vh;
  font-size: 1rem;
  margin: 2rem 0 0 2rem;
`;

const SortSelect = styled(Select)`
  font-size: 1rem;
  padding: 0.5rem;
  float: right;
  margin: 2rem 2rem 0 0;
`;

const sortOptions = [
  { label: "Sort By Priority", value: "" },
  { label: "High to Low", value: "highToLow" },
  { label: "Low to High", value: "lowToHigh" },
];

export const SortValueContext = createContext<ISortValueContextType>({
  sortValue: "",
});

export const HeaderContainer = () => {
  const { sortCards } = useContext(CardContext);

  const [sortValue, setSortValue] = useState(sortOptions[0].value);

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortValue(value);
    sortCards && sortCards(value);
  };

  return (
    <div>
      <Title>Kanban Board</Title>
      <AddTaskButton>+ Add Task</AddTaskButton>
      <SortValueContext.Provider value={{ sortValue: sortValue }}>
        <SortSelect value={sortValue} onChange={handleSort}>
          {sortOptions.map((option) => (
            <option
              key={option.value}
              label={option.label}
              value={option.value}
            ></option>
          ))}
        </SortSelect>
      </SortValueContext.Provider>
    </div>
  );
};
