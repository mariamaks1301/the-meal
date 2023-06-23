import React from 'react';
import { useParams } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import Card from '../../components/Card';



const CategoryMeals = () => {

    const {name} = useParams();
    const {data, status} = useSelector((state) => state.category);
   

    return (
        <div className='content '>
            <h2 className=' title'>{name} reciepts</h2>
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

export default CategoryMeals;