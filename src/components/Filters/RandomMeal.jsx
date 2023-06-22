import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomMeal } from '../../redux/reducers/random';
import { getRecipeById } from '../../redux/reducers/recipe';
import { useNavigate } from 'react-router-dom';

const RandomMeal = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data = [], status, error} = useSelector((state)=> state.random);

    const handleRandomMeal = async () => {
        await dispatch( getRandomMeal())
        return dispatch(getRecipeById(data[0].idMeal))  
    }


    return (
        <button onClick={()=> {
            handleRandomMeal()
            navigate(`/recipe/${data[0].idMeal}`)
        }} className='btn btn-random'>
            Choose random Meal
        </button>
    );
};

export default RandomMeal;