import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Button, Fallback } from "../common";
import { GlobalStyles } from "../styles";

export const UserProfile = () => {
  const navigate = useNavigate();
  const [profileParams] = useSearchParams();

  const username = profileParams.get("username");
  const designation = profileParams.get("designation");

  return (
    <>
      <GlobalStyles />
      <UserProfileWrapper>
        <UserAvatar src="/images/user.png" />
        {username && !designation ? (
          <>
            <UserName>User Name : {username}</UserName>
            <Fallback
              name={"Designation"}
              statement={`does not exist  for ${username}`}
            />
          </>
        ) : username && designation ? (
          <>
            <UserName>User Name : {username}</UserName>
            <h2>Designation : {designation}</h2>
          </>
        ) : (
          <Fallback name={"User"} statement={"does not exist"} />
        )}
        <Button buttonName={"Go Back"} handleClick={() => navigate(-1)} />{" "}
      </UserProfileWrapper>
    </>
  );
};

const UserProfileWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px 50px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: fit-content;
`;

const UserAvatar = styled.img`
  border-radius: 100%;
  width: 150px;
  max-height: 150px;
`;

export const UserName = styled.h1`
  color: rgb(80, 123, 204);
  margin: 10px 0;
`;
