import React from "react";

const FilterBar = ({ sport, setSport, city, setCity }) => (
  <div className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
    <select
      value={sport}
      onChange={(e) => setSport(e.target.value)}
      className="border rounded-md p-2 w-full md:w-1/3"
    >
      <option value="">All Sports</option>
      <option value="basketball">Basketball</option>
      <option value="tennis">Tennis</option>
      <option value="football">Football</option>
    </select>
    <select
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="border rounded-md p-2 w-full md:w-1/3"
    >
      <option value="">All Cities</option>
      <option value="Istanbul">Istanbul</option>
      <option value="Ankara">Ankara</option>
      <option value="Izmir">Izmir</option>
      <option value="Bursa">Bursa</option>
    </select>
  </div>
);

export default FilterBar;
