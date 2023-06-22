import React, { useState }  from 'react';
import {DebounceInput} from 'react-debounce-input';
import { useSelector, useDispatch } from 'react-redux';
import { getMealsByTitle } from '../../redux/reducers/searchTitle';
import { useNavigate } from 'react-router-dom';
import Card from '../Card';


const FilterByName = () => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data, status, error} = useSelector((state)=> state.searchTitle);

    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(getMealsByTitle(title));
        if(data.length === 1){
              navigate(`/recipe/${data[0].idMeal}`)
              e.target.reset();
        }else{
                navigate(`/catalog/search/${title}`)
                e.target.reset(); 
        }
             
    }

   
    return (
        <form onSubmit={handleSubmit}>
            <DebounceInput
                minLength={2}
                debounceTimeout={500}
       
                type="search" 
                placeholder='Filter by title'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
               
            />
            <button>Send</button>
            
        </form>
    );
};

export default FilterByName;