import React, { createContext, useContext, useState, useEffect } from 'react';

const StorageContext = createContext();

export const useStorage = () => useContext(StorageContext);

export const StorageProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (video) => {
        setFavorites(prev => {
            // Ensure we handle both string IDs and object IDs consistent with VideoCard
            const videoId = video.id?.videoId || video.id;
            if (prev.some(v => (v.id?.videoId || v.id) === videoId)) return prev;
            return [...prev, video];
        });
    };

    const removeFavorite = (videoId) => {
        setFavorites(prev => prev.filter(v => (v.id?.videoId || v.id) !== videoId));
    };

    const isFavorite = (videoId) => {
        return favorites.some(v => (v.id?.videoId || v.id) === videoId);
    };

    return (
        <StorageContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </StorageContext.Provider>
    );
};
