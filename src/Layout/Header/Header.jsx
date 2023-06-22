import React from 'react';
import {BsFillCalendarHeartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';

const Header = () => {
    return (
        <>
        <nav className='#000000 black'>
            <div className="nav-wrapper content ">
            <Link to={'/'} className="brand-logo">The meal</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <Link to={'/'} className='favorites'>
                        <BsFillCalendarHeartFill fill='red' style={{fontSize: '28px'}}/>
                    </Link>
                </li>
            </ul>
            </div>
      </nav>
       <Filters/>
       </>
    
    );
};

export default Header;