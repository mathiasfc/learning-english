import styled from 'styled-components';
import { zIndex } from 'helpers/constants';
import { ButtonBase } from '@material-ui/core';

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  z-index: ${zIndex.high};
  color: #2b2b2b;

  .setting-switch {
    color: blue !important;
    fill: blue !important;
  }
`;

export const Settings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
  width: 250px;
  background-color: #e9e9e9;
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
    color: #4a4a4a;
  }
`;
