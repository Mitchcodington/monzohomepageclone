import styles from '../style'


const Hero = () => (
    <section className='mx-4'>
      <div >
         <div className='flex flex-row
        items-center py-[6px] px-4
        bg-discount-gradient round-[10px] mb-2  max-w-[270px]'>
          <p className={`${styles.paragraph} ml-2`}>
          Published February 2023
          </p>

        </div> 
        <div className='flex flex-row
        justify-between items-center w-full'>
          <h6 className='flex-1 font-poppins
          font-semibold ss:text-[20px] text-
          [52px] text-white ss:leading-[100px]
          leading-[75px]'>
            Independent service quality survey results<br/>
           <span className='flex-1 font-poppins
          font-medium ss:text-[18px] text-
          [52px] text-white ss:leading-[100px]
          leading-[75px]'> Personal current accounts</span>
          </h6>
        </div>
  
          <p className={`${styles.paragraph} max-w-[930px] `}>
          As part of a regulatory requirement, independent surveys were conducted 
          to ask customers of the largest personal current account providers in Great 
          Britain and Northern Ireland if they would recommend their provider to friends
           and family. The results represent the view of customers who took part in the survey.
        </p>
      </div>
      

    </section>
  )

export default Hero