import React, { createContext } from "react";

export const SettingContext = createContext();

function SettingsContextProvider(props) {

    
  return (
    <SettingContext.Provider value={{}}>
      {props.children}
    </SettingContext.Provider>
  );
}

export default SettingsContextProvider;
