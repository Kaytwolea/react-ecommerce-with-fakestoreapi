import React, { useState, useEffect } from "react";
import axios from "axios";
import All from "./components/itemslist/all";
import Cartcard from "./components/itemslist/cartcard";
import Login from "./components/login";
import Navbar from "./components/navbar";

function App() {
  const baseUrl = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);
  const [cart, setCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const cartIncrease = (id) => {
    console.log(id);
  };

  const handleCart = () => {
    if (cartCount > 0) {
      setCart(!cart);
    } else {
      console.log("You have an empty cart...");
    }
  };

  // const updateCount = () => {
  //   console.log('Kaytwolea')
  // }

  return (
    <div className=''>
      <div>
        <Navbar setToken={setToken} />
      </div>

      <div>
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
      {token ? (
        <All />
      ) : (
        <Login
          token={token}
          setToken={setToken}
        />
      )}
    </div>
  );
}
export default App;
