import React from 'react';
import Product from './Product';


const Image = () => {
    return (
        <div>
            <img src={Product.imageUrl} alt="adiouma" />
        </div>
    );
}

export default Image;
