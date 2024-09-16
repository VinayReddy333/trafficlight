import React, { useState, useEffect } from 'react';
import './index.css'; 

const TrafficLight = () => {
  const [light, setLight] = useState('green'); 
  const [timer, setTimer] = useState(10); 

  
  const nextLight = (current) => {
    if (current === 'green') {
      setLight('yellow');
      setTimer(3);
    } else if (current === 'yellow') {
      setLight('red');
      setTimer(7);
    } else if (current === 'red') {
      setLight('green');
      setTimer(10);
    }
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    if (timer === 0) {
      nextLight(light); 
    }

    return () => clearInterval(interval); 
  }, [timer, light]);

  return (
    <div className='container'>
       <h1>Traffic Light Simulator</h1>
    <div className="traffic-light">
      <div className={`light ${light === 'red' ? 'red' : ''}`} />
      <div className={`light ${light === 'yellow' ? 'yellow' : ''}`} />
      <div className={`light ${light === 'green' ? 'green' : ''}`} />
      <div className="timer">Next light in: {timer}s</div>
    </div>
    </div>
  );
};

export default TrafficLight;
