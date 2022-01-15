import { useEffect, useRef, useState } from "react"
import { fetchNews } from "../../fetch-data/fetchNews";

export const useFetchNews = ( id ) => {
  const isMounted = useRef(true)
  const [dataNews, setDataNews] = useState({
    loading: true,
    data: [],
    error: null
  })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [  ]);

  useEffect(() => {
    fetchNews( id )
      .then(item => {
        if(!item) {
          setDataNews({
            loading: false,
            data: null,
            error: true
          })
        }
        else if(isMounted.current) {
          setDataNews({
            loading: false, 
            data: item,
            error: null
          })
        }
      })
  }, [ id ])

  return dataNews
}