import styled from "styled-components";

export const InputDescription = styled.textarea.attrs(() => ({
  placeholder: "Describe your card...",
  cols: 30,
  rows: 4,
}))`
  border: solid black;
  border-width: 0.05rem;
  font-size: 1rem;
  width: 100%;
  resize: none;
  height: 10vh;
`;
