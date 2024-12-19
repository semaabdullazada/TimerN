import React, { useState, useEffect } from 'react';

function Timer() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning && (hour > 0 || minute > 0 || second > 0)) {
      interval = setInterval(() => {
        if (second > 0) {
          setSecond((prev) => prev - 1); 
                } else if (minute > 0) {
          setMinute((prev) => prev - 1); 
          setSecond(59); 
        } else if (hour > 0) {
          setHour((prev) => prev - 1);  
          setMinute(59);  
          setSecond(59); 
        }
      }, 1000);
    } else if (hour === 0 && minute === 0 && second === 0 && isRunning) {
      alert('Taymer bitdi!');
      setIsRunning(false);
    }

    return () => clearInterval(interval); 

  }, [isRunning, hour, minute, second]); 

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);  
  };

  const handleClear = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    setIsRunning(false); 
  };

  return (
    <div>
      <button>Taymer</button>
      <div>
        <input
          type="number"
          value={hour}
          onChange={(e) => setHour(Number(e.target.value) || 0)}
          placeholder="Saat"
        />
        <input
          type="number"
          value={minute}
          onChange={(e) => setMinute(Number(e.target.value) || 0)}
          placeholder="Dəqiqə"
        />
        <input
          type="number"
          value={second}
          onChange={(e) => setSecond(Number(e.target.value) || 0)}
          placeholder="Saniyə"
        />
      </div>
      <button onClick={handleStartPause}>
        {isRunning ? 'Pauza' : 'Başla'}
      </button>
      <button onClick={handleClear}>Təmizlə</button>
    </div>
  );
}

export default Timer;
