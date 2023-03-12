import styles from '../style'
import { abroad} from '../assets';
import AbroadBtn from './AbroadBtn';

const Abroad = () => (
    <section id='home' 
    className={
    `flex bg-popin   
    rounded-[20px] 
    box-shadow mx-2
    mt-[30px]
    md:flex-row 
    flex-col 
    ${styles.paddingY}`}>

    <div 
    className={
    `flex-1 
    ${styles.flexStart} }
    flex-col 
    xl:px-0 
    sm:px-16 
    px-6`}>
       
    <div 
    className='flex flex-row
    justify-between 
    items-center 
    w-full'>

    <h3 
    className='flex-1 
    font-poppins
    font-bold 
    w-full 
    ss:text-[30px] 
    text-[32px] 
    mb-9
    text-#091f2a 
    ss:leading-[50px]
    leading-[35px]'>Using Monzo Abroad</h3>
    </div>
        
    <p 
    className={`${styles.paragraph} 
    max-w-[530px] 
    text-primary `}>
    Use Monzo anywhere in the world that accepts Mastercard. We don’t 
    charge any fees for spending abroad, and we don’t mark up the exchange
    rate – unlike most other banks.</p>
    <AbroadBtn/>
    </div>

    <div 
    className={`flex-1 flex ${styles.flexCenter}
    md:my-0 
    my-10 relative`}>
    <img src={abroad} alt="spend"
    className='w-[70%] 
    h-[100%] 
    relative 
    z-[5]'/>

    <div 
    className='absolute 
    z[0] 
    w-[40%] 
    h-[35%] 
    top-0
    pink__gradient'/>
    <div 
    className='absolute 
    z[0] 
    w-[80%] 
    h-[80%] 
    rounded-full
    bottom-40 
    white__gradient'/>
    <div className='absolute 
    z[0] 
    w-[50%] 
    h-[50%] 
    right-20
    blue-20 
    blue__gradient'/>
    </div>
    </section>
  )

export default Abroad