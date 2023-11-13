import { Link, useNavigate, useParams } from 'react-router-dom';
import './SingleProduct.scss';
import products from '../Products/products.json';

const SingleProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams();

    const singleProduct = products.find(product => product.id == parseInt(productId));
    
    const { id, title, price, image, description } = singleProduct;
    // console.log(singleProduct);
    return (
        <div className='single'>
            <h1 className="single-heading">
                {title}
            </h1>

            <div className="single-card">
                <img src={image} className='single-img' alt="single product image" />
                <h2>{title}</h2>
                <p className='description'>{description}</p>
                <h3 className='price'>Price: {price}</h3>
                <div className="flex-row">
                    <button className='btn' onClick={() => navigate(-1)}>Back</button>
                    <button className='btn' onClick={() => navigate('/products')}>Navigate To Products</button>
                    <Link className='btn' to='/products'>Products</Link>
               </div>
            </div>
        </div>
    )
}
export default SingleProduct;