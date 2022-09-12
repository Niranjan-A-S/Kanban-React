import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Inter, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-sans;
  font-style: inter;
  font-size: 10px;
}

button {
  cursor: pointer;
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

export default GlobalStyles;
