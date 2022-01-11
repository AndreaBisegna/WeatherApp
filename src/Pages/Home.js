import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_WEATHER_QUERY } from "../graphql/Queries";
import MinMax from './MinMax';
import Error from './Error';
import Loading from './Loading';
import Main from './Main.js';
import '../App.css';
import ToggleComp from './ToggleComp';
import ForSeven from './ForSeven';


const Home = () => {

  const { loading, error, data } = useQuery(GET_WEATHER_QUERY);
  const [show, setShow] = useState(false);

  const [back, setBack] = useState("");


  /*function to assign style depending on the weather Summary Title*/
  /*const style = (title) => {
    if (title === "Clouds") {
      setBack("../image/clouds.jpeg")
    }
    else if (title === "Sunny") {

      setBack("../image/sunny.jpeg")
    }
    else if (title === "Raining") {
      setBack("../image/raining.jpeg")
    }
    else if (title === "Snowing") {
      setBack("../image/snowing.jpeg")
    }
  };*/
  if (loading) return <Loading />;


  if (error) return <Error />;

  if (data) {

    console.log(data.getCityByName);

    //style(data.getCityByName.weather.summary.title);
    
  };



return (
    <div className='global-box'>
      
      <div className='home-container' styles={{ backgroundImage: `url(${back})` }}>

        <Main name={data.getCityByName.name} weather={data.getCityByName.weather} />
        <div>
          <MinMax temperature={data.getCityByName.weather.temperature} />
        </div>
      </div>
      <div className='box-btn_toggle'>
        <button onClick={() => setShow(!show)}>Show more</button>
        {
          show ? <ToggleComp weather={data.getCityByName.weather} /> : null
        }
      </div>
      <div>
        <ForSeven />
      </div>
      
    
    </div>
  );
}

export default Home;
