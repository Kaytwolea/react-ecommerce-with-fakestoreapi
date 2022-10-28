import React from 'react';

const Junks = () => {
    return (
        <div>
                    <div className='mx-auto mt-6 mb-8 grid h-auto w-3/4 gap-3 lg:h-20 lg:grid-cols-4 lg:gap-9'>
          <button
            onClick={() => handleCategory(1)}
            className={
              currentPage === 1
                ? "my-4 h-12 rounded-3xl border-4 border-teal-500 bg-red-600 text-xl font-semibold text-white shadow-md shadow-gray-300"
                : "my-4 h-12 rounded-3xl bg-red-600 text-xl font-semibold text-white shadow-md shadow-gray-300"
            }>
            All
          </button>
          <button
            onClick={() => handleCategory(2)}
            className={
              currentPage === 2
                ? "my-4 h-12 rounded-3xl border-4 border-teal-500 bg-red-600 text-xl font-semibold text-white shadow-md shadow-gray-300"
                : "my-4 h-12 rounded-3xl bg-red-600 text-xl font-semibold text-white shadow-md shadow-gray-300"
            }>
            Men's Clothing
          </button>
          <button
            onClick={() => handleCategory(3)}
            className={
              currentPage === 3
                ? "my-4 h-12 rounded-3xl border-4 border-teal-500 bg-red-600 text-xl font-semibold text-white shadow-md shadow-gray-300"
                : "my-4 h-12 rounded-3xl bg-red-600 text-xl font-semibold text-white shadow-md shadow-gray-300"
            }>
            Women's Clothing
          </button>
          <button
            onClick={() => handleCategory(4)}
            className={
              currentPage === 4
                ? "my-4 h-12 rounded-3xl border-4 border-teal-500 bg-red-600 text-xl font-semibold text-white shadow-md shadow-gray-300"
                : "my-4 h-12 rounded-3xl bg-red-600 text-xl font-semibold text-white shadow-md shadow-gray-300"
            }>
            Jewelery
          </button>
        </div>
        <div
          className={
            cart
              ? "mx-auto mt-6 flex h-96 flex-col gap-8 bg-gray-200 md:float-right md:mt-0 md:w-56 md:shadow-xl md:shadow-gray-300"
              : "hidden"
          }>
          {/* {data.map((content) => (
            <Cartcard
              key={content.id}
              img={content.image}
              title={content.title}
              price={content.price}
            />
          ))} */}
          {/* <div>
            <Login />
          </div> */}
        </div>
        </div>
    );
}

export default Junks;
