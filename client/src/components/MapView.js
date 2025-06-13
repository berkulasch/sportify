import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// pin icon
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});


const MapView = ({ venues }) => {
  const center = [39.0, 35.0]; // Center of Turkey

  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden mb-10 z-0 relative">
      <MapContainer
        center={center}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {venues.map((venue) => (
          <Marker key={venue.id} position={[venue.lat, venue.lng]}>
            <Popup>
              <div className="w-52">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-24 object-cover rounded mb-2"
                  style={{ maxWidth: 200 }}
                />
                <div className="font-bold text-lg mb-1">{venue.name}</div>
                <div className="text-gray-500 mb-1">{venue.location}</div>
                <div className="text-blue-700 font-bold mb-1">
                  {venue.price}₺ <span className="text-gray-500 text-sm">/ hour</span>
                </div>
                {venue.sport && (
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                    {venue.sport.charAt(0).toUpperCase() + venue.sport.slice(1)}
                  </span>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
