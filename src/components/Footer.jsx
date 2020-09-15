import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer>
            <div className="footer container">
                <div className="social">
                    <a  target="_blank" href="https://www.facebook.com/robert.mezagarcia" className="social-item">
                        <FontAwesomeIcon icon={["fab", "facebook"]} />
                    </a>
                    <a  target="_blank" href="https://twitter.com/romeza1239" className="social-item">
                        <FontAwesomeIcon icon={["fab", "twitter"]} />
                    </a>
                    <a  target="_blank" href="https://www.instagram.com/rojarodmeza/" className="social-item">
                        <i className="fab fa-instagram"></i>
                        <FontAwesomeIcon icon={["fab", "instagram"]} />
                    </a>
                    <a target="_blank"  href="https://www.linkedin.com/in/robert-jarod-meza-garcia-3b1128175/" className="social-item">
                        <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                </div>
                <hr />
                <div className="copyright">
                    <span>© 2020 My Website. All rights reserved | Developed by <a href="#">Robert Meza</a> </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;