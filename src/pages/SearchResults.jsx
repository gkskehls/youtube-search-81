import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchVideos } from '../services/youtube';
import VideoCard from '../components/VideoCard';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('search_query');
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            if (!query) return;

            setLoading(true);
            setError(null);
            try {
                const results = await searchVideos(query);
                setVideos(results);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, [query]);

    if (loading) return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>;
    if (error) return <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--primary-color)' }}>{error}</div>;

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem' }}>"{query}" 검색 결과</h2>
            {videos.length === 0 ? (
                <p>검색 결과가 없습니다.</p>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {videos.map((video) => (
                        <VideoCard key={video.id.videoId || video.etag} video={video} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResults;
