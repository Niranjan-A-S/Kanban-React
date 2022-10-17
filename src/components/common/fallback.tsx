import styled from "styled-components";

interface IFallback {
  name: string;
  statement: string;
}

export const Fallback = (props: IFallback) => {
  const { name, statement } = props;

  return <StyledFallback children={`${name}  ${statement}`} />;
};

const StyledFallback = styled.h1`
  color: red;
  font-weight: lighter;
  text-decoration: underline 1px;
`;
