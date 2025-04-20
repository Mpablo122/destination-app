import React, { useState } from "react"; 
import Gallery from "./components/Gallery"; 
import DestinationSelector from "./components/DestinationSelector"; 
import "./styles/styles.css";


function App() {
  const [tours, setTours] = useState([]); 
  const [filteredTours, setFilteredTours] = useState([]);

  
  const onRemove = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours); 
    setFilteredTours(updatedTours); 
  };

  //Function to handle destination filtering
  const onDestinationChange = (destination) => {
    if (destination === "All Destinations") { 
      setFilteredTours(tours); 
    } else {
      setFilteredTours(tours.filter((tour) => tour.name === destination)); 
    }
  };

  return (
    <main>
      <h1>Tour List</h1>
      {/* This is for  the DestinationSelector */}
      <DestinationSelector tours={tours} onDestinationChange={onDestinationChange} />
      {/* this is to pass filtered tours to the Gallery */}
      <Gallery tours={filteredTours.length ? filteredTours : tours} setTours={setTours} onRemove={onRemove} />
    </main>
  );
}

export default App;