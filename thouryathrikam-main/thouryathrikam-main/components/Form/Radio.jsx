

export default function Radio({label, name, register, required, error}){

  const value = 
  name == 'course' ? 
    ['B.Tech','M.Tech']
  : name == 'year' ?
    ['1st','2nd','3rd','4th']
  : name == 'department' ?
    ['CSE','ECE','EEE','MECH']
  :  
    ['Yes','No']

    
  return(
    <div className="flex space-x-2 items-center">
      <div className="flex flex-col items-center space-y-2">
        <p className='text-sm'>
          {label} {required && '*'}
        </p>
          {value.map((item)=>
          <div className='flex justify-start items-center space-x-2' key={item}>
            <input type="radio" name={name} value={item.toLowerCase()} className='outline-none accent-blue-600' 
            {...register(name, { required: required && 'This field is required' })}/>
            <label htmlFor={item.toLowerCase()} className='text-sm'>
              {item}
            </label>
          </div>
          )}
      </div>
    </div>
  )
}
