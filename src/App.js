import { useState } from "react";
import NavBar from "./components/NavBar";
import Timer from "./components/Timer";

function App() {
  const [timerType, setTimerType] = useState("Pomodoro");
  const [timerSettings, setTimerSettings] = useState({
    pomodoro: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60,
  });
 
  const handleTimerTypeChange = (newTimerType) => {
    setTimerType(newTimerType);
  };
  
  const handleSettingsSave = (newSettings) => {
    setTimerSettings(newSettings);
  };


  let appBackgroundColor = "";
  switch (timerType) {
    case "Pomodoro":
      appBackgroundColor = "bg-pomodoro";
      break;
    case "Short Break":
      appBackgroundColor = "bg-shortbreak";
      break;
    case "Long Break":
      appBackgroundColor = "bg-longbreak";
      break;
    default:
      appBackgroundColor = "bg-pomodoro";
      break;
  }

  

  return (
    <main
      className={`flex h-screen justify-center ${appBackgroundColor} text-white`}
    >
      <div className="h-full w-full md:max-w-4xl flex-col space-y-10">
        <NavBar timerSettings={timerSettings} onSave={handleSettingsSave} />
        <Timer
          timerType={timerType}
          handleTimerTypeChange={handleTimerTypeChange}
        />
      </div>
    </main>
  );
}

export default App;
