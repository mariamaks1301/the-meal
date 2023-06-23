import React from 'react';
import {BsFillCalendarHeartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import RandomMeal from '../../components/Filters/RandomMeal';

const Header = () => {
    return (
        <>
        <nav className='#000000 black'>
            <div className="nav-wrapper content ">
            <Link to={'/'} className="brand-logo">The meal</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <RandomMeal/>
            </ul>
            </div>
      </nav>
       <Filters/>
       </>
    
    );
};

export default Header;