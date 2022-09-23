import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Fallback } from "../common";

export const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <NoMatchPageWrapper>
      <Fallback name={"Page"} statement={"not found!"} />
      <Button buttonName={"Go Back"} handleClick={() => navigate(-1)} />{" "}
    </NoMatchPageWrapper>
  );
};

const NoMatchPageWrapper = styled.div`
  margin: 0 auto;
`;
