// import "./assets/scroll.js";
import gitHub from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import { Link } from "react-scroll";

function Footer() {

    return(
        <>
            <footer role="contentinfo" className="footer">
                <div className="row">
                    <ul className="footer__social-links">
                        
                        <li className="footer__social-link-item">
                            <a href="https://github.com/FireBolt393/" title="Link to Github Profile" >
                                <img src={gitHub} className="footer__social-image" alt="Github" />
                            </a>
                        </li>
                        
                        <li className="footer__social-link-item">
                            <a href="https://www.linkedin.com/in/adarsh-p-833272301/">
                                <img src={linkedin} title="Link to Linkedin Profile" className="footer__social-image" alt="Linkedin" />
                            </a>
                        </li>
                    </ul>

                    <p>
                        &copy; 2024 - Built with passion by Adarsh. P.
                    </p>
                    <div className="footer__github-buttons">
                        
                    </div>
                </div>
            </footer>
            
        </>
    );

}

export default Footer;