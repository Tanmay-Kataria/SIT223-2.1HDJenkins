import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of the application. Feel free to explore the features provided.</p>
            <div className="feature-list">
                <div className="feature-item">
                    <h2>Feature 1</h2>
                    <p>Details about feature 1.</p>
                </div>
                <div className="feature-item">
                    <h2>Feature 2</h2>
                    <p>Details about feature 2.</p>
                </div>
            </div>
        </div>
    );
}
