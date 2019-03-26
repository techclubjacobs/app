import styled, { keyframes } from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const AppLogo = styled.img`
  animation: ${rotate360} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;
export const AppHeader = styled.div`
  background-color: green;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
export const AppLink = styled.a`
  color: #61dafb;
`;

const AppTitle = styled.h1`
  font-size: 1.3em;
`;
const AppIntro = styled.p`
  font-size: large;
`;
