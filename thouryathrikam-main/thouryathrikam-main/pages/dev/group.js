import Add from "@/components/Temp/Add";
import Filter from "@/components/Temp/Filter";
import FilterYear from "@/components/Temp/FilterYear";
import Name from "@/components/Temp/Name";
import Result from "@/components/Temp/Result";
import Search from "@/components/Temp/Search";
import { filterByEvent } from "@/util/temp";
import { useEffect, useRef, useState } from "react";
import { supabase } from "supabase";

export default function Group() {
    const [data, setdata] = useState(null)
    const [filterd, setfilterd] = useState(null)
    const [eventData, seteventData] = useState(null)
    const eventRef = useRef();
    const yearRef = useRef();


    useEffect(() => {
      fetchSingle()
    }, [])
    

    async function fetchSingle(){
        const personalDetails = await supabase.from('group_participation').select().order('id', { ascending: true })
        const eventDetails = await supabase.from('group_events').select()
        const finalDetails = matchEvents(personalDetails?.data, eventDetails?.data)
        seteventData(eventDetails?.data)
        setdata(finalDetails)
        setfilterd(finalDetails)
        filterByEvent(setfilterd, finalDetails, eventRef, yearRef)
        
    }

    function matchEvents(personalDetails, eventDetails){
        personalDetails.forEach((student) => 
            eventDetails.forEach(event => {
                if(event.id == student.event_1){
                    student.event_1 = {}
                    student.event_1.name = event.name
                    student.event_1.id = event.id
                    student.event_1.result = student.result_1
                }else if(event.id == student.event_2){
                    student.event_2 = {}
                    student.event_2.name = event.name
                    student.event_2.id = event.id
                    student.event_2.result = student.result_2
                }else if(event.id == student.event_3){
                    student.event_3 = {}
                    student.event_3.name = event.name
                    student.event_3.id = event.id 
                    student.event_3.result = student.result_3
                }
            }))
        return personalDetails
    }


  return (
    <div className="bg-blue-600 ">
        <div className=" flex justify-between items-center border-b-4 border-blue-500 px-10 py-5">
            <div className="flex space-x-4">
                <Filter eventRef={eventRef} yearRef={yearRef} events={eventData} data={data} setfilterd={setfilterd}/>
                <FilterYear eventRef={eventRef} yearRef={yearRef} data={data} setfilterd={setfilterd}/>
            </div>
            <div className="flex space-x-4">
                <Search data={data} setfilterd={setfilterd}/>
                <button className="bg-blue-800 border-2 border-blue-400 rounded-full px-10 py-2 text-white font-bold" onClick={fetchSingle}>
                    Refetch
                </button>
            </div>
        </div>
        <table className="border">
            <thead>
                <tr>
                    <th  rowSpan='2'>Sl. No.</th>
                    <th rowSpan='2'>Name</th>
                    <th rowSpan='2'>Year</th>
                    <th colSpan='2'>Event-1</th>
                    <th colSpan='2'>Event-2</th>
                    <th colSpan='2'>Event-3</th>    
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Result</th>
                    <th>Name</th>
                    <th>Result</th>
                    <th>Name</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                { data && filterd?.map((item, index) =>
                <tr key={item.Email}>
                    <td >{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.year}</td>

                    <td className={`${eventRef?.current?.value == item?.event_1?.id && 'border-4 border-r-0 border-blue-600 '}`}>
                        {item.event_1 !== null ? 
                        (<Name type='group_participation' event={1} student={item?.id} values={eventData} name={item?.event_1?.name} id={item?.event_1?.id}/>) : 
                        (<Add type='group_participation' event={1} student={item.id} values={eventData} />)
                        }</td>
                    <td className={`${eventRef?.current?.value == item?.event_1?.id && 'border-4 border-l-0 border-blue-600 '}`}>{item?.event_1 !== null && <Result type='group_participation' name={item.event_1.result} student={item?.id} event={1}/>}</td>

                    <td className={`${eventRef?.current?.value == item?.event_2?.id && 'border-4 border-r-0 border-blue-600'}`}>
                        {item.event_2 !== null ? 
                        (<Name type='group_participation' event={2} student={item?.id} values={eventData} name={item?.event_2?.name} id={item?.event_2?.id}/>) : 
                        (<Add type='group_participation' event={2} student={item.id} values={eventData} />)
                        }</td>
                    <td className={`${eventRef?.current?.value == item?.event_2?.id && 'border-4 border-l-0 border-blue-600 '}`} >{item?.event_2 !== null && <Result type='group_participation' name={item.event_2.result} student={item?.id} event={2}/>}</td>

                    <td className={`${eventRef?.current?.value == item?.event_3?.id && 'border-4 border-r-0 border-blue-600'}`}>
                        {item.event_3 !== null ? 
                        (<Name type='group_participation' event={3} student={item?.id} values={eventData} name={item?.event_3?.name} id={item?.event_3?.id}/>) : 
                        (<Add type='group_participation' event={3} student={item.id} values={eventData} />)
                        }</td>
                    <td className={`${eventRef?.current?.value == item?.event_3?.id && 'border-4 border-l-0 border-blue-600 '}`}>{item?.event_3 !== null && <Result type='group_participation' name={item.event_3.result} student={item?.id} event={3}/>}</td>

                    
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
