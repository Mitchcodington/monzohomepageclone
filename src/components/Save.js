import styles from '../style'
import { saving} from '../assets';


const Save = () => (
    <section id='Savings' className={`flex bg-iceCold rounded-[20px] box-shadow mx-2
    md:flex-row flex-col  ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} }
      flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row
        justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins
          font-bold ss: text-[32px] text-#091f2a ss:leading-[100px]
          leading-[75px]'>
            Save
          </h1>
        </div>
          <p className={`${styles.paragraph} text-primary max-w-[530px]  `}>
          Earn up to 3.55% (AER/Gross fixed) interest on your savings. That’s on a 12-month 
          Fixed Pot with a £500 minimum deposit to open. (Fixed means the money will be
           locked away for 12 months while you earn interest on it.)<br/>
          We offer Easy Access Savings too, which let you get your money the next working day!
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}
      md:my-0 my-10 relative`}>
        <img src={saving} alt="robot"
        className='w-[80%] h-[100%] relative z-[5]'/>

        <div className='absolute z[0] w-[40%] h-[35%] top-0
        pink__gradient'/>
        <div className='absolute z[0] w-[80%] h-[80%] rounded-full
        bottom-40 white__gradient'/>
        <div className='absolute z[0] w-[50%] h-[50%] right-20
        blue-20 blue__gradient'/>
      </div>
    </section>
  )

export default Save