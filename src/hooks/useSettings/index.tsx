import React, { useState, createContext, useContext } from 'react';

type SettingsContextData = {
  showSettings: boolean;
  setShowSettings: (value: boolean) => void;
  autoAdvanceWords: boolean;
  setAutoAdvanceWords: (value: boolean) => void;
  autoAdvanceWordsInterval: number;
  setAutoAdvanceWordsInterval: (value: number) => void;
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
  autoAdvanceWordsInterval: 5,
  setAutoAdvanceWordsInterval: () => null,
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
  const [autoAdvanceWordsInterval, setAutoAdvanceWordsInterval] = useState<number>(5);
  const [autoPlayAudio, setAutoPlayAudio] = useState<boolean>(false);
  const [maleVoice, setMaleVoice] = useState<boolean>(false);

  return (
    <SettingsContext.Provider
      value={{
        showSettings,
        setShowSettings,
        autoAdvanceWords,
        setAutoAdvanceWords,
        autoAdvanceWordsInterval,
        setAutoAdvanceWordsInterval,
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
