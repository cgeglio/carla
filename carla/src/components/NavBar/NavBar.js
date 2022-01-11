
import { Link, animateScroll as scroll } from "react-scroll";
import './navBar.scss';

function NavBar() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className='nav-bar'>
            <button onClick={scrollToTop}>
                Back to Top
            </button>
            <Link
                to="about"
                spy={true}
                smooth={true} 
                duration={500} 
                className='nav-bar-link' 
            >
                About
            </Link>
            <Link
                to="skills"
                spy={true}
                smooth={true} 
                duration={500} 
                className='nav-bar-link' 
            >
                Skills
            </Link>
        </div>
    )
}

export default NavBar;