import React from "react";

const GhostSightingCard = ({ sighting }) => {
  return (
    <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg w-80">
      <h2 className="text-xl font-bold text-cyan-400">{sighting.location}</h2>
      <p className="text-gray-300">{sighting.description}</p>
      <p className="text-sm text-gray-500">👁 Witness: {sighting.witness}</p>
      <div className="mt-4 flex justify-between">
        <button className="bg-cyan-500 px-3 py-1 rounded-lg text-black font-semibold hover:bg-cyan-400 transition">
          Read More
        </button>
        <button className="bg-red-500 px-3 py-1 rounded-lg text-black font-semibold hover:bg-red-400 transition">
          Report Sighting
        </button>
      </div>
    </div>
  );
};

export default GhostSightingCard;
