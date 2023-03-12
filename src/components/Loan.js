import styles from '../style'
import {loan} from '../assets';
import LoanBtn from './LoanBtn';

const Loan = () => (
    <section id='Borrowing' className={`flex bg-prime   rounded-[20px] box-shadow mx-2
    mt-[30px]
    md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} }
      flex-col xl:px-0 sm:px-16 px-6`}>
       
        <div className='flex flex-row 
        justify-between items-center w-full'>
          <h3 className='flex-1 font-poppins
          font-bold w-full ss: text-[32px] text-#091f2a ss:leading-[50px]
          leading-[35px]'>Borrowing: Loans and Overdrafts</h3>
         
        </div>
        
          <p className={`${styles.paragraph} max-w-[530px] text-primary `}>
          We offer overdrafts up to £2,000 and loans up to £25,000.
           Checking if you're eligible won't leave a mark on your credit 
           score, there are no lengthy forms to fill in, and no charges
            for paying us back early.<br/>
           
           <LoanBtn/><br/>

        Our representative APR is 10.5% for loans more than £10,000, up to £25,000. 
       For loans up to £10,000 it’s 23.9%. How does our overdraft compare? Our 
       representative APR is 39.0%. You can use the APR to compare the cost of
       different credit products.</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter}
      md:my-0 my-10 relative`}>
        <img src={loan} alt="spend"
        className='w-[70%] h-[100%] relative z-[5]'/>

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

export default Loan