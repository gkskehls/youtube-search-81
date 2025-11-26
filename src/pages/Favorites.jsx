import React from 'react';
import { useStorage } from '../context/StorageContext';
import VideoCard from '../components/VideoCard';

const Favorites = () => {
    const { favorites } = useStorage();

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem' }}>보관함</h2>
            {favorites.length === 0 ? (
                <p>저장된 동영상이 없습니다.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {favorites.map((video) => (
                        <VideoCard key={video.id.videoId || video.id} video={video} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
