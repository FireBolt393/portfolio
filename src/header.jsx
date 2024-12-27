import { Link } from 'react-scroll'

function Header() {
    return(
        <header className="header" role="banner" id="top">
            <div className="row">
                <nav className="nav" role="navigation">
                    <ul className="nav__items">
                        <li className="nav__item"><Link to="work" smooth={true} duration={100} className="nav__link">Works</Link></li>
                        <li className="nav__item"><Link to="about" smooth={true} duration={100} className="nav__link">About</Link></li>
                        <li className="nav__item"><Link to="contact" smooth={true} duration={100} className="nav__link">Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="header__text-box row">
                <div className="header__text">
                    <h1 className="heading-primary">
                        <span>Hi, I'm Adarsh</span>
                    </h1>
                    <p>A tech enthusiast who's passionate about building innovative digital solutions.</p>
                    <Link to="contact" smooth={true} duration={100} className="btn btn--pink">Get in touch</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;