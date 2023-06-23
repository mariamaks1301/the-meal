import React  from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import Card from '../../components/Card';


const AreaCatalog = () => {

    const {area} = useParams();
    const dispatch = useDispatch();


    const {data, status, error} = useSelector((state)=> state.searchArea);

   
    if(status === 'done'){
        console.log(data)
    }
    

        return (
            <div className='content'>
            <h2 className='title'>{area} reciepts</h2>
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

export default AreaCatalog;