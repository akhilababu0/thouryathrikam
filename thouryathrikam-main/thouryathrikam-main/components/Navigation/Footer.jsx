import Link from 'next/link'

import { AiFillHome, AiOutlineTeam } from "react-icons/ai"
import { TbCertificate } from "react-icons/tb";


export default function Footer() {

  
  return (
    <div className='fixed w-full h-16 grid grid-cols-3 justify-items-center place-items-center text-gray-300 
    -bottom-0.5 z-50 bg-gradient-to-t from-black to-transparent '>
        <Link href='/events'><a>
          <div className='flex flex-col justify-center items-center text-xs'>
            <AiOutlineTeam className='menu-icon text-white'/>
            <p>Events</p>
          </div>
        </a></Link>

        <div className="pb-4">
        <Link href='/'><a>
          <div className='flex flex-col justify-center items-center text-xs rounded-full w-14 h-14 
            bg-gradient-to-tr from-green-600 via-green-400 to-green-200 shadow-lg shadow-green-500'>
            <AiFillHome className='menu-icon text-white text-3xl'/>
          </div>
        </a></Link>
        </div>
        

        <Link href='/certificate'><a>
          <div className='flex flex-col justify-center items-center text-xs' >
            <TbCertificate className='menu-icon text-white '/>
            <p>Certificate</p>
          </div>
        </a></Link>
      </div>
  )
}
