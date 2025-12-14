import React from 'react';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="group relative w-full max-w-sm bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-700 hover:border-blue-500/50">
      <div className="relative h-80 overflow-hidden">
        <img 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" 
          src={imageUrl} 
          alt={name} 
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-2xl font-bold text-white drop-shadow-md">{name}</h2>
          <p className="text-blue-400 font-medium">{team}</p>
        </div>
      </div>
      
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Nationality</span>
          <span className="text-gray-200 font-semibold">{nationality}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-700 pb-2">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Jersey No.</span>
          <span className="text-3xl font-black text-gray-600 group-hover:text-blue-500 transition-colors duration-300">{jerseyNumber}</span>
        </div>
        <div className="flex justify-between items-center pt-1">
          <span className="text-gray-400 text-sm uppercase tracking-wider">Age</span>
          <span className="text-gray-200 font-semibold">{age} years</span>
        </div>
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
  imageUrl: "https://via.placeholder.com/300x400?text=No+Image"
};

export default Player;
