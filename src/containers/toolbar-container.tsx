import { ChangeEvent, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, SelectField } from "../components/common";
import { CardContext } from "../context";

export const Toolbar = () => {
  const { onSort, setDisplay, sortValue } = useContext(CardContext);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onSort(event.target.value);
  };

  const displayFormOnClick = () => {
    setDisplay(true);
  };

  const optionsArray = useMemo(
    () => [
      {
        label: "High to Low",
        value: "highToLow",
      },
      {
        label: "Low To High",
        value: "lowToHigh",
      },
    ],
    []
  );

  return (
    <ToolbarContainer>
      <Button buttonName="Add Task" onClick={displayFormOnClick} />

      <SelectField
        sortValue={sortValue}
        optionsArray={optionsArray}
        onChange={handleChange}
      />

      <Link style={{ width: "fit-content" }} to={"profile"}>
        <UserProfile src="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
      </Link>
    </ToolbarContainer>
  );
};

const ToolbarContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 10% 85% 5%;
  padding: 0 50px;
`;

const UserProfile = styled.img`
  height: 60px;
  width: 60px;
`;
