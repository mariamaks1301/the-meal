import React, {useState} from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAreas } from '../../redux/reducers/area';
import { getMealsByArea } from '../../redux/reducers/searchArea';

const FilterArea = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [area, setArea] = useState('all');
    const {data=[], status, error} = useSelector((state)=> state.area);


    useEffect(()=> {
        dispatch(getAllAreas())
    }, [dispatch])

    
        const handleSelect = async(e) => {   
            e.preventDefault(); 
            if(area !== 'all'){
                await dispatch(getMealsByArea(area))   
                navigate(`catalog/area/${area}`)
            } 
            
        }


    

    
        

    return (
        <form onSubmit={handleSelect} className='filter-area'>
  
                <select 
                    className="browser-default filter"
                    value={area}
                    onChange={(e)=>setArea(e.target.value)}
                    >
                    <option className='black-text' value="all" defaultValue>All Areas</option>
                    {
                        status === 'done' ? 
                            data.map(item => (
                                <option 
                                    className='white-text' 
                                    key={item.strArea} 
                                    value={item.strArea}
                                    >{item.strArea}</option>
                            )) : ''
                    }
                            
                </select>
                
                    <button className='filter-area-btn btn'>Submit Area</button>
        </form>

    );
};

export default FilterArea;