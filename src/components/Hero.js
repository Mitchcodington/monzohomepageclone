import {  bill, best } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const Hero = () => (
  <section  className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[90%] h-[100%] relative z-[5] " />

     
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
     
    </div>

    <div className={layout.sectionInfo} >
      <h4 className={` tracking-wide text-darkRed ${styles.heading2 }`}>
      Banking made easy
      </h4>
      <p className={`${styles.paragraph} max-w-[550px] tracking-wide mt-5`}>
      Spend, save and manage your money, all in one place.
      Open a full UK bank account from your phone, for free.
      </p>
      <Button/>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6 mb-9">
        <img src={best} alt="award" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer " />
        
      </div>
    </div>
  </section>
);

export default Hero;