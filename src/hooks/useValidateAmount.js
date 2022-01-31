import { useState } from "react"

export const useValidateAmount = ( amount ) => {
  const [warningAmount, setWarningAmount] = useState(false)
  const [validateAmount, setValidateAmount] = useState(false)
  // debugger
  const handleWarningAmount = (  ) => {
    if(validateAmount > 0 && validateAmount < 10) {
      return setWarningAmount(false)
    } else if ( validateAmount > amount ) {
      return setWarningAmount(false)
  
    } else if(validateAmount >=10 && validateAmount <=amount){
      return setWarningAmount(true)
    }
  }

  return {
    warningAmount, validateAmount, setValidateAmount, handleWarningAmount
  }
}
