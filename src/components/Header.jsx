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
                {/* 로고 영역 */}
                <Link to="/" className="header-title flex items-center gap-1 shrink-0">
                    <span className="text-2xl" style={{ color: 'var(--primary-color)' }}>▶</span>
                    <span className="header-title-text font-bold text-xl tracking-tight hidden sm:block"> YouTube Search</span>
                </Link>

                {/* 검색바 영역 */}
                <div className="flex-1 max-w-[720px] mx-4">
                    <SearchBar />
                </div>

                {/* 우측 액션 버튼 영역 */}
                <div className="header-actions flex items-center gap-2">
                    {/* 데스크톱 전용: 보관함 & 테마 토글 (작은 화면에서는 숨김) */}
                    <div className="hidden sm:flex items-center gap-2">
                        <Link to="/favorites" className="favorites-link px-3 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium">
                            보관함
                        </Link>
                        <ThemeToggle />
                    </div>
                    
                    {/* 모바일 전용: 햄버거 메뉴 버튼 (큰 화면에서는 숨김) */}
                    <button
                        className="hamburger-button sm:hidden p-2 text-xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="메뉴 열기"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* 카테고리 바 */}
            <div className="px-4 py-2 overflow-hidden border-t dark:border-gray-800">
                <CategoryBar />
            </div>

            {/* 모바일 전체 화면 메뉴 */}
            {menuOpen && (
                <div className="mobile-menu fixed inset-0 z-[100] bg-white dark:bg-[#0f0f0f] p-4 flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                        <span className="font-bold text-xl ml-2">메뉴</span>
                        <button onClick={() => setMenuOpen(false)} className="text-3xl p-2">✕</button>
                    </div>
                    
                    <nav className="flex flex-col gap-2">
                        <Link 
                            to="/favorites" 
                            className="text-lg font-medium p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800" 
                            onClick={() => setMenuOpen(false)}
                        >
                            📂 보관함
                        </Link>
                        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800">
                            <span className="text-lg font-medium">🌓 테마 변경</span>
                            <ThemeToggle />
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
