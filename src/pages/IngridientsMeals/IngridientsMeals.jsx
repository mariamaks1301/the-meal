import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import { getMealsByIngridient } from '../../redux/reducers/ingridient';

const IngridientsMeals = () => {

    const {ingridient} = useParams();
    const dispatch = useDispatch();
    const {data, status} = useSelector((state)=> state.ingridient);



     useEffect(()=>{
         dispatch(getMealsByIngridient(ingridient))
     },[ingridient])


    return (
        <div className='list'>
            {
                status === 'done' ? 
                    data.map(item => (
                        <Card key={item.id} item={item}/>
                    )): ''
            }
            
        </div>
    );
};

export default IngridientsMeals;