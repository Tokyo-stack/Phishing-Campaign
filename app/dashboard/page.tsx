'use client';

import React, { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [sessionTime, setSessionTime] = useState(0);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(() => {
        setSessionTime((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [loading]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    // Simulate a loading state for authenticating the network
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-xl font-medium text-gray-700 animate-pulse">Authenticating Connection...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Connection Portal</h1>
            <p className="text-gray-500 mt-2">Manage your active internet session</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium shadow-sm">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Connected
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-gray-500 font-medium mb-1">Session Time</h3>
            <p className="text-3xl font-bold text-gray-800">{formatTime(sessionTime)}</p>
            <p className="text-sm text-green-500 mt-2">Active now</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-gray-500 font-medium mb-1">Data Usage</h3>
            <p className="text-3xl font-bold text-gray-800">1.2 MB</p>
            <p className="text-sm text-blue-500 mt-2">Unlimited Plan</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-gray-500 font-medium mb-1">Signal Strength</h3>
            <p className="text-3xl font-bold text-gray-800">Excellent</p>
            <p className="text-sm text-gray-400 mt-2">5GHz Band</p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-50 opacity-50 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">You're now online!</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Your device has been successfully authenticated on the network. You can now browse the internet freely. Your connection is secure and monitored for maximum performance.
              </p>
              <button 
                onClick={() => window.open('https://google.com', '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 shadow-lg shadow-blue-200"
              >
                Start Browsing
              </button>
            </div>
            <div className="flex-1 flex justify-center">
              {/* Abstract illustration placeholder using CSS */}
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute inset-0 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="relative bg-white rounded-full p-4 shadow-xl border border-gray-100 flex items-center justify-center w-full h-full z-10">
                  <svg className="w-20 h-20 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
