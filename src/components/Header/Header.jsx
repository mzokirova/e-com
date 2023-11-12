
import './Header.scss';
import { Link,NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <header className='container'>
                <div className='header-style'>
                    <div className='logo'>
                        <Link to='/' className='logo-name'>e-com</Link>
                    </div>

                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/posts'>Posts</Link></li>

                    </ul>
               </div>
            </header>
        </div>
    )
}
export default Header;