import React from "react";

// Optionally, pass `onBook` for "Book Now" (used on Home), or omit for Explore view.
const VenueCard = ({ venue, onBook }) => {
  // Save to recently viewed (up to 6 unique)
  const handleCardClick = () => {
    const key = "recentlyViewedVenues";
    const existing = JSON.parse(localStorage.getItem(key) || "[]");
    // Prevent duplicates
    const filtered = existing.filter(v => v.id !== venue.id);
    const updated = [{ ...venue }, ...filtered].slice(0, 6);
    localStorage.setItem(key, JSON.stringify(updated));
    // Only call onBook if present (so works in both pages)
    if (onBook) onBook(venue);
  };

  return (
    <div
      className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition group cursor-pointer flex flex-col"
      onClick={onBook ? handleCardClick : undefined} // only clickable on home
      tabIndex={0}
      aria-label={venue.name}
      onKeyDown={(e) => {
        if (e.key === "Enter" && onBook) handleCardClick();
      }}
    >
      <img
        src={venue.image}
        alt={venue.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-1">{venue.name}</h2>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-500">{venue.location}</span>
            {venue.rating && (
              <span className="text-yellow-500 ml-2 flex items-center">
                <svg height={16} width={16} viewBox="0 0 20 20" fill="currentColor" className="inline mr-1"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.572-.955L10 0l2.94 5.955 6.572.955-4.756 4.635 1.122 6.545z"/></svg>
                {venue.rating}
              </span>
            )}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-blue-700 font-bold text-lg">
            {venue.price}₺ <span className="text-sm text-gray-500">/ hour</span>
          </span>
          {onBook && (
            <button
              className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={e => {
                e.stopPropagation(); // Prevent parent click
                handleCardClick();
              }}
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
