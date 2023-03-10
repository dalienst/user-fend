import { useState } from "react";
import { Link } from "react-router-dom";
import { publicLinks } from "../../constants/links";
import './Navbar.css'

const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    const closeMobileMenu = () => {
        setClick(false)
    }
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo navbar-logo">elephant room</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    {/* <li className="nav-item">
                        <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/help" className="nav-links" onClick={closeMobileMenu}>Help</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to={publicLinks.Login} className="nav-links" onClick={closeMobileMenu}>Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={publicLinks.Registration} className="nav-links" onClick={closeMobileMenu}>Signup</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;