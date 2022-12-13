import React from "react";
// import Email from "../Form/Email";
import Facebook from "../Form/Facebook";
import Google from "../Form/Google";
import Header from "../Form/Header";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { FaEnvelope} from 'react-icons/fa';
import { useState } from "react";
import Cookies from "universal-cookie";

const ForgetE = () => {
  const [email, setEmail] = useState("");
  // email();
  const navigate=useNavigate();
  const handleApi = async (e) => {
    const token=Cookies.get("SignIn");

    e.preventDefault();
    axios.post('auth/user/forgot/password', {
      email: 'email'},
      
      {
        headers: {
            "Authorization":`Token ${token}`   
         }

        
  
  

    })
  
  
    .then(function (response) {

 navigate("/ForgetC")
 console.log (response);
 localStorage.setItem(response.data);
 Cookies.set("ForgetE",response.data.token);
    })
    .catch(function (error) {
 console.log( error);
    })
  }
  return (
    <div className="mx-12 pl-12 pr-12relative flex flex-col justify-center  min-h-screen w-full overflow-hidden	">
      <div className="  px-10  ml-4 ">
        <Header />
        <h1 className="text-s px-0 pr-12 mr-12 mt-4 font-semibold text-center text-black-400	">
          FORGET PASSWORD
        </h1>
        <form className="mt-6">
        
        <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email Address
              </label>
              <div className="flex ">
             
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
                className="block  w-3/4	 px-5 py-2 mt-2 text-orange-400 bg-white border rounded-full focus:border-orange-400 focus:ring-orange-300 focus:outline-none focus:ring focus:ring-opacity-40"
              
              />
            <span className="absolute text-md right-14 mr-14 mt-5 px-14	"> 
            
               <FaEnvelope  /> 
            
              </span>
            
            
             
              </div>
          <div className="mt-5">
            <button
            onClick={handleApi}
             className="w-3/4	 px-5 py-2 tracking-wide text-white transition-colors duration-200 transform bg-orange-400 rounded-full hover:bg-orange-400 focus:outline-none focus:bg-orange-400">
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

export default ForgetE;
