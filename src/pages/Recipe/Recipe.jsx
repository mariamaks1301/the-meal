import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipeById } from '../../redux/reducers/recipe';

const Recipe = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
     console.log(id)

    useEffect(()=>{
        dispatch(getRecipeById(id))
    }, [id])


    const {recipe = [], status, error } = useSelector((state) => state.recipe)



    return (
        <div className='recipe__block'>
            <div onClick={()=> navigate(-1)} className='black-text recipe__back'>
                <i class="material-icons #4caf50 green">arrow_back</i> Go Back
            </div>
            {
                status === 'done' ?
                 recipe.map(item => (
                    <div key={item.idMeal} className='recipe'>
                    <span className='recipe__title content'>{item.strCategory} / Cuisine {item.strArea} / {item.strMeal}</span>
                    <div className='recipe__top '>
                        <div className='row content'>
                            <img className='recipe__img' src={item.strMealThumb} alt=""/>
                            <div className='recipe__right'>
                                <p className='recipe__subtitle'>Ingridients:</p>

                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient1}</p>
                                    <p className='recipe__measure'>{item.strMeasure1}</p>
                                </div>
                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient2}</p>
                                    <p className='recipe__measure'>{item.strMeasure2}</p>
                                </div>
                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient3}</p>
                                    <p className='recipe__measure'>{item.strMeasure3}</p>
                                </div>
                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient4}</p>
                                    <p className='recipe__measure'>{item.strMeasure4}</p>
                                </div>
                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient5}</p>
                                    <p className='recipe__measure'>{item.strMeasure5}</p>
                                </div>
                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient6}</p>
                                    <p className='recipe__measure'>{item.strMeasure6}</p>
                                </div>
                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient7}</p>
                                    <p className='recipe__measure'>{item.strMeasure7}</p>
                                </div>
                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient8}</p>
                                    <p className='recipe__measure'>{item.strMeasure8}</p>
                                </div>
                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient9}</p>
                                    <p className='recipe__measure'>{item.strMeasure9}</p>
                                </div>
                                <div className="row recipe__row">
                                    <p className='recipe__ingr'>{item.strIngredient10}</p>
                                    <p className='recipe__measure'>{item.strMeasure10}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='recipe__desc'>
                        <p className='recipe__subtitle black-text'>Instraction:</p>
                        <p className='black-text'>{item.strInstructions}</p>
                    </div>
                    
                    <p>{item.strArea}</p>
                    <p>{item.strTags}</p>
                    </div>

                 )): ''
            }
        </div>
    );
};

export default Recipe;