import React from 'react';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div style={{ margin: '1rem' }} className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <img className="w-full h-64 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Team:</span> {team}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Nationality:</span> {nationality}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Jersey Number:</span> {jerseyNumber}
        </p>
        <p className="text-gray-700 text-base">
          <span className="font-semibold">Age:</span> {age}
        </p>
      </div>
    </div>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/300x200?text=No+Image"
};

export default Player;
