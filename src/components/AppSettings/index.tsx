import React from 'react';
import { Backdrop } from '@material-ui/core';
import { useSettings } from 'hooks/useSettings';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
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
    setAutoAdvanceWordsInterval,
    autoPlayAudio,
    setAutoPlayAudio,
    maleVoice,
    setMaleVoice
  } = useSettings();

  const hideSettings = () => {
    setShowSettings(false);
  };

  // @ts-ignore event not needed
  const handleSlideChange = (event: React.ChangeEvent<{}>, value: number | number[]) => {
    setAutoAdvanceWordsInterval(value as number)
  }

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
              <Slider 
                disabled={!autoAdvanceWords} 
                defaultValue={5}
                onChange={handleSlideChange}
                marks
                min={1}
                max={15}
                valueLabelDisplay="auto"
                aria-label="Auto Advance Interval in seconds" step={1}
              />
            </div>
            <div>
              <Switch
                checked={maleVoice}
                onChange={e => setMaleVoice(e.target.checked)}
                name="switch-male-voice"
                inputProps={{ 'aria-label': 'Male voice' }}
                className="setting-switch"
              />
              <span>Male voice</span>
            </div>
          </s.Settings>
        </s.SettingsContainer>
      )}
    </>
  );
};

export default AppSettings;
