import styles from '../style'
import {flex} from '../assets';
import FlexBtn from './FlexBtn';

const Flex = () => (
<section 
id='home' 
className={`flex
md:flex-row 
flex-col 
${styles.paddingY}`}>

<div className={`flex-1 ${styles.flexStart} }
flex-col xl:px-0 sm:px-16 px-6`}>
       
<div className='flex flex-row
justify-between items-center w-full'>
<h3 className='flex-1 font-poppins
font-bold w-full ss: text-[32px] text-white ss:leading-[50px]
leading-[35px]'>Pay later for pretty much anything</h3>
         
</div>
<p className={`${styles.paragraph} max-w-[530px] `}>
Use Monzo Flex to spread the cost of pretty much anything. If eligible 
it’s interest free over 3 instalments. Or there’s 6 or 12 instalments 
at 24% APR representative (variable) if you want more time.<br/>

<FlexBtn/><br/>

Monzo Flex is credit for eligible 18+ year olds. Ts&Cs apply.
Carefully consider the cost of using credit for purchases.
Missed payments may negatively impact your credit score and you may 
lose the interest-free rate on existing plans. Representative 
example: 24% APR representative (variable). £1200 credit limit. 24% yearly interest (variable).</p>
        
</div>
<div className={`flex-1 flex ${styles.flexCenter}
md:my-0 my-10 relative`}><img src={flex} alt="spend"className='w-[70%] h-[100%] relative z-[5]'/>

<div className='absolute z[0] w-[40%] h-[35%] top-0 pink__gradient'/>
<div className='absolute z[0] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'/>
<div className='absolute z[0] w-[50%] h-[50%] right-20 blue-20 blue__gradient'/>
</div>
<div className={`ss:hidden ${styles.flexCenter}`}>
</div>
</section>
  )

export default Flex