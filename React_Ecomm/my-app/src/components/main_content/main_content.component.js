import React from 'react';
import './main_content.style.css';

const MainContent = ({title, imageUrl, size}) => {
    return (
        <div 
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            className={`${size} main_content_container`}
        >
            <div className="main_content">
                <h1 className="main_content_title">{title}</h1>
                <span className="main_content_link">SHOP NOW</span>
            </div>
        </div>
    )
};

export default MainContent;
