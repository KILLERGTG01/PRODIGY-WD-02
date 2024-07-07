import React, { useState, useRef } from 'react';

const Stopwatch: React.FC = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerInterval = useRef<NodeJS.Timeout | null>(null);
  const startTime = useRef(0);

  const startTimer = () => {
    startTime.current = Date.now() - elapsedTime;
    setRunning(true);
    timerInterval.current = setInterval(() => {
      setElapsedTime(Date.now() - startTime.current);
    }, 10);
  };

  const stopTimer = () => {
    if (timerInterval.current) clearInterval(timerInterval.current);
    setRunning(false);
  };

  const resetTimer = () => {
    if (timerInterval.current) clearInterval(timerInterval.current);
    setElapsedTime(0);
    setRunning(false);
  };

  const formatTimer = (elapsedTime: number) => {
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    return (
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
      ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
      "." +
      (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-amber-300 to-[#0fc1ca] text-white">
      <div className="text-7xl font-bold shadow-lg mb-10">
        {formatTimer(elapsedTime)}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={startTimer}
          disabled={running}
          className="bg-yellow-300 text-teal-700 px-8 py-4 rounded-lg shadow-lg transition duration-200 hover:bg-gray-800 disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          disabled={!running}
          className="bg-yellow-300 text-teal-700 px-8 py-4 rounded-lg shadow-lg transition duration-200 hover:bg-gray-800 disabled:opacity-50"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-yellow-300 text-teal-700 px-8 py-4 rounded-lg shadow-lg transition duration-200 hover:bg-gray-800"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
