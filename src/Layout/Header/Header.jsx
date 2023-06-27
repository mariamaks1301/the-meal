import React from 'react';
import {BsFillCalendarHeartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import RandomMeal from '../../components/Filters/RandomMeal';

const Header = () => {
    return (
        <>
        <nav className='#000000 black navbar'>
            <div className="nav-wrapper content ">
                <Link to={'/'} className="brand-logo">The meal</Link>
                <ul id="nav-mobile" className=" hide-on-med-and-down right row">
                    <li>
                        <RandomMeal/>
                    </li>
                </ul>
            </div>
      </nav>
       <Filters/>
       </>
    
    );
};

export default Header;