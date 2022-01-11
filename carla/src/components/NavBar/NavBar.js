
import { Link, animateScroll as scroll } from "react-scroll";
import './navBar.scss';

function NavBar() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className='nav-bar'>
            <Link
            to="home"
            spy={true}
            smooth={true} 
            duration={500} 
            className='nav-bar-link' 
            >
                Home
            </Link>
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
            <Link
                to="projects"
                spy={true}
                smooth={true} 
                duration={500} 
                className='nav-bar-link' 
            >
                Projects
            </Link>
            <Link
                to="contact"
                spy={true}
                smooth={true} 
                duration={500} 
                className='nav-bar-link' 
            >
                Contact
            </Link>
        </div>
    )
}

export default NavBar;