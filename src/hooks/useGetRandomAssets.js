import { useEffect, useState } from "react"

export const useGetRandomAssets = ( data ) => {
  const [randomAssets, setRandomAssets] = useState([])
  // const [temp, setTemp] = useState([])
  // let temp = []

  const getRandomAssets = () => {
    setRandomAssets([]);
    if(data.length > 0) {
      for(let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * data.length) + 0;
        setRandomAssets(c => [...c, data[random]])
      }
    }
  }

  useEffect(() => {
    getRandomAssets()
  }, [data])
  // debugger

  return {randomAssets, getRandomAssets};
}