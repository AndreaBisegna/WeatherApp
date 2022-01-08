import React from 'react';
import { WiFahrenheit } from 'weather-icons-react';
import '../App.css';

const Main = ({name, weather}) => {

  const converter = (temp) => {
    return (5/9) * ( temp -32 );
  }

  const tempCelsius = converter(weather.temperature.actual);
  
  
  return (
    <div className='main-box'>
    <ul>
      <h1 id="location">{name}</h1>
       <li>{weather.summary.title}</li>
       
       <li className='tempBox'>
       {tempCelsius}
         <WiFahrenheit size={35}/>
       </li>
      
       </ul>
      
    </div>
  );
}

export default Main;
