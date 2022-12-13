import React from "react";
import Facebook from "../Form/Facebook";
import Google from "../Form/Google";
import Header from "../Form/Header";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState } from "react";

const ForgetC = () => {
  const [ForgetOtp, setForgetOtp] = useState("");
  // ForgetOtp();
  const navigate=useNavigate();
  const handleApi = async (e) => {
    const token=Cookies.get("ForgetE");
    e.preventDefault();
    axios
      .post(
        "auth/user/forgot/password/verify",
        {
        
          otp: 'ForgetOtp'
        },
        
    
    {
      headers: {
        "Authorization":`Token ${token}`
    },
  }
      )
      .then(function (response) {
        navigate("/NewPass")
     console.log(response);
       localStorage.setItem(response.data);
       Cookies.set("ForgetC",response.data.token);
      })
      .catch(function (error) {
     error();
      });
  };
  return (
    <div className="mx-12 pl-12 pr-12relative flex flex-col justify-center  min-h-screen w-full overflow-hidden	">
      <div className="  px-10  ml-4 ">
        <Header />
        <h1 className="text-s pr-12 mr-12 font-semibold text-center text-black-400	">
          Forget password{" "}
        </h1>
        <form className="mt-6">
          <div className="mb-6 ">
            <label>Enter Code</label>
            <input
                type="email"
                value={ForgetOtp}
                onChange={(e) => setForgetOtp(e.target.value)}
                
                className="block  w-3/4	 px-5 py-2 mt-2 text-orange-400 bg-white border rounded-full focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              
              />
          </div>

          <div className="mt-2">
            <button
              onClick={handleApi}
              className="w-3/4	 px-5 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-400 rounded-full hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
            >
              Send Confirmation Code
            </button>
          </div>
        </form>

        <p className="mt-4 mr-2 ml-2 w-3/4 font-bold px-8 py-2 text-xs font-light text-center text-gray-700">
          {" "}
          Are you new here ?
          <a
            href="/SignUp"
            className="font-medium ml-2 text-orange-400 hover:underline"
          >
            Sign Up
          </a>
        </p>
        <Google />
        <Facebook />
      </div>
    </div>
  );
};

export default ForgetC;
