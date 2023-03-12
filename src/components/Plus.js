import styles from '../style'
import { plus} from '../assets';
import PlusBtn from './PlusBtn';

const Plus = () => (
    <section id='home' className={`flex bg-greenpop rounded-[20px] box-shadow mx-2 mt-[30px]
    md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} }
      flex-col xl:px-0 sm:px-16 px-6`}>
       
        <div className='flex flex-row
        justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins text-#091f2a
          font-bold w-full ss: text-[32px]  ss:leading-[50px]
          leading-[35px]'>
           Put money in your hands

          </h1>
         
        </div>
        
          <p className={`${styles.paragraph} max-w-[530px] text-primary`}>
          Full financial visibility, with your other bank accounts and credit
           cards all in one place. Get interest on your money, personalised budgeting 
           and much more.
        </p>
        <PlusBtn/>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}
      md:my-0 my-10 relative`}>
        <img src={plus} alt="spend"
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

export default Plus