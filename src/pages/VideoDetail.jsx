import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoDetails } from '../services/youtube';
import { useStorage } from '../context/StorageContext';

const VideoDetail = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addFavorite, removeFavorite, isFavorite } = useStorage();

    useEffect(() => {
        const fetchVideo = async () => {
            setLoading(true);
            const data = await getVideoDetails(id);
            setVideo(data);
            setLoading(false);
        };
        fetchVideo();
    }, [id]);

    if (loading) return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading...</div>;
    if (!video) return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Video not found</div>;

    const isFav = isFavorite(id);

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '15px', boxShadow: '0 4px 6px var(--shadow-color)' }}>
                <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
            <div style={{ marginTop: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '1rem' }}>
                    <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-color)', flex: 1 }}>{video.snippet.title}</h1>
                    <button
                        onClick={() => isFav ? removeFavorite(id) : addFavorite(video)}
                        style={{
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            backgroundColor: isFav ? 'var(--primary-color)' : 'var(--secondary-bg)',
                            color: '#fff',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {isFav ? '★ Saved' : '☆ Save'}
                    </button>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-color)', opacity: 0.7, marginBottom: '1rem' }}>
                    <span style={{ fontWeight: 'bold' }}>{video.snippet.channelTitle}</span>
                    <span>{new Date(video.snippet.publishedAt).toLocaleDateString()}</span>
                </div>
                <hr style={{ borderColor: 'var(--border-color)', margin: '1rem 0' }} />
                <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: 'var(--text-color)', opacity: 0.9 }}>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
