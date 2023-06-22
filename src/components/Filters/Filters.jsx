import React from 'react';
import FilterArea from './FilterArea';
import FilterByName from './FilterByName';
import FilterIngridient from './FilterIngridient';
import RandomMeal from './RandomMeal';

const Filters = () => {
    return (
        <div className='filters'>
        <h2 className='title'>
            dish selection</h2>
        <div className='filters__row '>
            <FilterArea/>
            <FilterByName/>
            <FilterIngridient/>
            <RandomMeal/>
        </div>
        </div>
    );
};

export default Filters;