import React from 'react';
import styled, { keyframes } from 'styled-components';

// Spinning keyframe
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

// Fullscreen wrapper
const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1002;
`;

// Logo with spin
const Logo = styled.img`
  width: 65px;
  height: 65px;
  animation: ${spin} 1s linear infinite;
`;

function Loading() {
    return (
        <Wrapper>
            <Logo src="/coachroach.png" alt="Loading..." />
        </Wrapper>
    );
}

export default Loading;
