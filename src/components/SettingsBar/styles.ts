import styled, { css } from 'styled-components';
import { ButtonBase } from '@material-ui/core';

export const SettingsBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: auto;
  top: 0px;
  position: absolute;
`;

export const ShowSettingsButton = styled(ButtonBase)`
  svg {
    ${({ theme }) => css`
      color: ${theme.typograph.primaryText};
    `}
  }

  width: auto;
  border-radius: 50% !important;
  margin-top: 30px !important;
  margin-right: 30px !important;
`;
