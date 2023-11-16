import React from 'react';
import './Products.scss';
import { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Products = (props) => {

    const [data, setData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const category = searchParams.get('category');
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                if (!category) {
                    setData(data)
                } else {
                    const filteredData = data.filter((item) => {
                        return item.category == category
                    })
                    setData(filteredData);
                }
            })
    }, [category])

    return (
        <div>

            <div className='categories'>
                <button className='category-btn' onClick={() => { setSearchParams({ category: "men's clothing" }) }}>men's clothing</button>
                <button className='category-btn' onClick={() => { setSearchParams({ category: 'jewelery' }) }}>jewelery</button>
                <button className='category-btn'  onClick={() => { setSearchParams({ category: 'electronics' }) }}>electronics</button>
                <button className='category-btn' onClick={() => { setSearchParams({ category: "women's clothing" }) }}>women's clothing</button>
            </div>

        <main className='products container'>
            <div className='product-box'>
            {
                data.map((product) => {
                    return (
                       
                       <div className="product-card" key={product.id}>
                           <img src={product.image} alt="card image" />
                           <h3>{product.title}</h3>
                           <div className="flex-row">
                               <h4 className='price'>${product.price}</h4>
                               <Link className='details' to={`/products/${product.id}`}> Details...</Link>
                           </div>
                       </div>
                   )
                })
                }
                </div>
            </main>
            </div>
    )
}
export default Products;