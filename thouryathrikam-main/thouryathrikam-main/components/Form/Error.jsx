import { AiOutlineInfoCircle } from "react-icons/ai";

export default function Error({error}) {
  return (
    <div className="flex space-x-0.5 items-center">
      <AiOutlineInfoCircle className="text-red-600"/>
      <p className="text-red-600" >{error.message}</p>
    </div>
  )
}
