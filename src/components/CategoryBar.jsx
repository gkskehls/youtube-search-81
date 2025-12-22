import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const categories = ['전체', '음악', '게임', '뉴스', '실시간'];

const CategoryBar = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const currentCategory = searchParams.get('search_query') || '전체';

    const handleCategoryClick = (category) => {
        if (category === '전체') {
            navigate('/');
        } else {
            navigate(`/results?search_query=${encodeURIComponent(category)}`);
        }
    };

    return (
        <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`px-4 py-1.5 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                        currentCategory === category
                            ? 'bg-black text-white dark:bg-white dark:text-black'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryBar;
