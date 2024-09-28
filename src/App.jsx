import { useState } from 'react'
import {useEffect} from 'react'

import ShipDisplay from "./components/ShipDisplay";

import './App.css'

export default function App(){

  const [ship, setShip] = useState([]);

    const getShip = async () => {
    try {
      const response = await fetch(
        // Make fetch request and store the response
        `https://swapi.dev/api/starships`
       
      );
      // Parse JSON response into a JavaScript object
  
      const data = await response.json();
  

      setShip(data.results);
      console.log(data);

    } catch (error) {
      console.error(error);
    }
  };
  
  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getShip();
  }, []);
  // We pass the getMovie function as a prop called moviesearch

  return (
    <>

        <h3>STAR WARS STARSHIPS</h3>
        {ship.map(function(ship){

return(<div > 
  {/* <p key={ship.id}> {ship.name} </p> */}
  <ShipDisplay key={ship.id} name={ship.name} />
  </div>)
        })}

    </>
  )
}


