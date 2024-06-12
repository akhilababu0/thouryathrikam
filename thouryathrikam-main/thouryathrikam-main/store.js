import {useContext, createContext, useState} from 'react'

const Data = createContext()

export function useData(){
  return useContext(Data)
}

export default function Store({children}) {

    const [data, setdata] = useState(null)

  return (
    <Data.Provider value={{
      data, setdata
    }}>
        {children}
    </Data.Provider>
  )
}
