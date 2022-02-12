import { useEffect, useState } from "react"

export const useRandomAsset = ( data ) => {
  const [newTop10, setNewTop10] = useState([])

  const generateNewData = () => {
    for(let i = 0; i < 10; i++) {
      const random =  Math.floor( Math.random() * data.length ) + 0;
      setNewTop10(c => [...c,  data[random] ])
    }
  }
  useEffect(() => {
    generateNewData()
  }, [ data ])


  return newTop10.filter(item => item !== undefined)
}