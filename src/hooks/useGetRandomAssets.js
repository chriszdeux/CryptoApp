import { useEffect, useState } from "react"

export const useGetRandomAssets = ( data ) => {
  const [randomAssets, setRandomAssets] = useState([])
  const [singleAsset, setSingleAsset] = useState([])
  // const [temp, setTemp] = useState([])
  // let temp = []

  const handleRandomAssets = () => {
    setRandomAssets([]);
    if(data.length > 0) {
      for(let i = 0; i < 3; i++) {
        const random = Math.floor(Math.random() * data.length) + 0;
        setRandomAssets(c => [...c, data[random]])
      }
    }
  }
  
  const handleSingleAsset = () => {
    // const random = Math.floor(Math.random () * data.length) + 0;
    if(data.length > 0) {
      for(let i = 0; i < 5; i++) {
        const random = Math.floor(Math.random() * data.length) + 0;
        setSingleAsset(c => [...c, data[random]])
      }
    }
    // setSingleAsset(data[random])
  }

  useEffect(() => {
    handleRandomAssets();
    handleSingleAsset()
  }, [data])
  // debugger

  return {randomAssets, singleAsset, handleRandomAssets, handleSingleAsset };
}