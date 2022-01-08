import React from 'react';
import { WiFahrenheit } from 'weather-icons-react';

const MinMax = ({temperature}) => {
  return (
    <div className='minMax-box'>
      <span>H: {temperature.max}
      <WiFahrenheit size={35}/>
      </span>
      <span>L: {temperature.min}
      <WiFahrenheit size={35}/>
      </span>
    </div>
  );
}

export default MinMax;
