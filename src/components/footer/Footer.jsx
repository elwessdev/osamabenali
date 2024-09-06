import React from 'react';
import "./footer.css";
import { FiMail, FiGithub, FiLinkedin} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Osama Benali</h1>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/osamabenali" className="home__social-icon" target="_blank">
                    <FiLinkedin />
                </a>
                <a href="https://github.com/elwessdev" className="home__social-icon" target="_blank">
                    <FiGithub />
                </a>
                <a href="mailto:benaliosama3@gmail.com" className="home__social-icon" target="_blank">
                    <FiMail  />
                </a>   
            </div>
        </div>
    </footer>
  );
}

export default Footer;