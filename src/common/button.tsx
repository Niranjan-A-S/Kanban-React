import styled from "styled-components";

interface IButton {
  buttonName: string;
  className?: string;
}

export const Button = (props: IButton) => {
  const { buttonName, className } = props;

  return <ButtonWrapper className={className}>{buttonName}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  color: white;
  background-color: #4b7be5;
  border: none;
  padding: 7px 15px;
  font-size: 17px;
`;
