import React from 'react';

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <svg className="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 015 5h3zm-4 4a5 5 0 01-5 5v3a8 8 0 008-8h-3zm-8 0a5 5 0 015-5H4v-3a8 8 0 00-4 6c0 3.314 2.686 6 6 6z"></path>
      </svg>
    </div>
  );
};

export default Spinner;
