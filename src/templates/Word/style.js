import styled, { css, keyframes } from 'styled-components';
import ButtonBase from '@material-ui/core/ButtonBase';

export const WordPageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
`;

export const WordContainer = styled.div`
  margin-top: 30px;
  word-wrap: break-word;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Word = styled.span`
  font-size: 30px;
  margin-right: 15px;
  white-space: nowrap;
  font-weight: bold;
`;

export const Translation = styled.span`
  font-size: 20px;
  opacity: 0.6;
  white-space: nowrap;
`;

export const PhraseContainer = styled.div`
  position: relative;
  padding: 15px;
  margin-top: 50px;
  text-align: center;
  background: #fff;
  border-radius: 6px;
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 40px -30px rgb(0 0 0 / 75%);

  span {
    font-size: 24px;
    line-height: 35px;

    :first-letter {
      text-transform: uppercase;
    }

    .current-word {
      font-style: italic;
    }
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

const spin = keyframes`
  100% { -webkit-transform: rotate(360deg); transform:rotate(360deg)};
`;

export const PlayAudioButton = styled(ButtonBase)`
  position: absolute !important;
  background-color: #4d96d5 !important;
  border-radius: 50% !important;
  padding: 5px !important;
  bottom: -15px;
  right: 15px;

  svg {
    font-size: 20px;
    fill: #fff;
  }
`;

export const CommandsBar = styled.div`
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NextButton = styled(ButtonBase)`
  background-color: #ff6363 !important;
  border-radius: 50% !important;
  padding: 15px !important;

  svg {
    z-index: 10;
    font-size: 30px;
    fill: #fff;
    ${({ animateIcon }) =>
      animateIcon &&
      css`
        animation: ${spin} 0.5s linear;
      `}
  }

  :before {
    content: '';
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 45px;
    height: 45px;
    background: #ff6363;
    border-radius: 50%;
    animation: ${pulseBorder} 1500ms ease-out infinite;
  }
`;
