import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import Card from '../../components/Card';


const Catalog = () => {

    const {title} = useParams();
    const dispatch = useDispatch();

    const {data, status} = useSelector((state) => state.searchTitle);
   


    if(status=== 'done' && data === null){
        return <h2>Meleals with {title} main absent</h2>
    }
    

        return (
            <div className='content'>
            <h2 className='title'>{title} reciepts</h2>
             <div className='list'>
                {
                    status === 'done' ? 
                        data.map(item => ( 
                            <Card key={item.idMeal} item={item}/>
                        ))
                    : ''
                }
             </div> 
            
        </div>
        );
  
};

export default Catalog;