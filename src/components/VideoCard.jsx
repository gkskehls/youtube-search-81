import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    // Handle edge case where id might be a string or object depending on API response type
    const videoId = video.id?.videoId || video.id;

    return (
        <Link to={`/video/${videoId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="video-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', cursor: 'pointer' }}>
                <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    style={{ width: '100%', borderRadius: '10px', objectFit: 'cover', aspectRatio: '16/9', backgroundColor: '#333' }}
                />
                <div>
                    <h3 style={{
                        fontSize: '1rem',
                        margin: '0 0 0.2rem 0',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {video.snippet.title}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-color)', opacity: 0.7 }}>{video.snippet.channelTitle}</p>
                </div>
            </div>
        </Link>
    );
};

export default VideoCard;
