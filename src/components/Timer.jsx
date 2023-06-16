import React from "react";

function Timer() {
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
        <div className="text-9xl font-bold tracking-wider p-2">25:00</div>

        <div></div>
        <button className="text-4xl font-semibold text-pomodoro bg-white w-72 h-20 rounded-md shadow-md cursor-pointer hover:-translate-y-1 transition duration-300">
          START
        </button>
      </div>
    </div>
  );
}

export default Timer;
