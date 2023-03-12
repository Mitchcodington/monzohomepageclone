
import {britain, ireland} from '../assets';
import styles from "../style";



const Compare = () => (
<section 
id="clients" 
className={`${styles.paddingY} 
${styles.flexCenter} 
flex-col 
relative 
ml-6 `}>

<div 
className="absolute 
z-[0] 
w-[60%] 
h-[60%] -right-[50%] 
rounded-full blue__gradient bottom-40" />

<div 
className={`flex
md:flex-row 
flex-col`}>
<div>
<h5 
className='flex-1 
font-poppins
font-semibold 
w-full 
text-[30px]  
text-white'>
Britain</h5>
<img src={britain} alt={britain} className="w-[95%] h-[80%] mb-5" />

<button 
class="bg-transparent 
hover:bg-orange-700 
border 
border-orange-700 
text-white 
font-bold 
py-2 
px-4 rounded">View full results for Great Britain</button>
</div>

<div>
<h5 
className='flex-1 
font-poppins
font-semibold 
w-full 
text-[30px]  
text-white'>Ireland</h5>
<img src={ireland} alt={ireland} className="w-[95%] h-[80%] mb-5 " />
<button 
class="bg-transparent 
hover:bg-orange-700 
border 
border-orange-700 
text-white 
font-bold 
py-2 
px-4 rounded">View full results for Northern Ireland</button>
</div>
</div>
</section>
);

export default Compare;