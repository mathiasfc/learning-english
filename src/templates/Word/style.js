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

export const NextButton = styled.button`
  background-color: transparent;
  border: none;
  height: 40px;
  width: 100px;
  border: 1px solid black;
  margin-top: 30px;
  cursor: pointer;
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
  top: 75%;
  left: 80%;
  transform: translateX(-50%) translateY(-50%);
  box-sizing: content-box;
  width: 22px;
  height: 34px;
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
    width: 35px;
    height: 35px;
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
    width: 40px;
    height: 40px;
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
    border-left: 20px solid #fff;
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
  }
`;
