import React from 'react';
import './main_content.style.css';

const MainContent = ({title, imageUrl, size}) => {
    return (
        <div className={`${size} main_content_container`}>
            <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"/>
            <div className="main_content">
                <h1 className="main_content_title">{title.toUpperCase()}</h1>
                <span className="main_content_link">SHOP NOW</span>
            </div>
        </div>
    )
};

export default MainContent;
