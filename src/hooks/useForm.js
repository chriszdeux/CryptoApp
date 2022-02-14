import { useState } from "react"

export const useForm = ( initialState = { } ) => {
  
  const [inputValues, setInputValues] = useState(initialState)
  
  const handleInputChange = ( {target} ) => {
    // debugger
    // console.log(target.value)
    setInputValues({
      ...inputValues,
      [target.name]:target.value
    })
    // setInputValue(e.target.value);
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();

  }

  
  // 154

  return {handleInputChange, inputValues}
}