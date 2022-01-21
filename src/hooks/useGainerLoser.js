import { useEffect, useState } from "react"
import { icons } from "../utils/icons/icons_object"

export const useGainerLoser = ( data ) => {
  const [isGainer, setIsGainer] = useState({
    gainer: '',
    gainer_icon: null
  })
  const [convertNumber, setConvertNumber] = useState(0);
  const handleIsGainer = ( _data ) => {
    if(_data && _data > 0) {
      // debugger
      setIsGainer({
        gainer: 'gainer--color',
        gainer_icon: icons.up_icon
      })
    } else {
      
      setIsGainer({
        gainer: 'loser--color',
        gainer_icon: icons.down_icon
      })
    }

  }

  useEffect(() => {
    setConvertNumber(Number(data))
  }, [ data ])

  useEffect(() => {
    handleIsGainer(convertNumber)
  }, [ convertNumber ])

  // debugger
  return isGainer
}