import styled, { css } from 'styled-components';
import { zIndex } from 'helpers/constants';
import { ButtonBase } from '@material-ui/core';

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.typograph.primaryText};
  `}

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: ${zIndex.high};

  .MuiSwitch-root {
    ${({ theme }) => css`
      .MuiIconButton-label {
        color: ${theme.primaryColor};
      }

      .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track {
        background-color: ${theme.primaryColor} !important;
      }
    `}
  }
`;

export const Settings = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.backgroundColor};
  `}

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
  width: 250px;
  border-radius: 3px;
  padding: 20px;
  position: relative;

  h2 {
    margin-top: 0px;
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 10px;
  margin-top: -10px;
`;

export const CloseButton = styled(ButtonBase)`
  border-radius: 50% !important;

  svg {
    ${({ theme }) => css`
      color: ${theme.typograph.primaryText};
    `}
  }
`;
