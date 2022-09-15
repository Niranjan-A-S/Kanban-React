import styled from "styled-components";

interface IOverLayContainer {
  display: any;
}

export const OverlayContainer = (props: IOverLayContainer) => {
  const { display } = props;

  return display && <OverlayContainerWrapper></OverlayContainerWrapper>;
};

const OverlayContainerWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
