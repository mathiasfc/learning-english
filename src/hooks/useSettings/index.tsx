import React, { useState, createContext, useContext } from 'react';

type SettingsContextData = {
  showSettings: boolean;
  setShowSettings: (value: boolean) => void;
  autoAdvanceWords: boolean;
  setAutoAdvanceWords: (value: boolean) => void;
  autoPlayAudio: boolean;
  setAutoPlayAudio: (value: boolean) => void;
  maleVoice: boolean;
  setMaleVoice: (value: boolean) => void;
};

const SettingsContextDefaultValues = {
  showSettings: false,
  setShowSettings: () => null,
  autoAdvanceWords: false,
  setAutoAdvanceWords: () => null,
  autoPlayAudio: false,
  setAutoPlayAudio: () => null,
  maleVoice: false,
  setMaleVoice: () => null
};

const SettingsContext = createContext<SettingsContextData>(
  SettingsContextDefaultValues
);

export type SettingsProviderProps = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [autoAdvanceWords, setAutoAdvanceWords] = useState<boolean>(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState<boolean>(false);
  const [maleVoice, setMaleVoice] = useState<boolean>(false);

  return (
    <SettingsContext.Provider
      value={{
        showSettings,
        setShowSettings,
        autoAdvanceWords,
        setAutoAdvanceWords,
        autoPlayAudio,
        setAutoPlayAudio,
        maleVoice,
        setMaleVoice
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => useContext(SettingsContext);

export { useSettings };
