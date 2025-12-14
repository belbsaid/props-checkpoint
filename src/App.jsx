import React from 'react';
import PlayersList from './PlayersList';

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-gray-800 text-white font-sans">
      <header className="py-10 shadow-lg bg-gray-900/50 backdrop-blur-md sticky top-0 z-10 border-b border-gray-700">
        <h1 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400 tracking-tight drop-shadow-sm">
          Football Legends
        </h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        <PlayersList />
      </main>
    </div>
  );
}
