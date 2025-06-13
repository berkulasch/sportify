import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import pic1 from "../pictures/1.jpg";
import pic5 from "../pictures/5.jpg";
import pic6 from "../pictures/6.jpg";

// Dummy data
const mockBookings = [
  {
    id: 1,
    name: "Istanbul Basketball Arena",
    location: "Istanbul",
    date: "2025-06-12",
    time: "15:00",
    price: 30,
    image: pic5,
    sport: "basketball",
  },
  {
    id: 2,
    name: "Izmir Tennis Club",
    location: "Izmir",
    date: "2025-06-15",
    time: "19:00",
    price: 25,
    image: pic1,
    sport: "tennis",
  },
  {
    id: 3,
    name: "Ankara Football Field",
    location: "Ankara",
    date: "2025-06-20",
    time: "18:00",
    price: 22,
    image: pic6,
    sport: "football",
  },
];

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Replace with your actual bookings fetch logic
    setBookings(mockBookings);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">My Bookings</h1>
        {bookings.length === 0 ? (
          <div className="text-gray-500 text-center">No bookings yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="
                  bg-white rounded-xl shadow p-4 flex flex-col items-center
                  transform transition hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer
                "
              >
                <img
                  src={booking.image}
                  alt={booking.name}
                  className="h-40 w-full object-cover rounded-lg mb-4"
                />
                <div className="w-full">
                  <div className="text-xl font-bold mb-1">{booking.name}</div>
                  <div className="text-gray-600 mb-1">{booking.location}</div>
                  <div className="flex items-center gap-2 text-gray-700 mb-1">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                      {booking.sport.charAt(0).toUpperCase() + booking.sport.slice(1)}
                    </span>
                    <span className="ml-auto text-blue-700 font-bold">
                      {booking.price}₺ / hour
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {booking.date} at {booking.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
