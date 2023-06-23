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
    const {data=[], status, error} = useSelector((state)=> state.searchTitle);

 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title.length){
            await dispatch(getMealsByTitle(title))
        }
        if(data.length === 1){
             return navigate(`/recipe/${data[0].idMeal}`)
        }
        if(data.length > 1){
            return navigate(`/catalog/search/${title}`)
        }
        if(data === null){
            return (<h2>Meleals with {title} main absent</h2>)
        }         
    }

        
             
   
    return (
        <form onSubmit={handleSubmit} className='title-field'>
            <DebounceInput
                minLength={2}
                debounceTimeout={800}
                
                
                type="search" 
                placeholder='Filter by title'
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
               
            />  
            <p className='reset-title'><i onClick={()=> setTitle('')} className="material-icons black-text">close</i></p>
            <button className='btn'>Submit</button>

        </form>
    );
};

export default FilterByName;