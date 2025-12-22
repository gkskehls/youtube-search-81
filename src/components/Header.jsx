import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';
import CategoryBar from './CategoryBar';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header sticky top-0 z-50 bg-white dark:bg-[#0f0f0f] border-b dark:border-gray-800">
            <div className="flex items-center justify-between px-4 h-14">
                <Link to="/" className="header-title flex items-center gap-1">
                    <span className="text-2xl" style={{ color: 'var(--primary-color)' }}>▶</span>
                    <span className="header-title-text font-bold text-xl tracking-tight hidden sm:block"> YouTube Search</span>
                </Link>

                <div className="flex-1 max-w-[720px] mx-4">
                    <SearchBar />
                </div>

                <div className="header-actions flex items-center gap-2">
                    <Link to="/favorites" className="favorites-link px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium">
                        보관함
                    </Link>
                    <ThemeToggle />
                    
                    <button
                        className="hamburger-button sm:hidden p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="메뉴 열기"
                    >
                        ☰
                    </button>
                </div>
            </div>

            <div className="px-4 py-2 overflow-hidden">
                <CategoryBar />
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="mobile-menu fixed inset-0 z-50 bg-white dark:bg-[#0f0f0f] p-4 flex flex-col gap-4">
                    <div className="flex justify-end">
                        <button onClick={() => setMenuOpen(false)} className="text-2xl">✕</button>
                    </div>
                    <Link to="/favorites" className="text-lg font-medium" onClick={() => setMenuOpen(false)}>
                        보관함
                    </Link>
                    <div className="flex items-center justify-between">
                        <span>테마 변경</span>
                        <ThemeToggle />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
