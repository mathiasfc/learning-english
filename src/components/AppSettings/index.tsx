import React from 'react';
import { Backdrop } from '@material-ui/core';
import { useSettings } from 'hooks/useSettings';
import Switch from '@material-ui/core/Switch';
import CloseIcon from '@material-ui/icons/Close';
import * as s from './styles';

type AppSettingsProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

const AppSettings = ({ darkMode, setDarkMode }: AppSettingsProps) => {
  const {
    showSettings,
    setShowSettings,
    autoAdvanceWords,
    setAutoAdvanceWords,
    autoPlayAudio,
    setAutoPlayAudio,
    maleVoice,
    setMaleVoice
  } = useSettings();

  const hideSettings = () => {
    setShowSettings(false);
  };

  return (
    <>
      {showSettings && (
        <s.SettingsContainer>
          <Backdrop open onClick={hideSettings} />
          <s.Settings>
            <s.CloseButtonContainer>
              <s.CloseButton onClick={hideSettings}>
                <CloseIcon />
              </s.CloseButton>
            </s.CloseButtonContainer>
            <h2>Settings</h2>
            <div>
              <Switch
                checked={darkMode}
                onChange={e => setDarkMode(e.target.checked)}
                name="switch-dark-mode"
                inputProps={{ 'aria-label': 'Toggle dark mode' }}
              />
              <span>Dark mode</span>
            </div>

            <div>
              <Switch
                checked={autoPlayAudio}
                onChange={e => setAutoPlayAudio(e.target.checked)}
                name="switch-auto-play-audio"
                inputProps={{ 'aria-label': 'Auto play audios' }}
                className="setting-switch"
              />
              <span>Auto play audio</span>
            </div>

            <div>
              <Switch
                checked={autoAdvanceWords}
                onChange={e => setAutoAdvanceWords(e.target.checked)}
                name="switch-auto-advances"
                inputProps={{ 'aria-label': 'Auto advances words' }}
                className="setting-switch"
              />
              <span>Auto advances</span>
            </div>
            <div>
              <Switch
                checked={maleVoice}
                onChange={e => setMaleVoice(e.target.checked)}
                name="switch-male-voice"
                inputProps={{ 'aria-label': 'Male voice' }}
                className="setting-switch"
              />
              <span>Female voice</span>
            </div>
          </s.Settings>
        </s.SettingsContainer>
      )}
    </>
  );
};

export default AppSettings;
