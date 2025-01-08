import { Link } from 'react-router-dom';

//Assets
import './Header.css';
import Logo from '../../assets/dnc-logo.svg';
console.log(Logo);

function Header () {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                    <nav>
                        <ul className='d-flex'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    );
}

export default Header;