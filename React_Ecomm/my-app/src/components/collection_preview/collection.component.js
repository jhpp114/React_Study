import React from 'react';
import './collection.style.css';

const CollectionPreview = ({title, items}) => {
    console.log(title);
    return (
        <div className="collectionPreview">
            <h1>{title}</h1>
            <div className="preview">
                {
                    items.filter((item, index) => index < 4).map( (eachData) => <div key={eachData.id}>{eachData.name}</div>)
                        
                }
            </div>
        </div>
    )
};

export default CollectionPreview;
