import styles from '../style'
import { spend} from '../assets';


const Spend = () => (
    <section id='Features' className={`flex   z-[5]
    md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} }
      flex-col xl:px-0 sm:px-16 px-6`}>
       
        <div className='flex flex-row
        justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins
          font-bold ss: text-[32px] text-white ss:leading-[100px]
          leading-[75px]'>
            Spend
          </h1>
        </div>
        
          <p className={`${styles.paragraph} max-w-[530px] `}>
          Get instant notifications the second you pay. Set budgets for things 
          like groceries and going out, and get warnings if you’re spending too 
          fast (if you want them).
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}
      md:my-0 my-10 relative`}>
        <img src={spend} alt="spend"
        className='w-[70%] h-[100%] relative z-[5]'/>

        <div className='absolute z[0] w-[40%] h-[35%] top-0
        pink__gradient'/>
        <div className='absolute z[0] w-[80%] h-[80%] rounded-full
        bottom-40 white__gradient'/>
        <div className='absolute z[0] w-[50%] h-[50%] right-20
        blue-20 blue__gradient'/>
      </div>
    </section>
  )

export default Spend