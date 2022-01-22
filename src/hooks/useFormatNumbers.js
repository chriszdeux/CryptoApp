import { useEffect, useState } from "react"

export const useFormatNumbers = ( initialState  ) => {
  const [formatNumber, setFormatNumber] = useState(initialState)
  // debugger
  const handleFormatNumber = ( ) => {
    // debugger
    // const myNumber = new Intl.NumberFormat().format(formatNumber)
    // setFormatNumber( myNumber )
    setFormatNumber(new Intl.NumberFormat().format(initialState))
  }

  useEffect(() => {
    handleFormatNumber(initialState)
  }, [ initialState ])
  
  return { formatNumber, handleFormatNumber } 

}
