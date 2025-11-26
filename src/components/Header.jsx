import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: 'var(--secondary-bg)',
            borderBottom: '1px solid var(--border-color)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <span style={{ color: 'var(--primary-color)' }}>▶</span> YouTube Search
            </Link>

            <SearchBar />

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/favorites" style={{ textDecoration: 'none', color: 'var(--text-color)', fontWeight: 'bold', fontSize: '0.9rem' }}>
                    보관함
                </Link>
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
