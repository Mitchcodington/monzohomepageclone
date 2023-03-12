

const FeedbackCard = ({ content, name, title, img }) => (
  <div>
  <div 
  className="flex 
  justify-between 
  flex-col 
  ml-2 
  px-8 
  py-7 
  rounded-[20px]  
  max-w-[410px] 
  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">

  <div className="flex flex-row">
  <img src={img} alt={name} className="w-[100%] h-[100%] " />
  </div>
  <p 
  className="font-poppins 
  font-medium 
  text-[18px] 
  text-center 
  leading-[32.4px] 
  text-white 
  my-10">{content}</p>
  </div>
  </div>
);


export default FeedbackCard;