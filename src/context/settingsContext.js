import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [timerSettings, setTimerSettings] = useState({
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  });

  const updateTimerSettings = (updatedSettings) => {
    setTimerSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ timerSettings, updateTimerSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
