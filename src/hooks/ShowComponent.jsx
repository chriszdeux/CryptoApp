import { useState } from "react"

export const useShowComponent = ( initialState = false) => {
  const [showComponent, setShowComponent] = useState(initialState);

  const handleShowComponent = () => {
    setShowComponent(!showComponent)
  }

  return {
    showComponent, handleShowComponent
  }
}