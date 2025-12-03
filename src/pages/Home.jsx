import React, { useEffect, useState } from 'react';
import { getPopularVideos } from '../services/youtube';
import VideoCard from '../components/VideoCard';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularVideos = async () => {
            try {
                setLoading(true);
                const popularVideos = await getPopularVideos();
                setVideos(popularVideos);
            } catch (err) {
                setError('Failed to load videos.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPopularVideos();
    }, []);

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>{error}</div>;
    }

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Popular Videos</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
                {videos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default Home;
