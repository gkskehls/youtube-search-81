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
        <form onSubmit={handleSubmit} className="flex items-center w-full max-w-[600px] mx-auto">
            {/* 검색어 입력 영역 */}
            <div className="flex items-center flex-1 bg-white dark:bg-[#0f0f0f] border border-gray-300 dark:border-gray-700 rounded-l-full px-4 h-10 focus-within:border-blue-500 focus-within:shadow-sm transition-all">
                <input
                    type="text"
                    placeholder="검색"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full bg-transparent outline-none text-base dark:text-white placeholder-gray-500"
                />
            </div>

            {/* 검색 버튼 */}
            <button
                type="submit"
                aria-label="Search"
                className="bg-gray-50 dark:bg-[#222222] border border-l-0 border-gray-300 dark:border-gray-700 rounded-r-full px-5 h-10 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center"
            >
                <span className="text-lg opacity-70">🔍</span>
            </button>
        </form>
    );
};

export default SearchBar;
