import React, { useEffect }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/reducers/categories';
import CategoryItem from '../../components/CategoryItem/CategoryItem';


const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=> {
         dispatch(getAllCategories())
    }, [dispatch])

    const {data, status} = useSelector((state) => state.categories);

    return (
        <>
       
        <div className='list content'>
           {
            status === 'done' ? 
                data.map(item => (                  
                    <CategoryItem key={item.idCategory} item={item}/>
                )) : ''
           }      
        </div>
        </>
        
    );
};

export default Home;