import React from 'react';
import './Products.scss';
import products from './products.json';
import { Link } from 'react-router-dom';

const Products = (props) => {

    return (
        <main className='products container'>
            <div className='product-box'>
            {
                products.map((product) => {
                    return (
                       
                       <div className="product-card" key={product.id}>
                           <img src={product.image} alt="card image" />
                           <h3>{product.title}</h3>
                           <div className="flex-row">
                               <h4 className='price'>${product.price}</h4>
                               <Link className='details' to={`./products/${product.id}`}> Details...</Link>
                           </div>
                       </div>
                   )
                })
                }
                </div>
        </main>
    )
}
export default Products;