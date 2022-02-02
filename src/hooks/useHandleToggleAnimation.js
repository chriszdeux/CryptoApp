import { useState } from "react"
import { animations_object } from "../utils/animations/animations_object";

export const useHandleToggleAnimation = () => {
  const { intro, exit } = animations_object
  const [animation, setAnimation] = useState(intro);

  const handleAnimation = ( toggle ) => {
    setAnimation(exit)
    setTimeout(() => {
      toggle()
    }, 1000);
  }

  return { animation, handleAnimation }
}