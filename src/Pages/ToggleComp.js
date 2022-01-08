import React, { useState } from 'react';
import { WiCloudyWindy, WiHumidity, WiBarometer, WiSunrise } from "weather-icons-react";
import Humidity from './Humidity';
import WindSpeed from './WindSpeed';
import Pressure from './Pressure';
import SunrSuns from './SunrSuns';

const ToggleComp = ({ weather }) => {

  const iconStyle = { fontSize: "30px" }

  return (
    <div>
      <div className='toggleComp-box'>
        <div className='toggleItem'>
          <div className='icon-box'>
            <p >Wind
            </p>
            <WiCloudyWindy style={iconStyle} />
          </div>
          <span>
            <WindSpeed weather={weather.wind.speed} />
          </span>
        </div>
        <div className='toggleItem'>
          <div className='icon-box'>
            <p>Humidity</p>
            <WiHumidity style={iconStyle} />
          </div>
          <Humidity weather={weather.clouds.humidity} />
        </div>
        <div className="toggleItem">
          <div className='icon-box'>
            <p>
              Pressure
            </p>
            <WiBarometer style={iconStyle} />
          </div>
          <Pressure />
        </div>
        <div className='toggleItem'>
          <div className='icon-box'>
            <p>
              Sun
            </p>
            <WiSunrise style={iconStyle} />

          </div>
          <SunrSuns />

        </div>






      </div>
    </div>
  );
}

export default ToggleComp;
