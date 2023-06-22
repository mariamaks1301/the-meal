import React from 'react';
import { useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../../redux/reducers/category';


const CategoryItem = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div className="card" id={item.idCategory}>
            <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={item.strCategoryThumb}/>
            </div>
            <div className="card-content">
            <span className="card-title activator white-text text-darken-4">{item.strCategory}<i className="material-icons right">more_horiz</i></span>     
            <button onClick={()=> dispatch(getFilteredCategory(item.strCategory))} className='btn btn__small'><Link to={`/catalog/${item.strCategory}`} className='card-link'>Recipe</Link></button>
            </div>
            <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{item.strCategory}<i className="material-icons right #424242 grey darken-3">clear</i></span>
            <p className='black-text'>{item.strCategoryDescription}</p>
            </div>
        </div>
    );
};

export default CategoryItem;