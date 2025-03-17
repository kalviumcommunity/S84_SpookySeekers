import React from "react";
import GhostSightingCard from "../components/GhostSightingCard";

const dummySighting = {
  location: "Abandoned Mansion, London",
  description: "A ghostly figure was seen near the grand staircase.",
  witness: "Sarah Connor",
};

const GhostSightingPage = () => {
return (
    <div className="bg-black min-h-screen flex flex-col items-center p-5 relative">
        <h1 className="text-4xl font-bold text-cyan-400 mt-2 absolute top-5">👻 Spooky Sightings</h1>
        <ol>
            <li style={{ 
                background: 'rgba(0, 0, 0, 0.7)',
                padding: 20,
                borderRadius: 10,
                boxShadow: '0 0 10px cyan',
                width: 280,
                textAlign: 'center',
                justifySelf: 'center'
            }} className="flex flex-col items-center justify-center min-h-screen mt-16">
                <GhostSightingCard sighting={dummySighting} />
            </li>
        </ol>
    </div>
);
};


export default GhostSightingPage;
