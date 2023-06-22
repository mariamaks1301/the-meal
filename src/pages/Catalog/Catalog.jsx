import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';

const Catalog = () => {

    const dispatch = useDispatch();
    const {data, status, error} = useSelector(state => state.searchTitle);

    if(status === 'done'){
        return (
            <div className='list'>
                {
                    data.map((item) => {
                        <Card key = {item.idMeal} item = {item}/>
                    })
                }
                
            </div>
        );

    }


   
};

export default Catalog;