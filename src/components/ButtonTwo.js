import React from "react";

const ButtonTwo = ({ styles }) => (
<button type="button" 
className={` py-4 
px-6 
mt-[30px] 
font-poppins 
font-bold 
w-[100%] 
max-w-[300px] 
text-[17px] 
text-primary 
bg-blue-gradient 
rounded-[10px] 
outline-none ${styles}`}>
Open a Monzo account
</button>
);

export default ButtonTwo;