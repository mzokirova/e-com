import { Link } from 'react-router-dom';
import './Products.scss'
const ProductCard = (props) => {
    return (
        <div className="product-card">
            <img src={props.image} alt="card image" />
            <h3>{props.title}</h3>
            <div className="flex-row">
                <h4 className='price'>${props.price}</h4>
                <Link className='details' to={`./products/${props.id}`}> Details...</Link>
            </div>
        </div>
    )
}