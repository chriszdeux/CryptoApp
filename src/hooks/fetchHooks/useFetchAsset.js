import { useRef, useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { fetchAsset } from "../../fetch-data/fetchAsset"

export const useFetchAsset = ( id ) => {
  const isMounted = useRef(true)
  const [dataAsset, setDataAsset] = useState({
    loading: true,
    data: [],
    error: null
  })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    fetchAsset(id)
      .then(item => {
        // debugger
        if(!item) {
          setDataAsset({
            loading: false,
            data: [],
            error: true
          })
        }
        else if( isMounted.current ) {
          setDataAsset({
            loading: false,
            data: item,
            error: null
          })
        }
      })    
  }, [ id ])

  return dataAsset
}