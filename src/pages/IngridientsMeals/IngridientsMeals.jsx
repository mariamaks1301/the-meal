import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';


const IngridientsMeals = () => {

    const {ingridient} = useParams();
    const {data, status} = useSelector((state)=> state.ingridient);



    return (
        <div className='content'>
        <h2 className='title'>{ingridient} reciepts</h2>
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

export default IngridientsMeals;