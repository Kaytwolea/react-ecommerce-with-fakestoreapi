import React from 'react';
import axios from 'axios';

const Cartcard = (props) => {




    return (
        <div className='h-24 bg-white mt-4 flex py-auto gap-3 w-full'>
            <img src={props.img} alt=' ' className='h-full w-12' />
            <div>
                <h5 className='text-sm text-left text-black'>{props.title}</h5>
                <p className='text-sm text-gray-700'>${props.price}</p>
            </div>
            <div>
                <span><i className='fa fa-trash'></i></span>
            </div>
        </div>
    );
}

export default Cartcard;
