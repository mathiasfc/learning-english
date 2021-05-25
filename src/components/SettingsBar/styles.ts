import styled from 'styled-components';
import { ButtonBase } from '@material-ui/core';

export const SettingsBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 40px;
  top: 0px;
  position: absolute;
`;

export const ShowSettingsButton = styled(ButtonBase)`
  width: 40px;
  border-radius: 50% !important;

  svg {
    color: #4a4a4a;
  }
`;
