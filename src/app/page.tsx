"use client"; // Add this at the top

import React, { useState } from 'react';
import PieChart from './PieChart';
import {
  Chart as ChartJS,
  ArcElement,   // Import the ArcElement for Pie charts
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);
const Home = () => {
  const [timeFilter, setTimeFilter] = useState('1 Day');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto">
        
        {}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">CRM Statistics</h1>
          <div className="flex space-x-4">
            {['1 Day', '1 Week', '1 Month'].map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 ${
                  timeFilter === filter ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                } rounded`}
                onClick={() => setTimeFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        {}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Total Sales</h2>
            <p className="text-3xl font-bold">500</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">New Customers</h2>
            <p className="text-3xl font-bold">30</p>
          </div>
        </section>

        {}
        <section className="mt-8">
          <h2 className="text-xl mb-4">Sales Distribution</h2>
          <div className="bg-white p-6 rounded shadow">
            <PieChart />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
