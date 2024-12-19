import React from 'react'
import { useState } from 'react'
const StopWatch = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const [time,setTime] =useState(0);
// const [seconds,setSeconds] = useState();
const visible =() =>{
setIsVisible(!isVisible);
}
// const start =() =>{
  
// }
  return (
    <div>
      <button onClick={visible}>Saniyə ölçən</button>
      {isVisible && <p> as</p>}
      <input type="number"/>
      {isVisible && <p> as</p>}
    </div>
  )
}

export default StopWatch
