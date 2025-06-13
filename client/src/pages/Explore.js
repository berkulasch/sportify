import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import pic1 from "../pictures/1.jpg";
import pic2 from "../pictures/2.jpg";
import pic3 from "../pictures/3.jpg";
import pic4 from "../pictures/4.jpg";
import pic5 from "../pictures/5.jpg";
import pic6 from "../pictures/6.jpg";

// Dummy data
const mockVenues = [
  {
    id: 1,
    name: "Istanbul Basketball Arena",
    location: "Istanbul",
    sport: "basketball",
    price: 30,
    image: pic5,
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
    rating: 4.6,
    added: "2025-06-11",
  },
  {
    id: 3,
    name: "Ankara Football Field",
    location: "Ankara",
    sport: "football",
    price: 22,
    image: pic2,
    rating: 4.4,
    added: "2025-06-10",
  },
  {
    id: 4,
    name: "Bursa Tennis Arena",
    location: "Bursa",
    sport: "tennis",
    price: 20,
    image: pic4,
    rating: 4.2,
    added: "2025-06-07",
  },
];

function shuffle(arr) {
  // Fisher-Yates shuffle
  let a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Explore() {
  const [featured, setFeatured] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    setFeatured(shuffle(mockVenues).slice(0, 2));
    const rv = JSON.parse(localStorage.getItem("recentlyViewedVenues") || "[]");
    setRecentlyViewed(rv);
  }, []);

  // Category highlights
  const newThisWeek = mockVenues.filter(v =>
    new Date(v.added) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  );
  const topRated = [...mockVenues].sort((a, b) => b.rating - a.rating).slice(0, 2);
  const bestValue = [...mockVenues].sort((a, b) => a.price - b.price).slice(0, 2);

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Explore Venues</h1>

        {/* Featured Venues Carousel */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Featured Venues</h2>
          <div className="flex gap-6 overflow-x-auto">
            {featured.map((venue) => (
              <div
                key={venue.id}
                className="min-w-[300px] bg-white rounded-xl shadow p-4 flex-shrink-0 transform transition hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer"
              >
                <img src={venue.image} alt={venue.name} className="h-40 w-full object-cover rounded-lg mb-2" />
                <div className="text-xl font-bold">{venue.name}</div>
                <div className="text-gray-600">{venue.location}</div>
                <div className="text-yellow-600 font-semibold mb-2">⭐ {venue.rating}</div>
                <div className="text-blue-700 font-bold">{venue.price}₺ / hour</div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Highlights */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Category Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-lg font-bold mb-2">New This Week</div>
              {newThisWeek.map(v => (
                <div
                  key={v.id}
                  className="mb-3 p-3 bg-gray-50 rounded-lg flex gap-2 items-center
                    transform transition hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer"
                >
                  <img src={v.image} className="w-10 h-10 rounded" alt={v.name} />
                  <div>
                    <div className="font-medium">{v.name}</div>
                    <div className="text-xs text-gray-500">{v.location}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-lg font-bold mb-2">Top Rated</div>
              {topRated.map(v => (
                <div
                  key={v.id}
                  className="mb-3 p-3 bg-gray-50 rounded-lg flex gap-2 items-center
                    transform transition hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer"
                >
                  <img src={v.image} className="w-10 h-10 rounded" alt={v.name} />
                  <div>
                    <div className="font-medium">{v.name}</div>
                    <div className="text-xs text-gray-500">⭐ {v.rating}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-lg font-bold mb-2">Best Value</div>
              {bestValue.map(v => (
                <div
                  key={v.id}
                  className="mb-3 p-3 bg-gray-50 rounded-lg flex gap-2 items-center
                    transform transition hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer"
                >
                  <img src={v.image} className="w-10 h-10 rounded" alt={v.name} />
                  <div>
                    <div className="font-medium">{v.name}</div>
                    <div className="text-xs text-gray-500">{v.price}₺ / hour</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Recently Viewed</h2>
          {recentlyViewed.length === 0 ? (
            <div className="text-gray-500">No venues viewed yet.</div>
          ) : (
            <div className="flex gap-6 overflow-x-auto">
              {recentlyViewed.map((venue) => (
                <div
                  key={venue.id}
                  className="min-w-[220px] bg-white rounded-xl shadow p-4 flex-shrink-0 transform transition hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer"
                >
                  <img src={venue.image} alt={venue.name} className="h-28 w-full object-cover rounded-lg mb-2" />
                  <div className="font-bold">{venue.name}</div>
                  <div className="text-gray-600">{venue.location}</div>
                  <div className="text-blue-700 font-bold">{venue.price}₺ / hour</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
