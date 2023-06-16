import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(25 * 60); // initial time in seconds (25 minutes)
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      startTimer();
    } else {
      stopTimer();
    }
    return stopTimer; // Cleanup function to clear the interval on unmount
  }, [isRunning]);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000); // update timer every second (1000 milliseconds)
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(25 * 60); // Reset the timer to the initial time
  };

  useEffect(() => {
    if (time === 0) {
      stopTimer();
      // Call a function or perform any action when the timer reaches 0
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="w-full h-2/5 p-6">
      <div className="bg-slate-50/10 rounded-md h-full w-full flex-col justify-center items-center space-y-10 text-center">
        <div className="text-white w-full flex justify-center p-3 gap-2 cursor-pointer">
          <p className="bg-slate-950/10 font-medium text-2xl p-2 flex items-center rounded-md">
            Pomodoro
          </p>
          <p className="p-2 flex items-center text-2xl rounded-md">
            Short Break
          </p>
          <p className="p-2 flex items-center text-2xl rounded-md">
            Long Break
          </p>
        </div>
        <div className="text-9xl font-bold tracking-wider p-2">
          <span>{minutes.toString().padStart(2, "0")}</span>:
          <span>{seconds.toString().padStart(2, "0")}</span>
        </div>

        <div></div>
        <div>
          {isRunning ? (
            <div className="flex justify-center gap-2">
              <button
                className="text-4xl font-semibold text-pomodoro bg-white w-72 h-20 rounded-md shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                onClick={pauseTimer}
              >
                Pause
              </button>
              <button
                className="text-4xl font-semibold text-pomodoro bg-white w-72 h-20 rounded-md shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
                onClick={handleStop}
              >
                Stop
              </button>
            </div>
          ) : (
            <button
              className="text-4xl font-semibold text-pomodoro bg-white w-72 h-20 rounded-md shadow-md cursor-pointer hover:-translate-y-1 transition duration-300"
              onClick={handleStart}
            >
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Timer;
