import { useRef, useState, useEffect } from "react"
// import { useEffect } from "react/cjs/react.development"
import { fetchAsset } from "../../fetch-data/fetchAsset"

export const useFetchAsset = ( id ) => {
  const isMounted = useRef(true)
  const [dataAssetInfo, setDataAssetInfo] = useState({
    loading: true,
    data: [],
    error: null
  })
  // debugger
  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
      
      fetchAsset(id)
      .then(item => {
        // debugger
        if(item.isAxiosError) {
          // debugger
          setDataAssetInfo({
            loading: false,
            data: [],
            error: true
          })
        }
        else if( isMounted.current ) {
          // debugger
          setDataAssetInfo({
            loading: false,
            data: item,
            error: null
          })
        }
      })
      
    }, [ id ])

    // debugger
    return dataAssetInfo
}