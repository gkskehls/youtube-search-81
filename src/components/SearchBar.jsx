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
        <form onSubmit={handleSubmit} className="flex items-center w-full">
            <div className="flex items-center flex-1 bg-gray-50 dark:bg-[#121212] border border-gray-300 dark:border-gray-700 rounded-l-full px-4 py-1.5 focus-within:border-blue-500 transition-colors">
                <input
                    type="text"
                    placeholder="검색"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full bg-transparent outline-none text-sm dark:text-white"
                />
            </div>
            <button
                type="submit"
                aria-label="Search"
                className="bg-gray-100 dark:bg-[#222222] border border-l-0 border-gray-300 dark:border-gray-700 rounded-r-full px-5 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
                🔍
            </button>
        </form>
    );
};

export default SearchBar;
