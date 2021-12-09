import { useState } from "react"

export const useWidthNumber = ( number ) => {


  const [inputWidth, setInputWidth] = useState({
    width: '',
    font: '',
    top: ''
  })

  const handleWidth = ( number ) => {
    
    if(number.length > 3 && number.length < 6) return setInputWidth({
      width: '20rem',
      font: '8rem'
    })
    if(number.length > 6 && number.length < 9) return setInputWidth({
      width: '25rem',
      font: '6rem'
    })
    if(number.length > 9 && number.length < 12) return setInputWidth({
      width: '30rem',
      font: '4rem',
      top: '30%'
    })
    if(number.length > 12 && number.length < 15) return setInputWidth({
      width: '35rem',
      font: '3rem'
    })  
  }

  // debugger
  return {
    inputWidth, handleWidth
  }
}
