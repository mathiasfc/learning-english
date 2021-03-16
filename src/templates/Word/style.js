import styled, { keyframes } from 'styled-components';

export const WordPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ImageWrapper = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
`;

export const WordContainer = styled.div`
  margin-top: 50px;
`;

export const Word = styled.span`
  font-size: 50px;
  margin-right: 15px;
`;

export const Translation = styled.span`
  font-size: 20px;
  opacity: 0.6;
`;

export const Phrase = styled.div`
  margin-top: 50px;
  text-align: center;

  span {
    font-size: 30px;
    line-height: 35px;
  }
`;

const pulseBorder = keyframes`
  0% {
   transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
   opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

export const PlayButton = styled.button`
  position: absolute;
  z-index: 10;
  top: 85%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  width: 32px;
  height: 44px;
  background: none;
  border: none;
  border-radius: 50%;
  padding: 18px 20px 18px 28px;
  cursor: pointer;
  outline: none;

  :before {
    content: '';
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 70px;
    height: 70px;
    background: #ba1f24;
    border-radius: 50%;
    animation: ${pulseBorder} 1500ms ease-out infinite;
  }

  :after {
    content: '';
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 80px;
    height: 80px;
    background: #fa183d;
    border-radius: 50%;
    transition: all 200ms;
  }

  span {
    display: block;
    position: relative;
    z-index: 3;
    width: 0;
    height: 0;
    border-left: 32px solid #fff;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
  }
`;
