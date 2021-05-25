import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import { useSettings } from 'hooks/useSettings';
import * as s from './styles';

const SettingsBar = () => {
  const { setShowSettings } = useSettings();

  return (
    <s.SettingsBarContainer>
      <s.ShowSettingsButton
        aria-label="Show settings"
        onClick={() => setShowSettings(true)}
      >
        <SettingsIcon />
      </s.ShowSettingsButton>
    </s.SettingsBarContainer>
  );
};

export default SettingsBar;
