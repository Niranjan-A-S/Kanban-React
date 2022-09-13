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
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-left: 50px;
`;
