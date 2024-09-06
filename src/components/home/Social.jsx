import React from "react";
import { FiMail, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
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
    ); 
}

export default Social;