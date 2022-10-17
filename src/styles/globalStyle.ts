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
