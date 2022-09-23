import { MouseEvent } from "react";
import styled from "styled-components";

interface IButton {
  buttonName: string;
  handleClick?(event?: MouseEvent<HTMLButtonElement>): void;
  className?: string;
}

export const Button = (props: IButton) => {
  const { buttonName, handleClick, className } = props;

  return (
    <ButtonWrapper className={className} onClick={handleClick}>
      {buttonName}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  color: white;
  background-color: #4b7be5;
  border: none;
  padding: 7px 15px;
  font-size: 17px;
  width: 120px;
`;
