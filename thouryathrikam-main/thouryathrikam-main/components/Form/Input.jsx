import Error from "./Error";

export default function Input({type, label, htmlFor, error, required, register}){

  return(
    <div className="flex flex-col space-y-2">
      <div className="flex flex-col justify-center space-y-2">
        <label>{label}</label>
        <input type={type} placeholder={label} {...register(htmlFor, { 
            required: required && 'This field is required',
          })}
          className='input'/>
      </div>
      {error && <Error error={error} /> }
      </div>
  )
}