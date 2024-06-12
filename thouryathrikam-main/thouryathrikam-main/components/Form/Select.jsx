import Error from "./Error";

export default function Select({label, name, values, register, required, error}){


  return(
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col items-center space-x-8">
        <div className='flex flex-col justify-center space-y-2' >
          <label>{label}</label>
          <select  className='input' {...register(name, { 
            required: required
            })} >
            { values?.map((item,index)=> 
                <option value={item} key={item} >
                  {item}
                </option>
            )}
          </select>
        </div>
      </div>
      {error && error?.message?.length > 0 ? <Error error={error} /> : <div className='w-5 h-5 '/>}        
    </div>
  )
}