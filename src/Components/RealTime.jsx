import React, { useState, useEffect } from 'react';
import "./Real.css"
const RealTime = () => {
  const [time, setTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const newHours = hours < 10 ? "0" + hours : hours;
    const newMinutes = minutes < 10 ? "0" + minutes : minutes;
    const newSeconds = seconds < 10 ? "0" + seconds : seconds;

    return `${newHours}:${newMinutes}:${newSeconds}`;
  };
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };  

  return (
    <>
    <div style={{padding:"20px"}}>
    <button onClick={toggleVisibility}>
      {isVisible ? 'Gizlet' : 'Saat'}
    </button>
    {isVisible && <h1> {formatTime(time)}</h1>}
  </div>
    </>
  );
};

export default RealTime;