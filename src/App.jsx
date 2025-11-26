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
        <div className="app">
          <Header />
          <main style={{ padding: '2rem' }}>
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
