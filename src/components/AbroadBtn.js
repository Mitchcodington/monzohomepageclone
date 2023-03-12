import React from "react";

const AbroadBtn = ({ styles }) => (
  <button type="button" 
  className={`py-4 
  px-6 
  mt-[30px] 
  font-poppins 
  font-bold 
  w-[100%] 
  max-w-[200px] 
  text-[17px] 
  text-primary 
  bg-blue-gradient 
  rounded-[10px] 
  outline-none ${styles}`}>Travelling Monzo</button>
);

export default AbroadBtn;