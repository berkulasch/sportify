import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">About Sportify</h1>
        <p className="text-gray-700 text-lg">
          Your Destination for Booking Sports Venues!
          <br />
          <br />
          At Sportify, we believe that finding and reserving your next game spot should be simple, inspiring, and stress-free. Whether you’re organizing a friendly basketball match, scheduling a tennis practice, or booking a football field for your team, our platform connects you with the best sports venues in just a few clicks.
          <br />
          <br />
          <strong>Why Sportify?</strong>
          <br />
          <br />
          <ul className="list-disc pl-5">
            <li>Curated Venues: Only the best courts, clubs, and fields, handpicked for quality and convenience.</li>
            <li>Seamless Booking: Compare options, view photos, and reserve instantly no phone calls or waiting required.</li>
            <li>Local Love: We’re passionate about sports and community. That’s why we’re dedicated to making it easier for everyone to get out and play.</li>
            <li>Safe & Secure: Your bookings and information are always protected.</li>
          </ul>
          <br />
          Whether you’re a seasoned athlete or just looking for some weekend fun, Sportify is here to make your next game easier to plan and even more fun to play.
          <br />
          <br />
          Get started. Book your court. Play your game. Sportify.
        </p>
      </div>
    </div>
  );
}