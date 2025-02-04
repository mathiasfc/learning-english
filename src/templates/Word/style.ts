import styled, { css } from 'styled-components';
import ButtonBase from '@material-ui/core/ButtonBase';
import { zIndex } from 'helpers/constants';

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
  margin-top: 50px;
`;

export const ImageWrapper = styled.div`
  height: 200px;
  width: 300px;
  position: relative;
  box-shadow: 0px 1px 15px -5px rgba(0, 0, 0, 1);

  img {
    border-radius: 4px;
  }
`;

export const NextWordImageWrapper = styled.div`
  display: none;
  position: relative;
`;

export const WordContainer = styled.div`
  margin: 30px 0px;
  word-wrap: break-word;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
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
  ${({ theme }) => css`
    background: ${theme.phraseContainerColor};
  `}

  position: relative;
  padding: 15px;
  text-align: center;
  border-radius: 6px;
  width: 100%;
  max-width: 700px;
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

export const PlayAudioButton = styled(ButtonBase)`
  ${({ theme }) => css`
    background-color: ${theme.buttons.playAudioButton} !important;
  `}

  position: absolute !important;

  border-radius: 50% !important;
  padding: 5px !important;
  bottom: -15px;
  right: 15px;

  svg {
    font-size: 20px;
    ${({ theme }) => css`
      fill: ${theme.buttons.playAudioButtonIcon};
    `}
  }
`;

export const CommandsBar = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type NextButtonProps = {
  readonly $animateIcon?: Boolean;
};

export const NextButton = styled(ButtonBase)<NextButtonProps>`
  ${({ theme }) => css`
    background-color: ${theme.buttons.mainButtonColor} !important;
  `}

  border-radius: 50% !important;
  padding: 15px !important;

  svg {
    z-index: ${zIndex.high};
    font-size: 30px;
    fill: #fff;
    ${({ $animateIcon }) =>
      $animateIcon &&
      css`
        animation: spin 0.5s linear;
      `}
  }

  :before {
    ${({ theme }) => css`
      background: ${theme.buttons.mainButtonColor};
    `}

    content: '';
    position: absolute;
    z-index: 0;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    display: block;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    animation: pulseBorder 2000ms ease-out infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes pulseBorder {
    0% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
      opacity: 0;
    }
  }
`;

export const MeaningContainer = styled.div`
  margin-left: 15px;
  cursor: pointer;

  span {
    color: #196fff;
    font-weight: bold;
    text-decoration: underline;
  }
`;
