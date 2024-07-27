import React, { useState, useEffect } from 'react';

function ToggleDarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            setIsDarkMode(savedTheme === 'light');
        } else if (prefersDark) {
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
    };

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <button onClick={toggleTheme}>
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}

export default ToggleDarkMode;
