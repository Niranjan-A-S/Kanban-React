import { MouseEvent } from "react";
import styled from "styled-components";

interface IButton {
  buttonName: string;
  handleClick?(event?: MouseEvent<HTMLButtonElement>): void;
}

export const Button = (props: IButton) => {
  const { buttonName, handleClick } = props;

  return <ButtonWrapper onClick={handleClick}>{buttonName}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  color: white;
  background-color: #4b7be5;
  border: none;
  padding: 7px 15px;
  font-size: 17px;
`;
