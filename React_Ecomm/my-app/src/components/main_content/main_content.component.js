import React from 'react';
import './main_content.style.css';

import { withRouter } from 'react-router-dom';

const MainContent = ({title, imageUrl, size, history, linkUrl, match}) => {
    // console.log(history);
    // console.log(match);
    return (
        <div 
            className={`${size} main_content_container`} 
            onClick={ ()=> history.push(`${match.url}${linkUrl}`)}
        >
            <div style={{backgroundImage: `url(${imageUrl})`}} className="background-image"/>
            <div className="main_content">
                <h1 className="main_content_title">{title.toUpperCase()}</h1>
                <span className="main_content_link">SHOP NOW</span>
            </div>
        </div>
    )
};

// WithRouter to use history props
export default withRouter(MainContent);
