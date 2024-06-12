import { useState } from "react"
import title from "../../public/title.png"


export default function Header() {

  const [openMenu, setopenMenu] = useState(false)
  
  const handleClick = () => {
    setopenMenu(!openMenu)
  }
  return (
    <div className="absolute w-screen h-16 bg-transparent flex justify-between z-50
      items-center px-3">

      {/* logo */}
      <div className="flex justify-center items-center text-white w-full">
        <img src={title.src} alt="logo" className=" h-16"/>
      </div>
      {/* menu icon  */}
      {/* <div>
        <BiMenuAltLeft className="menu-icon" onClick={handleClick}/>
      </div>

      { openMenu && (
        <div className="bg-purple-600">
          
        </div>
      )} */}
    </div>
  )
}
