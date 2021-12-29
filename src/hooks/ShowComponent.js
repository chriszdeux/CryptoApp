import { useState } from "react"

export const useShowComponent = ( initialState = false) => {
  const [showComponent, setShowComponent] = useState(initialState);
  const [showComponent2, setShowComponent2] = useState(initialState);
  // debugger
  const handleShowComponent = () => {
    setShowComponent(!showComponent)
    setShowComponent2(false)
  }
  
  const handleShowComponent2 = () => {
    setShowComponent2(!showComponent2)
    setShowComponent(false)
  }

  return {
    showComponent, handleShowComponent,
    showComponent2, handleShowComponent2
  }
}