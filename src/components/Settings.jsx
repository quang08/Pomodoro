import React from "react";

function Settings({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-slate-50 w-full md:max-w-xl h-1/4 flex justify-center items-center text-black rounded-md p-4">
        <form className="space-y-10">
          <div className="text-4xl">Time (minutes)</div>
          <div className="flex w-full font-medium text-sm text-gray-400 gap-2">
            <div className="flex-col">
              <label htmlFor="pomodoro">Pomodoro</label>
              <input
                type="number"
                id="pomodoro"
                name="pomodoro"
                min={0}
                className="bg-gray-300 p-2 text-black rounded-md h-10 w-full"
              />
            </div>

            <div className="flex-col">
              <label htmlFor="short">Short Break</label>
              <input
                type="number"
                id="short"
                name="short"
                min={0}
                className="bg-gray-300 p-2 text-black rounded-md h-10 w-full"
              />
            </div>

            <div className="flex-col">
              <label htmlFor="long">Long Break</label>
              <input
                type="number"
                id="long"
                name="long"
                min={0}
                className="bg-gray-300 p-2 text-black rounded-md h-10 w-full"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="mt-4">
              <button
                type="submit"
                className="bg-slate-950 text-white px-4 py-2 rounded-md transition duration-300 hover:-translate-y-1"
                // Add necessary event handlers to handle form submission
              >
                Save
              </button>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-slate-950 text-white px-4 py-2 rounded-md transition duration-300 hover:-translate-y-1"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
