import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreCards from "./storecards";
import Navbar from "../navbar";
import Mobilecard from "./mobilecard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import useSWR from 'swr';

const All = (props) => {
  const baseUrl = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  // const handleCart = () => {
  //     props.handleCartShow();
  // };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(baseUrl)
        .then((res) => {
          console.log(res.data);
          setData(res.data);
        })
        .finally(() => setLoading(false));
    });
  }, []);

  return (
    <div>
      {loading && (
        <div className='mx-auto mt-20 h-96 w-1/2'>
          <img
            src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif'
            alt=' '
            className="mx-auto"
          />
        </div>
      )}
      <div>
        <div className='mx-auto mt-8 mb-8 h-auto w-5/6 lg:w-1/2'>
          <div className='relative h-16 w-full rounded-3xl bg-white'>
            <input
              className='h-full w-[60%] rounded-full border-none text-center text-xl placeholder:text-black'
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Enter item title'
            />
            <button className='my-auto h-[80%] w-[37%] rounded-full bg-red-500 text-xl font-semibold text-white'>
               <i className='fa fa-search pl-4'></i>
            </button>
          </div>
        </div>

        <div className='py-auto mx-auto mt-10 h-96 w-full hidden items-center gap-2 lg:grid lg:w-5/6 lg:grid-cols-2'>
          {data
            .filter((items) => {
              return searchTerm.toLowerCase() === ""
                ? items
                : items.title.toLowerCase().includes(searchTerm)
            })
            .map((items) => (
              <StoreCards
                key={items.id || <Skeleton />}
                src={items.image || <Skeleton />}
                title={items.title || <Skeleton />}
                price={items.price || <Skeleton />}
                id={items.id || <Skeleton />}
                description={items.description || <Skeleton />}
                // handle={handleCart() || <Skeleton />}
              />
            ))}
        </div>
        <div className='grid w-full items-center gap-4 lg:hidden lg:grid-cols-2'>
          {data.filter((items) => {
            return searchTerm.toLowerCase() === '' ? items : items.title.toLowerCase().includes(searchTerm)
          }).map((item) => (
            <Mobilecard
              key={item.id}
              itemimage={item.image}
              itemtitle={item.title}
              itemprice={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default All;
