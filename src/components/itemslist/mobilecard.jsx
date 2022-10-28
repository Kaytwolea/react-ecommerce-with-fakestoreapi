import React from "react";

const Mobilecard = (props) => {
  return (
    <div className='mt-4'>
      <div className='mx-auto h-80 w-5/6  rounded-3xl border-2 border-black bg-white'>
        <div className='h-1/2 w-full'>
          <img
            src={props.itemimage}
            alt=' '
            className='h-full w-full rounded-2xl'
          />
        </div>
        <div className='mt-2'>
          <h4 className='text-center text-base text-black'>
            {props.itemtitle}
          </h4>
          <p className='text-center text-sm text-gray-900'>
            $ {props.itemprice}
          </p>
        </div>
        <div className='mx-auto w-3/4 mt-auto'>
          <button className='h-12 w-full bg-teal-500 font-semibold text-white'>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mobilecard;
