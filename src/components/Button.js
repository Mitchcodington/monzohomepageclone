import React from "react";

const Button = ({ styles }) => (
<button 
type="button" 
className={`py-4 
px-6 
mt-[30px] 
font-poppins 
font-bold 
hover:bg-orange-300
w-[90%] 
text-[17px] 
text-primary 
bg-blue-gradient 
rounded-[10px] 
outline-none ${styles}`}>
Open a Monzo account
</button>
);

export default Button;