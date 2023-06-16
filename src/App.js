import { useState } from "react";
import NavBar from "./components/NavBar";
import Timer from "./components/Timer";
import Quotes from "./components/Quotes";
import PamImg from "./components/PamImg";

function App() {
  const [timerType, setTimerType] = useState("Pomodoro");

  const handleTimerTypeChange = (newTimerType) => {
    setTimerType(newTimerType);
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
        <NavBar />
        <Timer
          timerType={timerType}
          handleTimerTypeChange={handleTimerTypeChange}
        />
        <Quotes />

        <PamImg />
      </div>
    </main>
  );
}

export default App;
