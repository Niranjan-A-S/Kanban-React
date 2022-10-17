import styled from "styled-components";

export const Loader = () => {
  return (
    <LoaderContainer>
      <Title children="Loading..." />
      <Spinner />
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  margin: -10px 0 0 -10px;
`;

const Spinner = styled.div`
  width: 70px;
  height: 70px;
  border: 3px solid;
  border-color: #fff transparent #4b7be5 transparent;
  border-radius: 100%;
  animation: spin-anim 1.2s linear infinite;
  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Title = styled.h1<{ children: string }>`
  color: #fff;
  margin-right: 30px;
`;
