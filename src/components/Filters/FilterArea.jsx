import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAreas } from '../../redux/reducers/area';

const FilterArea = () => {

    const dispatch = useDispatch();
    const {data, status, error} = useSelector((state)=> state.area)

    useEffect(()=> {
        dispatch(getAllAreas())
    }, [dispatch])
        

    return (
        <>
                
                
                <select className="browser-default filter">
                    <option className='black-text' value="" disabled selected>All Areas</option>
                    {
                        status === 'done' ? 
                            data.map(item => (
                                <option className='white-text' key={item.strArea} value={item.strArea}>{item.strArea}</option>
                            )) : ''
                    }
                            
                </select>

        </>

    );
};

export default FilterArea;