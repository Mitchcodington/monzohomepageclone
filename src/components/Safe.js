import styles from '../style'
import {safe} from '../assets';


const Safe = () => (
  <section 
  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
  mx-2 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
  <div>
      <h6 className={`text-white ${styles.heading2} ss:text-[32px]`}>Keep Your Money Safe</h6>
      <p className={`${styles.paragraph} max-w-[670px] mt-5`}>
      Cutting-edge technology, FSCS protection and 24/7 support if you need us 
      urgently. Just a few of the reasons over 6 million customers trust us to
      keep their money safe.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <div className={`flex-1 flex ${styles.flexCenter}
      md:my-0 my-10 relative`}>
        <img src={safe} alt="spend"
        className='w-[70%] h-[70%] relative z-[5]'/>

        <div className='absolute z[0] w-[40%] h-[35%] top-0
        pink__gradient'/>
        <div className='absolute z[0] w-[80%] h-[80%] rounded-full
        bottom-40 white__gradient'/>
        <div className='absolute z[0] w-[50%] h-[50%] right-20
        blue-20 blue__gradient'/>
      </div>
    </div>
  </section>
);

export default Safe;