import { useRouter } from 'next/router'
import bg from "@/public/bg_small.png"
import Image from 'next/image'


export default function Card({color, heading, route}) {

  const router = useRouter()

  return (
    <div  className=' w-80 h-60 relative font-man bg-zinc-900 backdrop-opacity-60 rounded-3xl' > 
      {/* <Image src={bg.src} width={600} height={440} className='object-cover rounded-3xl '/> */}

      <div className='flex flex-col justify-center items-center space-y-4 absolute inset-x-0 mx-auto top-10'>
        <h3 className='text-white text-center'>{heading}</h3>

        <button className='bg-yellow-500 text-white rounded-2xl w-60 h-10 shadow-lg shadow-gray-800 relative '
          onClick={()=>router.push(`/events`)}>
            View Events
        </button>

        <button className='bg-green-500 text-white rounded-2xl w-60 h-10 shadow-lg shadow-gray-800'
          onClick={()=>router.push(`/events/register/${route}`)}>
          Register Now
        </button>

      </div>
    </div>
  )
}
