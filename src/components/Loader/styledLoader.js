import styled, { keyframes } from "styled-components";

const Spin = keyframes`
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  background: transparent;
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const LoaderRing = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #4049b5;
    border-color: #4049b5 transparent #4049b5 transparent;
    animation: ${Spin} 1.2s linear infinite;
  }
`;
