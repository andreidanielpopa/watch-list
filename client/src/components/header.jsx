import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-36 py-4 bg-transparent">
      
      <div className="flex items-center space-x-2 font-medium text-lg">
        <span className="bg-yellow-400 text-black px-2  rounded-md">WATCH</span>
        <span className="text-yellow-400">LIST</span>
      </div>

      <nav className="flex space-x-16 font-light">
        <a href="#" className="text-white hover:text-gray-300">TV Shows</a>
        <a href="#" className="text-white hover:text-gray-300">Movies</a>
        <a href="#" className="text-white hover:text-gray-300">WatchLists</a>
        <a href="#" className="text-white hover:text-gray-300">Login</a>
        <a href="#" className="text-white hover:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </a>
      </nav>
    </header>
  );
};

export default Header;
