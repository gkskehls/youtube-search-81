import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <Link to="/" className="header-title">
                <span style={{ color: 'var(--primary-color)' }}>▶</span>
                <span className="header-title-text"> YouTube Search</span>
            </Link>

            <SearchBar />

            {/* Desktop actions */}
            <div className="header-actions">
                <Link to="/favorites" className="favorites-link">
                    보관함
                </Link>
                <ThemeToggle />
            </div>

            {/* Mobile hamburger button */}
            <button
                className="hamburger-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="메뉴 열기"
            >
                ☰
            </button>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="mobile-menu">
                    <Link to="/favorites" className="favorites-link" onClick={() => setMenuOpen(false)}>
                        보관함
                    </Link>
                    <ThemeToggle />
                </div>
            )}
        </header>
    );
};

export default Header;
