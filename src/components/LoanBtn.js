import React from "react";

const LoanBtn = ({ styles }) => (
  <button type="button" 
  className={`py-4 px-6 mt-[30px] 
  font-poppins 
  font-bold 
  w-[100%] max-w-[300px] 
  text-[17px] text-primary 
  bg-blue-gradient rounded-[10px] 
  outline-none ${styles}`}>Borrowing with Monzo</button>
);

export default LoanBtn;