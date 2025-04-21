import React, { useState } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import "./styles/styles.css";

function App() {
  const [tours, setTours] = useState([]);
  const [filteredTours, setFilteredTours] = useState([]);

  // Remove tour by ID
  const onRemove = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
    setFilteredTours(updatedTours);
  };

  // Handle destination change from dropdown
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
      
      {/* Dropdown for filtering */}
      <DestinationSelector tours={tours} onDestinationChange={onDestinationChange} />

      {/* Gallery receives both full and filtered tours */}
      <Gallery
        tours={filteredTours.length ? filteredTours : tours}
        setTours={setTours}
        setFilteredTours={setFilteredTours} // ✅ Added this
        onRemove={onRemove}
      />
    </main>
  );
}

export default App;
