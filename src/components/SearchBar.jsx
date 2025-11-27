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
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="검색"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="search-input"
            />
            <button
                type="submit"
                aria-label="Search"
                className="search-button"
            >
                🔍
            </button>
        </form>
    );
};

export default SearchBar;
