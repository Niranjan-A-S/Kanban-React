import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

body {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin:0;
  padding:0;
}

button {
  cursor: pointer;
}


.highlight{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.reject {
  cursor: not-allowed;
}

@keyframes moveInLeft {
  0% {
    opacity: 0%;
    transform: translateX(10rem);
  }

  100% {
    opacity: 100%;
    transform: translate(0);
  }
}

@keyframes moveInRight {
  0% {
    opacity: 100%;
    transform: translateX(-40rem);
  }
  100% {
    opacity: 0%;
    transform: translate(0);
  }
}
`;
