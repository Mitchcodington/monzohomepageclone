
import {switc, protect,trust,direct,apple,google} from '../assets';
import styles from '../style';

const Join = () =>  (
    <section className={`bg-join  absolute text-center w-full  
    ${styles.paddingY} ${styles.paddingX} font-bold mt-[-30px]  `}>
      
        <div  className={`flex-1
        flex justify-center items-center flex-row m-3 `}>
         <img className='w-[10%] h-[100%]' src={switc} alt="logo"/> 
         <img className='w-[10%] h-[100%]' src={direct} alt="logo"/> 
         <img className='w-[4%] h-[100%]' src={protect} alt="logo"/> 
         
        </div>
        <div  className={`flex-1
        flex justify-center items-center flex-row m-3 `}>
         <img className='w-[70%] h-[100%]' src={trust} alt="logo"/> 
        </div>
        <h1 className='text-center font-poppins
          font-bold ss:text-[30px] text-
          [52px] text-#091f2a ss:leading-[100px]
          leading-[75px]'>Join more than 6 million people with a Monzo bank account</h1>
           <div className="flex justify-center flex-row flex-wrap sm:mt-15 mt-15">
        <img src={apple} alt="google_play" 
        className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" 
        className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
      
    </section>
  )

export default Join