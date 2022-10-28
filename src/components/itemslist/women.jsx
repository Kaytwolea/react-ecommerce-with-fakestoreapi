import React, {useEffect, useState} from 'react';
import axios from 'axios';
import StoreCards from './storecards';

const Women = () => {


    const womenUrl = 'https://fakestoreapi.com/products/category/women\'s clothing'
    const [womenData, setWomenData] = useState([])

    useEffect(() => {
        axios.get(womenUrl)
        .then(res => {
            setWomenData(res.data)
        })
    })

    return (
        <div>
            <div className="mt-10 w-5/6 mx-auto h-96 flex flex-wrap gap-6 justify-center items-center py-auto">
               {
                    womenData.map(womenItems => <StoreCards
                        key={womenItems.id}
                        src={womenItems.image}
                        title={womenItems.title}
                        price={womenItems.price}
                        
                        />)
                }
         </div>
        </div>
    );
}

export default Women;
