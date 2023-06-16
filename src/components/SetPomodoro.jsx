import React, { useState } from "react";

function SetPomodoro() {
  const [newTimer, setNewTimer] = useState({
    pomodoro: 0.3,
    short: 0.2,
    long: 1,
    active: "pomodoro",
  });

  const handleChange = (input) => {
    const { name, value } = input.target;

    switch (name) {
      case "pomodoro":
        setNewTimer({
          ...newTimer,
          pomodoro: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-black">
      <form noValidate>
        <div>
          <input
            name="pomodoro"
            onChange={handleChange}
            value={newTimer.pomodoro}
          />
          <input
            name="shortBreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            name="longBreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>

        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default SetPomodoro;
