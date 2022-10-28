import React from "react";

const Navbar = ( {setToken} ) => {

    const logoutHandler = () => {
        setToken('')
        localStorage.clear()
    }
  return (
    <div>
      <div className='mx-auto flex h-16 w-5/6 justify-between border-0 border-b-2 border-gray-700 bg-white shadow-md shadow-red-300'>
        <h1 className='text-left text-xl pt-3 lg:pt-0  lg:text-5xl font-bold text-red-500'>
          Flick Store
        </h1>
        <div className='my-auto hidden md:block'>
          <ul className='flex gap-6 text-base font-semibold text-black'>
            <li className='hover:text-red-500 hover:underline'>
              <a href='#'>Home</a>
            </li>
            <li className='hover:text-red-500 hover:underline'>
              <a href='#'>About us</a>
            </li>
            <li className='hover:text-red-500 hover:underline'>
              <a href='#'>Contact us</a>
            </li>
          </ul>
        </div>
        <div className='mt-4 flex gap-8'>
          <div>
            <span>
              <i className='fa-solid fa-shopping-cart'></i>
            </span>
            <button
              className='h-6 w-6 rounded-full bg-black font-bold text-white'>
              0
            </button>
          </div>
        </div>
        <button onClick={() => logoutHandler()} className='mt-2 h-12 lg:w-40 w-20 rounded-xl bg-red-500 text-sm lg:text-xl font-semibold text-white'>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
