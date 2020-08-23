import React from 'react';


const Footer = () => {
    return (
        <footer>
            <div className="footer container">
                <div className="social">
                    <a href="#" className="social-item">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="#" className="social-item">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-item">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="social-item">
                        <i className="fab fa-linkedin"></i>
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