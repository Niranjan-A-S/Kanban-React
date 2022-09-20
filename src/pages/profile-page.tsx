import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GlobalStyles } from "../styles";

export const UserProfile = () => {
  const { username, designation } = useParams();

  return (
    <>
      <GlobalStyles />
      <UserProfileWrapper>
        <UserAvatar src="https://i.pravatar.cc/300" />
        <UserName>User Name : {username}</UserName>
        <h2>Designation : {designation}</h2>
      </UserProfileWrapper>
    </>
  );
};

const UserProfileWrapper = styled.div`
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  left: 40%;
  top: 20%;
  padding: 30px 50px;
`;

const UserAvatar = styled.img`
  border-radius: 100%;
  width: 150px;
  height: 150px;
`;

export const UserName = styled.h1`
  color: rgb(80, 123, 204);
  margin: 10px 0;
`;
