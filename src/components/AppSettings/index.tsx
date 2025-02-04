import React from 'react';
import { Backdrop } from '@material-ui/core';
import { useSettings } from 'hooks/useSettings';
import Switch from '@material-ui/core/Switch';
import CloseIcon from '@material-ui/icons/Close';
import DarkModeIcon from '@material-ui/icons/Brightness4';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import SkipNextIcon from '@material-ui/icons/SkipNext';
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

            <s.SettingsHeader>Settings</s.SettingsHeader>

            <s.SettingsSection>
              <s.SettingRow>
                <s.SettingLabel>
                  <DarkModeIcon />
                  <span>Dark mode</span>
                </s.SettingLabel>
                <Switch
                  checked={darkMode}
                  onChange={e => setDarkMode(e.target.checked)}
                  name="switch-dark-mode"
                  inputProps={{ 'aria-label': 'Toggle dark mode' }}
                />
              </s.SettingRow>

              <s.SettingRow>
                <s.SettingLabel>
                  <VolumeUpIcon />
                  <span>Auto play audio</span>
                </s.SettingLabel>
                <Switch
                  checked={autoPlayAudio}
                  onChange={e => setAutoPlayAudio(e.target.checked)}
                  name="switch-auto-play-audio"
                  inputProps={{ 'aria-label': 'Auto play audios' }}
                />
              </s.SettingRow>

              <s.SettingRow>
                <s.SettingLabel>
                  <RecordVoiceOverIcon />
                  <span>Male voice</span>
                </s.SettingLabel>
                <Switch
                  checked={maleVoice}
                  onChange={e => setMaleVoice(e.target.checked)}
                  name="switch-male-voice"
                  inputProps={{ 'aria-label': 'Male voice' }}
                />
              </s.SettingRow>

              <s.SettingRow>
                <s.SettingLabel>
                  <SkipNextIcon />
                  <span>Auto advance</span>
                </s.SettingLabel>
                <Switch
                  checked={autoAdvanceWords}
                  onChange={e => setAutoAdvanceWords(e.target.checked)}
                  name="switch-auto-advances"
                  inputProps={{ 'aria-label': 'Auto advances words' }}
                />
              </s.SettingRow>
            </s.SettingsSection>
          </s.Settings>
        </s.SettingsContainer>
      )}
    </>
  );
};

export default AppSettings;
