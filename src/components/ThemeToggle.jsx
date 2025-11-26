import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Dark Mode"
            style={{
                padding: '0.5rem',
                borderRadius: '50%',
                backgroundColor: 'var(--secondary-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                fontSize: '1.2rem'
            }}
        >
            {isDarkMode ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle;
