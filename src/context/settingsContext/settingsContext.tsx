import React, { useState, createContext } from 'react';

type SettingsContextData = {
  autoPlayAudio: boolean;
  setAutoPlayAudio: (value: boolean) => void;
};

const SettingsContextDefaultValues = {
  autoPlayAudio: false,
  setAutoPlayAudio: () => null
};

const SettingsContext = createContext<SettingsContextData>(
  SettingsContextDefaultValues
);

export type SettingsProviderProps = {
  children: React.ReactNode;
};

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [autoPlayAudio, setAutoPlayAudio] = useState<boolean>(false);

  return (
    <SettingsContext.Provider
      value={{
        autoPlayAudio,
        setAutoPlayAudio
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
