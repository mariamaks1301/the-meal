import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {DebounceInput} from 'react-debounce-input';
import { useDispatch, useSelector } from 'react-redux';
import { getMealsByIngridient } from '../../redux/reducers/ingridient';

const FilterIngridient = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ingridient, setIngridient] = useState('');

    const handleSubmit = async (e) => {
        if(e.key === 'Enter'){
            await dispatch(getMealsByIngridient(ingridient));
            console.log(e.key)
            navigate(`/catalog/ingridient/${ingridient}`)
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <DebounceInput
                minLength={2}
                debounceTimeout={300}
       
                type="search" 
                placeholder='Filter by main ingridient'
                value={ingridient}
                onChange={(e)=> setIngridient(e.target.value)}
               
            />
        </form>
    );
};

export default FilterIngridient;