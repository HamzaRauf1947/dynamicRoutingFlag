import Link from 'next/link';
import React from 'react';

export default function Button() {
  return (
    <div className="flex justify-center mt-4 pb-4">
      <Link 
        href="/" 
        className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700"
      >
        Home Page
      </Link>
    </div>
  );
}
