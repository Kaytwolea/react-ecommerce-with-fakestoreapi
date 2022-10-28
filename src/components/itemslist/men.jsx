import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StoreCards from './storecards';

const Men = () => {

    const menUrl = 'https://fakestoreapi.com/products/category/men\'s clothing'
    const [menData, setMenData] = useState([])


    useEffect(() => {
        axios.get(menUrl)
        .then(res =>{
            console.log(res.data)
            setMenData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div className="mt-10 w-5/6 mx-auto h-96 flex flex-wrap gap-6 justify-center items-center py-auto">
               {
                    menData.map(menItems => <StoreCards
                        key={menItems.id}
                        src={menItems.image}
                        title={menItems.title}
                        price={menItems.price}
                        
                        />)
                }
        </div>
    );
}

export default Men;
