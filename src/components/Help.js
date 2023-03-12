import styles from '../style'
import { apple, google } from "../assets";


const Help = () => (
<section id='Help'
className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
mx-2 text-center flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
<div>
<h6 className={`text-white ${styles.heading2}`}>Help us build the kind of bank you want to use</h6>

<p className={`${styles.paragraph} max-w-[670px] mt-5 font-bold`}>
Download the Monzo app on iOS or Android and join more than 6 million 
people who've changed the way they bank.</p>
</div>

<div className="flex flex-row flex-wrap sm:mt-10 mt-6">
<img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
<img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
</div>
</section>
);

export default Help;