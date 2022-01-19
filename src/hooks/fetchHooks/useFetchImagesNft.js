import { useEffect, useRef, useState } from "react"
import { fetchImagesNft } from "../../fetch-data/fetchImagesNft";

export const useFetchImagesNft = () => {
  const isMounted = useRef(true);
  const [dataNft, setDataNft] = useState({
    loading: true, 
    error: false, 
    data: []
  })


  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    fetchImagesNft()
    .then(item => {
      if(item === undefined) {
        setDataNft({
          loading: false, 
          error: true,
          data: []
        })
      } else if (isMounted.current) {
        setDataNft({
          loading: false, 
          error: false,
          data: item
        })
      }
    })
  }, [  ])

  return dataNft
}