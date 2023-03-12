import {useState} from 'react'
import {close, logo, menu} from '../assets';
import {navLinks} from '../constant';


const Navbar = () => {
  const [active, setActive] = useState("Account");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=' bg-primary w-[100%] font-poppins flex  justify-start top-0 z-50 px-3 py-3 items-center navbar shadow-lg  md:flex  justify-start  items-center fixed '>
      <img className='w-[150px] h-[60px] ' src={logo} alt=''/>
      <p className={`font-poppins
          font-bold
          border-l-2
          cursor-pointer
          hover:text-orange-300
          text-[16px]}
          text-lime-500
          px-3
          ml-3
          mr-3`}>Personal</p>
      

      <ul className='list-none sm:flex  hidden justify-end 
      items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins font-bold cursor-pointer text-[16px] hover:text-orange-300 ${
            active === nav.title ? "text-white" : "text-dimWhite"
          } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          onClick={() => setActive(nav.title)}
        >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
        <button 
        className="bg-blue-gradient 
        rounded-[10px] 
        outline-none hover:bg-blue-700 
        text-primary font-bold py-2 px-4 rounded ml-3">Sign Up</button>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
        src={toggle ? close : menu} 
        alt="menu"
        className='w-[28px] h-[28px]
        object-contain'
        onClick={() => setToggle((prev) => !prev)}
         />

         <div
         className={`${toggle ? 'flex' :
         'hidden'} p-6 bg-black-gradient
         absolute top-20 right-0 mx-4
         my-2 min-w-[140px] rounded-xl
         sidebar`}
         >
          <ul className='list-none flex-column justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins
          font-normal
          cursor-pointer
          text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'}
          text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>

          </li>
        ))}
      </ul>
         </div>

      </div>
    </nav>
  )
}
export default Navbar