import { useRouter } from "next/router"


export default function Events({heading, subheading, data, route}) {

  const router = useRouter()

  return (
    <div className="flex flex-col space-y-6 justify-center items-center px-8 
    text-violet-200 bg-zinc-900 rounded-3xl mx-2 py-6 " style={{
      backdropFilter: 'opacity(0.6)'
    }}>

      <div className="flex flex-col space-y-2 justify-center items-center ">
        <h2 className="font-man">{heading}</h2>
        {subheading && <h3>({subheading})</h3> }
      </div>
      <ul className="grid grid-cols-2 gap-x-10 gap-y-2 list-disc w-full text-sm ">
        {data?.map((item)=>
          <li key={item}>{item}</li>
        )}
      </ul>
    </div>
  )
}
