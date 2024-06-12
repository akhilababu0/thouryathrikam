import { useEffect, useRef, useState } from "react";
import { useDownloadExcel } from 'react-export-table-to-excel';

import Table from '@/components/General/Table';
import { filterByEvent, filterByPrize } from '@/util/helper';
import {  fetchAllSingleData } from '@/util/supabase.helper';
import { useRouter } from 'next/router';
import { useData } from 'store';
import TableX from "@/components/General/TableX";
import Link from "next/link";

export default function SingleAll() {

  const router = useRouter()

  const {data, setdata} = useData()


  const [filtered, setfiltered] = useState([])
  const [eventFiltered, seteventFiltered] = useState([])
  const [single, setsingle] = useState([])
  const [loading, setloading] = useState(false)

  const prizeRef = useRef()
  const eventRef = useRef()

  const tableRef = useRef(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: `${eventRef?.current?.value.split(" ").join("_")}_single_thouryathrikam`,
        sheet: eventRef?.current?.value
    })


  useEffect(() => {
	  fetchAllSingleData(setdata, setsingle, setloading)
  }, [])




  function handleSingleEventChange(e){
    eventRef.current.value = e.target.value
	  filterByEvent(data, eventRef.current.value, prizeRef.current.value, seteventFiltered, setfiltered)
  }





  function handlePrizeChange(e){
    prizeRef.current.value = e.target.value
	  filterByPrize(eventFiltered, eventRef.current.value, prizeRef.current.value, setfiltered)
  }
  

  return (
    <div className='flex flex-col max-w-screen'>

      <div className='w-ull flex justify-between px-4 py-2'>
        <div className="flex space-x-4">
          <h3>Single Events Student Details</h3>
          <Link href='group'>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'> 
                Group Events 
              </button>
          </Link>
        </div>
        <div className='flex space-x-8'>
          <select className='bg-zinc-900 text-white px-4 py-2 rounded-lg' defaultValue='select' onChange={handleSingleEventChange} ref={eventRef}>
            <option value={'select'} >Select Single Event</option>
            {single?.map((item)=>
              <option value={item?.name} key={item?.id}>{item?.name}</option>
            )}
          </select>
          <select className='bg-zinc-900 text-white px-4 py-2 rounded-lg' defaultValue='all' onChange={handlePrizeChange} ref={prizeRef}>
            <option value='all'>All</option>
            <option value='participation'>Participation</option>
            <option value='prize'>Prize</option>
          </select>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg' onClick={onDownload}> 
            Export 
          </button>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg' onClick={()=> router.push('/certificate/all/demo')}>
            Show Demo 
          </button>
        </div>
      </div>

      {loading && <p className="text-5xl text-center animate-pulse py-10">Loading...</p>}

      <Table data={filtered} event={eventRef?.current?.value}/>
      <TableX ref={tableRef} data={filtered} event={eventRef?.current?.value} />

    </div>
  )
}

