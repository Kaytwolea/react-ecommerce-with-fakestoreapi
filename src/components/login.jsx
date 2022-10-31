import React, { useState } from "react";
import axios from "axios";

const Login = ({ token, setToken }) => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    setError("");
    setUserName("");
    setPassWord("");

    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: userName,
        password: passWord,
      },
    })
      .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
        localStorage.setItem("userToken", res.data.token);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data);
      });
  };

  return (
    <div>
      <div className='h- mx-auto mt-4 grid w-3/4 lg:grid-cols-2'>
        <div className='hidden lg:block'>
          <img
            src='./images/login.jpg'
            alt=' '
            className='h-[600px] w-full rounded-3xl'
          />
        </div>
        <div className='my-auto mx-auto h-auto w-full rounded-3xl border-4 border-red-500 lg:mx-0 lg:h-96 lg:w-5/6 lg:rounded-r-3xl lg:border-r-4 lg:border-t-4 lg:border-b-4'>
          <h2 className='pt-6 text-center text-5xl font-bold text-black'>
            Login
          </h2>
          <div className='mt-6 flex flex-col items-center justify-center gap-4'>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className='px-auto mx-auto h-14 w-5/6 rounded-full border-2 border-red-500 text-center text-xl font-semibold placeholder:text-center'
              type='text'
              placeholder='Enter your username'
            />
            <input
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              className='px-auto mx-auto h-14 w-5/6 rounded-full border-2 border-red-500 text-center text-xl font-semibold placeholder:text-center'
              type='text'
              placeholder='Enter your password'
            />
          </div>
          {error && (
            <div>
              <h5 className=' pt-4 text-center text-xl font-bold text-red-600'>
                {error}
              </h5>
            </div>
          )}
          <div className='mt-8 mb-2 flex items-center justify-center'>
            <button
              onClick={handleLogin}
              className='mx-auto h-14 w-5/6 rounded-full bg-red-500 text-xl font-bold text-white'>
              Log In
            </button>
          </div>
        </div>
      </div>
      <p className="text-base text-center text-black">
        Login details: 
        Username: johnd
        password: m38rmF$
      </p>
    </div>
  );
};

export default Login;
