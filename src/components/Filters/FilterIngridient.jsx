import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';
import { useDispatch, useSelector } from 'react-redux';
import { getMealsByIngridient } from '../../redux/reducers/ingridient';

const FilterIngridient = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ingridient, setIngridient] = useState('');
    const {data=[], status} = useSelector((state)=> state.ingridient);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(getMealsByIngridient(ingridient));
        if(data === null){
            return <h2>Meleals with {ingridient} main absent</h2>
        }         
        if(data.length === 1){
             return navigate(`/recipe/${data[0].idMeal}`)
        }
        if(data.length > 1){
            return navigate(`/catalog/ingridient/${ingridient}`)
        }
        
    }

    return (
        <form onSubmit={handleSubmit} className='ingridient-field'>
            <DebounceInput
                minLength={2}
                debounceTimeout={800}
       
                type="search" 
                placeholder='Filter by main ingridient'
                value={ingridient}
                onChange={(e)=> setIngridient(e.target.value)}
               
            />
            <p className='reset-ingridient'><i onClick={()=> setIngridient('')} className="material-icons black-text">close</i></p>
            <button className='btn'>Submit</button>
        </form>
    );
};

export default FilterIngridient;