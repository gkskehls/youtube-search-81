import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { StorageProvider } from './context/StorageContext';
import Header from './components/Header';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import VideoDetail from './pages/VideoDetail';

import Favorites from './pages/Favorites';

export default function App() {
  return (
    <ThemeProvider>
      <StorageProvider>
        <div className="app min-h-screen bg-white dark:bg-[#0f0f0f] dark:text-white">
          <Header />
          <main className="max-w-[1400px] mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/results" element={<SearchResults />} />
              <Route path="/video/:id" element={<VideoDetail />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
        </div>
      </StorageProvider>
    </ThemeProvider>
  );
}
