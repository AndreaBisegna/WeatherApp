import React from 'react';
import { WiFahrenheit } from 'weather-icons-react';
import '../App.css';

const Main = ({name, weather}) => {


  
  
  return (
    <div className='main-box'>
    <ul>
      <h1 id="location">{name}</h1>
       <li>{weather.summary.title}</li>
       
       <li className='tempBox'>
       {weather.temperature.actual}
         <WiFahrenheit size={35}/>
       </li>
      
       </ul>
      
    </div>
  );
}

export default Main;
