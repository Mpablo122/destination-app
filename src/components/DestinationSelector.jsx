import React, { useState } from 'react';

const DestinationSelector = ({ tours, onDestinationChange }) => {
    // Create a list of unique destinations from the tours array
    const uniqueDestinations = ['All Destinations', ...new Set(tours.map(tour => tour.name))];
    
    // Initialize state to manage the selected destination
    const [selectedDestination, setSelectedDestination] = useState('All Destinations');

    // This function is called when the user selects a destination from the dropdown
    const handleChange = (event) => {
        const destination = event.target.value;
        setSelectedDestination(destination);
        onDestinationChange(destination);
    };

    return (
        <div>
            <label htmlFor="destination-select">Choose your destination:</label>
            <select
                id="destination-select"
                value={selectedDestination}
                onChange={handleChange}
            >
                {uniqueDestinations.map(destination => (
                    <option key={destination} value={destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DestinationSelector;
