import React, {useState, useEffect} from 'react'
import axios from 'axios';
import StoreCards from './storecards';

const Jewelery = () => {
    const JeweleryUrl = 'https://fakestoreapi.com/products/category/jewelery'
    const [jeweleryData, setJeweleryData] = useState([])

    useEffect( ( )=> {
        axios.get(JeweleryUrl)
        .then(res => {
            console.log(res.data)
            setJeweleryData(res.data)
        })
    }, [])


    return (
        <div>
            <div className="mt-10 w-5/6 mx-auto h-96 flex flex-wrap gap-6 justify-center items-center py-auto">
               {
                    jeweleryData.map(jeweleryItems => <StoreCards
                        key={jeweleryItems.id}
                        src={jeweleryItems.image}
                        title={jeweleryItems.title}
                        price={jeweleryItems.price}
                        
                        />)
                }
            </div>
        </div>
    );
}
 
export default Jewelery;