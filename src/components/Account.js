import { feedback } from "../constant";
import styles from "../style";
import ButtonTwo from "./ButtonTwo";
import FeedbackCard from "./FeedbackCard";

const Account = () => (
<section 
id="Accounts" 
className={`${styles.paddingY} 
${styles.flexCenter}
mt-[50px] 
flex-col 
relative `}>
<div className="mt-[350px] 
w-[60%] 
h-[60%] -right-[50%] 
rounded-full 
blue__gradient bottom-40" />
<div 
className="flex 
flex-wrap  
md:justify-start 
justify-center 
w-full 
feedback-container 
relative 
z-[1]">
{feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
</div>
<div className="flex flex-col items-center">
<ButtonTwo/>
</div>
</section>
);

export default Account;