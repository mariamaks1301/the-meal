import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="page-footer #000000 black">
          <div className="footer-copyright">
            <div className="container footer__row">
            © {new Date().getFullYear()}  Copyright Text
            <Link to={'/'} className="white-text brand-logo left">The meal</Link>
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>

    );
};

export default Footer;