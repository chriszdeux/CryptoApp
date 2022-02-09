import { useEffect, useState } from "react"

export const useFormatNumbers = ( initialState  ) => {
  const [formatNumber, setFormatNumber] = useState(0)
  // debugger


  useEffect(() => {
    setFormatNumber( new Intl.NumberFormat().format(initialState) )
  }, [ initialState ])
  

  // debugger
  return formatNumber

}
