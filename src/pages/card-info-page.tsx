import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/common";
import { GlobalStyles } from "../styles";

export const CardInfo = () => {
  const navigate = useNavigate();

  const {
    state: { avatar, name, description, type, priority, status },
  } = useLocation();

  return (
    <>
      <GlobalStyles />
      <CardInfoWrapper>
        <CardAvatar src={avatar} />
        <p>
          Name : <CardDetails>{name}</CardDetails>
        </p>
        <p>
          Description : <CardDetails>{description}</CardDetails>
        </p>
        <p>
          Priority: <CardDetails>{priority}</CardDetails>
        </p>
        <p>
          Status : <CardDetails>{status}</CardDetails>
        </p>
        <p>
          Type : <CardDetails>{type}</CardDetails>
        </p>
        <Button buttonName={"Go Back"} onClick={() => navigate(-1)} />{" "}
      </CardInfoWrapper>
    </>
  );
};

const CardInfoWrapper = styled.div`
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 80%;
  padding: 30px 60px;
  gap: 20px;
`;

const CardAvatar = styled.img`
  border-radius: 100%;
  width: 200px;
  height: 200px;
`;

const CardDetails = styled.span`
  font-weight: bold;
  text-transform: capitalize;
`;
