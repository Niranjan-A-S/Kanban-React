import { MouseEventHandler } from "react";
import styled from "styled-components";

interface IButton {
  buttonName: string;
  onClick?: MouseEventHandler;
}

export const Button = (props: IButton) => {
  const { buttonName, onClick } = props;

  return <StyledButton onClick={onClick} children={buttonName} />;
};

const StyledButton = styled.button`
  background-color: white;
  color: #4b7be5;
  border: 1px solid #4b7be5;
  padding: 0px 10px;
  font-size: 16px;
  height: 31px;
  width: 120px;
`;
