import { useRouter } from 'next/router'

import bg1 from "../public/tribal_bg_1.webp"
import title from "../public/title.png"
import date from "../public/date.webp"

import Layout from '@/components/Layout/Layout'


//top-128  top-150  top-170 top-190
export default function Home() {

  const router = useRouter()

  return (
    <div className="flex flex-col  bg-zinc-900 relative">


      <div className='relative'>
        <img src={bg1.src} alt="bg" className="object-cover fixed -top-48 z-0 brightness-50 contrast-125 " />
        <img src={title.src} alt="bg" className="object-contain fixed top-40 inset-x-0 mx-auto 
          brightness-125 z-10 " />
        <img src={date.src} alt="bg" className="object-conatin fixed top-64 inset-x-0 mx-auto 
          z-10 w-32 h-12 brightness-150 scale-75" />
      </div>


      <button className='bg-yellow-500 rounded-full w-72 h-14 text-white font-man uppercase text-xl
       z-50 fixed top-100 inset-x-0 mx-auto shadow-lg shadow-gray-800'
        onClick={()=>router.push(`/events`)}>
        View Events
      </button>

      <button className='bg-green-500 rounded-full w-72 h-14 text-white font-man uppercase text-xl 
        z-50 fixed top-120 inset-x-0 mx-auto shadow-lg shadow-gray-800'
        onClick={()=>router.push(`/certificate`)}>
          Certificate
      </button>


    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout home={true}>
      {page}
    </Layout>
  )
}



