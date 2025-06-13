import React, { useState } from "react";
import Navbar from "../components/Navbar";
import VenueCard from "../components/VenueCard";
import BookingModal from "../components/BookingModal";
import FilterBar from "../components/FilterBar";
import MapView from "../components/MapView";

import pic1 from "../pictures/1.jpg";
import pic5 from "../pictures/5.jpg";
import pic6 from "../pictures/6.jpg";

const mockVenues = [
    {
      id: 1,
      name: "Istanbul Basketball Arena",
      location: "Istanbul",
      sport: "basketball",
      price: 30,
      image: pic5,
      lat: 41.0082,
      lng: 28.9784,
      rating: 4.8,
      added: "2025-06-01",
    },
    {
      id: 2,
      name: "Izmir Tennis Club",
      location: "Izmir",
      sport: "tennis",
      price: 25,
      image: pic1,
      lat: 38.4192,
      lng: 27.1287,
      rating: 4.6,
      added: "2025-06-11",
    },
    {
      id: 3,
      name: "Ankara Football Field",
      location: "Ankara",
      sport: "football",
      price: 22,
      image: pic6,
      lat: 39.9208,
      lng: 32.8541,
      rating: 4.4,
      added: "2025-06-10",
    },
  
  ];
  

function Home() {
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [sport, setSport] = useState("");
  const [city, setCity] = useState("");

  const filteredVenues = mockVenues.filter((venue) => {
    return (
      (sport === "" || venue.sport === sport) &&
      (city === "" || venue.location === city)
    );
  });

  return (
    <div>
      <Navbar />
      <div className="relative w-full h-72 md:h-96 overflow-hidden mb-4 shadow-lg">
  <img
    src={pic1}
    alt="Sportify hero"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
    <h2 className="text-white text-4xl font-bold mb-2">Book Your Next Game!</h2>
    <p className="text-white text-lg">Basketball, Tennis, Football</p>
  </div>

</div>

      <main className="p-6 max-w-7xl mx-auto">
      
        <FilterBar
          sport={sport}
          setSport={setSport}
          city={city}
          setCity={setCity}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVenues.map((venue) => (
            <VenueCard
              key={venue.id}
              venue={venue}
              onBook={() => setSelectedVenue(venue)}
            />
          ))}
        </div>
        {selectedVenue && (
          <BookingModal
            venue={selectedVenue}
            onClose={() => setSelectedVenue(null)}
          />
        )}
      </main>
      <MapView venues={filteredVenues} />
    </div>
  );
}

export default Home;
