import styled, { css } from 'styled-components';
import { ButtonBase } from '@material-ui/core';
import { zIndex } from 'helpers/constants';

export const SettingsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${zIndex.high};
`;

export const Settings = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 12px;
  padding: 24px;
  min-width: 320px;
  max-width: 400px;
  width: 90%;
  position: relative;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const CloseButton = styled(ButtonBase)`
  padding: 8px !important;
  border-radius: 50% !important;

  svg {
    color: ${({ theme }) => theme.typography.primaryText};
  }
`;

export const SettingsHeader = styled.h2`
  margin: 0 0 24px 0;
  color: ${({ theme }) => theme.typography.primaryText};
  font-size: 24px;
  font-weight: 600;
`;

export const SettingsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const SettingLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    ${({ theme }) => css`
      color: ${theme.typography.primaryText};
    `}
    font-size: 20px;
  }

  span {
    ${({ theme }) => css`
      color: ${theme.typography.primaryText};
    `}
    font-size: 16px;
  }
`;

export const SettingDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.typography.secondaryText};
  font-size: 14px;
`;
