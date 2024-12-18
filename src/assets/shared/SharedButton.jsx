import React from "react";
import { Children } from "react";

 
const SharedButton=( {
    children,
    onClick,
    type = "button",
    className = "",
    disabled = false,
   
    
})=>{
    return(

        <button
        
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`bg-scooter   py-2 px-4 disabled:bg-gray-400 disabled:cursor-not-allowed 
             ${className || " text-white  font-ubuntu-light  rounded-sm" } `}
        >

            {children}
        </button>

    );
};

export default SharedButton
  