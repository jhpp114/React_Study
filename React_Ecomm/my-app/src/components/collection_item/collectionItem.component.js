import React from 'react';
import './collectionItem.style.css';

const CollectionItem = ({name, imageUrl, price}) => {
    return (
        <div className="collection-item-container">
            <div 
                className="collection-item-image"
                style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="collection-item-footer">
                <span className="item-title">{name}</span>
                <span className="item-price">{price}</span>
            </div>
        </div>
    )
}

export default CollectionItem;
