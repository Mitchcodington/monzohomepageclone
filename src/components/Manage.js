import styles from '../style'
import {manage} from '../assets';


const Manage = () => (
    <section id='home' className={`flex   bg-lightpink rounded-[20px] box-shadow mx-2
    md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} }
      flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row
        justify-between items-center w-full'>
          <h4 className='flex-1 font-poppins
          font-bold ss: text-[32px] text-#091f2a ss:leading-[100px]
          leading-[75px]'>Manage</h4>
        </div>
          <p className={`${styles.paragraph} max-w-[530px] text-primary`}>
          Pay Direct Debits through Monzo and we’ll tell you if they’re higher
           for the upcoming month. So no nasty surprises.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}
      md:my-0 my-10 relative`}>
        <img src={manage} alt="spend"
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

export default Manage