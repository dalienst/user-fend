import Navbar from "../Navbar/Navbar";
import './Landing.css'
import heroImg from '../../images/profile.svg'
import { Link } from "react-router-dom";
import { publicLinks } from "../../constants/links";

const Landing = () => {
    return ( 
        <div className="landing-page">
            <Navbar />
            <div className="hero-section">
                <div className="hero-right">
                    <img src={heroImg} alt=""/>
                </div>
                <div className="hero-left">
                    <h1 className="hero-title">Easily create, view and edit your profile</h1>
                    <p className="hero-description">Elephant Room is a profile tool that allows you to easily create and edit your profile to one that suits you perfectly.</p>
                    <Link to={publicLinks.Login} className="nav-button">Get Started</Link>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;