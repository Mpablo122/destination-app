import React, { useState } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import "./styles/styles.css";

function App() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);

  // Remove tours by their ids
  const onRemove = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
    setFilteredTours(updatedTours);
  };

  // this is for the destination drop down change 
  const onDestinationChange = (destination) => {
    if (destination === "All Destinations") {
      setFilteredTours(tours);
    } else {
      const filtered = tours.filter((tour) => tour.name === destination);
      setFilteredTours(filtered);
    }
  };

  return (
    <main>
      <h1>Tour List</h1>
      
      {/* This dropdown is needed for filtering */}
      <DestinationSelector tours={tours} onDestinationChange={onDestinationChange} />

      {/* Gallery has all of the tours filtered */}
      <Gallery
        tours={filteredTours.length ? filteredTours : tours}
        setTours={setTours}
        setFilteredTours={setFilteredTours} // simply so that the tours are filtered
        onRemove={onRemove}
      />
    </main>
  );
}

export default App;
