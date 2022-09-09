import styled from "styled-components";

export const CardAvatar = styled.img.attrs((props) => ({
  src: props.src,
}))`
  height: 9vh;
  width: 4.5vw;
  border-radius: 100%;
`;
