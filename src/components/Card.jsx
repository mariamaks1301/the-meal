import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import { getRecipeById } from '../redux/reducers/recipe';
import { useDispatch } from 'react-redux';

const Card = ({item}) => {

    const dispatch = useDispatch();



    return (
        <div className="card" id={item.idMeal}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={item.strMealThumb} alt={item.strMeal}/>
            </div>
            <div className="card-content">
                <span className="card-title activator white-text text-darken-4">{item.strMeal.slice(0, 17)}...</span>
                <button className='btn btn__small white-text'><Link onClick={()=> dispatch(getRecipeById(item.idMeal))} to={`/recipe/${item.idMeal}`}>See recipe</Link></button>
            </div>
        </div>

    );
};

export default Card;