import styles from '../style'
import { premium} from '../assets';

import PremiumBtn from './PremiumBtn';

const Premium = () => (
    <section id='home' className={`flex bg-lightyellow   rounded-[20px] box-shadow mx-2
    mt-[30px]  md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} }
      flex-col xl:px-0 sm:px-16 px-6`}>
       
        <div className='flex flex-row 
        justify-between items-center w-full'>
          <h4 className='flex-1 font-poppins
          font-bold w-full ss: text-[32px] text-#091f2a ss:leading-[50px]
          leading-[35px]'> Online banking that makes a statement</h4>
         </div>
        
          <p className={`${styles.paragraph} max-w-[530px] text-primary`}>
          Turn heads with our white metal card, made from steel. Enjoy peace of
           mind with extensive phone and travel insurance, interest and much more.
        </p>
        <PremiumBtn/>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}
      md:my-0 my-10 relative`}>
        <img src={premium} alt="spend"
        className='w-[90%] h-[100%] relative z-[5]'/>

        <div className='absolute z[0] w-[40%] h-[35%] top-0
        pink__gradient'/>
        <div className='absolute z[0] w-[80%] h-[80%] rounded-full
        bottom-40 white__gradient'/>
        <div className='absolute z[0] w-[50%] h-[50%] right-20
        blue-20 blue__gradient'/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        
      </div>

    </section>
  )

export default Premium