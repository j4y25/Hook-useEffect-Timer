
import React, { useEffect, useState } from 'react'
import './Timer.css'

const Timer = () => {

  const [second, setSecond] = useState(0)
  const [start, setStart] = useState(false);

  const min = Math.floor(second / 60);
  const sec = second % 60;

  useEffect(() => {
    if (start) {
      const timer = setInterval(() => {
        setSecond((state) => state + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [start]);

  const handleStart = () => {
    setStart(true);
  };

  const handleStop = () => {
    setStart(false);
  };

  const handleReset = () => {
    setStart(false);
    setSecond(0);
  };

  return (
    <>
      <div className="timer-page">
        <div className="timer-box">
          <h1>Stopwatch</h1>

          <div className="timer-display">
            {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec} 
           
          </div>

          <div className="timer-buttons">
            <button className="start-btn" onClick={handleStart}>
              Start
            </button>

            <button className="stop-btn" onClick={handleStop}>
              Stop
            </button>

            <button className="reset-btn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timer
