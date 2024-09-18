import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center px-36 py-5 bg-slate-900 shadow-2xl">
      <div className="flex items-center space-x-2 font-medium text-lg">
        <span className="bg-yellow-400 text-black px-2 rounded-md">WATCH</span>
        <span className="text-yellow-400">LIST</span>
      </div>

      <nav className="flex space-x-14 text-lg font-normal">
        <a href="#" className="relative text-white group">
          Series
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#" className="relative text-white group">
          Películas
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#" className="relative text-white group">
          Login
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="#" className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
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
