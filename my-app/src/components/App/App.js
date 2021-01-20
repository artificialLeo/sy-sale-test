import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './App.css'

let data = [
    {
        "photo": "img/shampoo.svg",
        "price": "200"
    },
    {
        "photo": "img/cream.svg",
        "price": "300"
    },
    {
        "photo": "img/shampoo.png",
        "price": "400"
    }
];

const App = () => {
    return (
        <div className='adaptive-block'>
            {data.map((item, i) => <ProductCard key={i} mainPhoto={item.photo} productPrice={item.price} />)}
        </div>
    );
};

export default App;