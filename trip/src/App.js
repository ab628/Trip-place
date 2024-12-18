import React, { useState } from 'react';
import data from './data';
import Tours from './components/Tours';



function App() {

  const[tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id ); 
    setTours(newTours);
  }

  function favTour(id) {
    const newTours = tours.filter(tour => tour.id === id ); 
    setTours(newTours);
  }

  function oldTour(){
    setTours(data);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2> Sorry No Tours Left</h2>
        <button className='refresh-btn' onClick={oldTour}>Refresh</button>
      </div>
    )
  }
    

  return(
    <div className='App'>
        <Tours tours={tours} removeTour={removeTour} favTour={favTour} ></Tours>
    </div>
  )
 
}

export default App;
