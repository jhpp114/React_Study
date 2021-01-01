import React, { Component } from 'react';
import SHOPPING_DATA from './shoppingData';
import './shop.style.css';

import CollectionPreview from '../../components/collection_preview/collection.component';

class ShoppingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingCollection: SHOPPING_DATA
        };
    }

    render() {
        const collectionData = this.state.shoppingCollection;
        return (
            <div className="shopping-conatiner">
                {
                    collectionData.map( ({id, ...eachCategoryCollection}) => (
                        <CollectionPreview 
                            key={id}
                            {...eachCategoryCollection}
                        />
                    ))
                }
            </div>
        )
    }
}

export default ShoppingPage;
