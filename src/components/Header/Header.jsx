
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
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/products'>Products</NavLink></li>
                        <li><NavLink to='/posts'>Posts</NavLink></li>

                    </ul>
               </div>
            </header>
        </div>
    )
}
export default Header;