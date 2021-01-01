import React from 'react';
import './collection.style.css';

import CollectionItem from '../collection_item/collectionItem.component';

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collectionPreview">
            <h1 className="collection-preview-title">{title}</h1>
            <div className="preview">
                {
                    items
                    .filter((item, index) => index < 4)
                    .map( ({id, ...eachCollection}) => (
                        <CollectionItem key={id} {...eachCollection}/>
                         
                    ))
                }
            </div>
        </div>
    )
};

export default CollectionPreview;
