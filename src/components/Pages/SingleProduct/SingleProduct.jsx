import { Link, useNavigate, useParams } from 'react-router-dom';
import './SingleProduct.scss';
import products from '../Products/products.json';

const SingleProduct = () => {
    const navigate = useNavigate();
    const { productId } = useParams();

    const singleProduct = products.find(product => product.id == parseInt(productId));
    
    const [id, title, price, image, details] = singleProduct;
    console.log(singleProduct);
    return (
        <div className='single'>
            <h1 className="single-heading">
                {title}d
            </h1>

            <div className="single-card">
                <img src={image} className='single-img' alt="single product image" />
                <h2>{title}</h2>
                <p className='description'>description</p>
                <h3>{price}</h3>
                <div className="flex-row">
                    <button onClick={() => navigate(-1)}>Back</button>
                    <button onClick={() => navigate('/products')}>Navigate To Products</button>
                    <Link to='/products'>Products</Link>
               </div>
            </div>
        </div>
    )
}
export default SingleProduct;