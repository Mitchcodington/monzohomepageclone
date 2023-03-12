import styles from "../style";
import { apple, google,logo } from "../assets";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => (
<section className={`${styles.flexCenter} ${styles.paddingY} flex-col mx-4`}>
<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
<div className="flex-[1] flex flex-col justify-start mr-10">
<img src={logo} alt="monzo" className="w-[266px] h-[72.14px] object-contain ml-[-50px]"/>
      
<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
{footerLinks.map((footerlink) => (
<div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
{footerlink.title}
</h4>
<ul className="list-none mt-4">
{footerlink.links.map((link, index) => (
<li
key={link.name}
className={`font-poppins 
font-normal 
text-[16px] 
max-w-[180px] 
leading-[24px] 
text-dimWhite hover:text-orange-300  cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}>
{link.name}
</li>
))}
</ul>
</div>
))}
<div>
<div className="flex flex-row flex-wrap sm:mt-15 mt-15">
<img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
<img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
</div>
<div className="flex flex-row md:mt-0 mt-6">
{socialMedia.map((social, index) => (
          
<img
key={social.id}
src={social.icon}
alt={social.id}
className={`w-[21px] h-[21px] ml-3 mt-10 object-contain cursor-pointer ${
index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
onClick={() => window.open(social.link)}/>
))}
</div>
</div>
</div>
</div>
</div>

<div className="w-full  md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
<h5 className=' font-poppins
font-semibold ss:text-[30px] text-
[52px] text-white ss:leading-[100px]
leading-[75px]'>Existing customers can get help via the app</h5>

<p className="font-poppins w-[70%] font-normal text-left text-[15px] leading-[27px] text-white">
Monzo Bank Limited is a company registered in England and Wales (No. 09446231). Monzo Bank Ltd is authorised by the Prudential Regulation Authority (PRA) and 
regulated by the Financial Conduct Authority and the Prudential Regulation Authority.
Our Financial Services Register number is 730427.</p>
</div>
</section>
);

export default Footer;