import { useState } from "react"
// import { useNavigate } from "react-router-dom";

export const useSearchForm = (  ) => {
  const [searchAsset, setSearchAsset] = useState('');
  const [inputValue, setInputValue] = useState('')
  // debugger
  const handleOnChange = ( e ) => {
    setInputValue(e.target.value)
    console.log(e.target.value)
  }
  // debugger

  const handleSubmit =  ( e ) => {
    // debugger
    e.preventDefault();
    if(inputValue.length > 3) {
      const replaceSimbols = /\s/gi
      // await submitForm(e.target);
      setSearchAsset( inputValue.toLowerCase().replace(replaceSimbols, '-') )
      setInputValue('')
      // navigate(`/crypto-asset`, { replace: true })
      // debugger
      // navigate('../asset/', { replace: true })
    }
  }

    return { searchAsset, inputValue, handleSubmit, handleOnChange }
}