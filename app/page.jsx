// Home.js
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pathfinder!</h1>
        <p className="text-lg text-gray-700 mb-8">Discover routes nearby you</p>
        <Link href="/map">
          <p className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            Get Started
          </p>
        </Link>
      </div>
    </div>
  );
}
