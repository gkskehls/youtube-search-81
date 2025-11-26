import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/results?search_query=${encodeURIComponent(keyword)}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', flex: 1, maxWidth: '600px', margin: '0 1rem' }}>
            <input
                type="text"
                placeholder="검색"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                style={{
                    width: '100%',
                    padding: '0.6rem 1rem',
                    borderRadius: '20px 0 0 20px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-color)',
                    color: 'var(--text-color)',
                    outline: 'none',
                    fontSize: '1rem'
                }}
            />
            <button
                type="submit"
                aria-label="Search"
                style={{
                    padding: '0.6rem 1.2rem',
                    borderRadius: '0 20px 20px 0',
                    border: '1px solid var(--border-color)',
                    borderLeft: 'none',
                    backgroundColor: 'var(--secondary-bg)',
                    color: 'var(--text-color)',
                    fontSize: '1rem'
                }}
            >
                🔍
            </button>
        </form>
    );
};

export default SearchBar;
