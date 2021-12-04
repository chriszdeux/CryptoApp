import { useState } from "react"

export const useShowComponent = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleShowComponent = () => {
    setShowComponent(!showComponent)
  }

  return {
    showComponent, handleShowComponent
  }
}