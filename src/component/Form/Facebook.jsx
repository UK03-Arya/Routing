import React from 'react'
import {  FaFacebookF } from 'react-icons/fa';

const Facebook = () => {
  return (
    <div className="mt-3">
    <div>
    <span className="absolute text-sm mr-12 mt-4 px-6 	">
    <FaFacebookF />
    </span>
 

    
    <button className=" border-2 w-3/4	 px-5 py-2  tracking-wide text-black transition-colors duration-200 transform bg-white-400 rounded-full hover:bg-orange-400 focus:outline-none focus:bg-orange-400">
        Signup with facebook
      </button>
    </div>
    
    </div>
  )
}

export default Facebook
