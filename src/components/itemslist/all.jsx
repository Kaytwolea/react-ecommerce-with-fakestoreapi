import React, { useEffect, useState } from "react";
import axios from "axios";
import StoreCards from "./storecards";
import Navbar from "../navbar";
import Mobilecard from "./mobilecard";
// import useSWR from 'swr';

const All = (props) => {
  const baseUrl = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleCart = (id) => {
    {
      props.handleCartShow(id);
    }
  };

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
    }, []);
  }, 4000);

  //     const fetcher = (...args) => fetch(...args).then((response) => response.json())
  //   const {data, error} = useSWR(baseUrl, fetcher);

  //   console.log(error)
  //   console.log(data)
  //     if (!data) [
  //         <p>loading</p>
  //     ]

  return (
    <div>
      {loading && (
        <div className='mx-auto mt-20 h-96 w-1/2'>
          <img
            src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif'
            alt=' '
          />
        </div>
      )}

      <div className='py-auto mx-auto mt-10 lg:grid h-96 lg:w-5/6 w-full hidden lg:grid-cols-2 items-center gap-2'>
        {data.map((items) => (
          <StoreCards
            key={items.id}
            src={items.image}
            title={items.title}
            price={items.price}
            id={items.id}
            description={items.description}
            handle={handleCart}
          />
        ))}
      </div>
      <div className="grid lg:grid-cols-2 w-full items-center gap-4">
          {data.map((item) =>(
            <Mobilecard
              itemimage={item.image}
              itemtitle={item.title}
              itemprice={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default All;
