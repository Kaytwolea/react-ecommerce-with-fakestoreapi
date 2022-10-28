import React from "react";

function StoreCards(props) {
  return (
    <div className='lg:relative grid lg:h-80 h-auto w-full lg:grid-cols-2 gap-4 rounded-2xl border-2 border-gray-500 bg-white'>
      <div className='h-72 w-full'>
        <img
          alt=''
          src={props.src}
          className='h-full w-full'
        />
      </div>
      <div className='pt-2'>
        <p className='pt-2 text-left text-xl font-semibold leading-tight text-black'>
          {props.title}
        </p>
        <p className='pt-1 text-left text-sm font-normal text-gray-700'>
          <span className='text-xl font-bold'>$</span>
          {props.price}
        </p>
        <p className='pt-1 text-left text-[8px] font-bold text-black'>
          {props.description}
        </p>
        <button
          onClick={() => props.handle(props.id)}
          className='lg:absolute right-0 bottom-0 mb-2 h-8 w-72 rounded-3xl bg-teal-700 font-bold text-white  shadow-md shadow-yellow-200'>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default StoreCards;
