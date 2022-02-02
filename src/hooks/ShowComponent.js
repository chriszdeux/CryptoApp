import { useState } from "react"
import { animations_object } from "../utils/animations/animations_object";

export const useShowComponent = ( initialState = false) => {
  const [showComponent, setShowComponent] = useState(initialState);
  const [showComponent2, setShowComponent2] = useState(initialState);
  const { intro_left, intro_right, exit_left, exit_right } = animations_object
  const [animation, setAnimation] = useState( intro_left );
  const [animation2, setAnimation2] = useState( intro_right );
  const handleShowComponent = () => {

    ( showComponent )
    ? setAnimation(exit_left) : setAnimation(intro_left)
    // debugger
    // console.log(showComponent)
    setTimeout(() => {
      setShowComponent(!showComponent)
      setAnimation2(exit_right)
      setTimeout(() => {
        setShowComponent2(false)
        
      }, 300);
    }, 500);

  }
  
  const handleShowComponent2 = () => {
    ( showComponent2 )
    ? setAnimation2(exit_right) : setAnimation2(intro_right)
    // debugger
    // console.log(showComponent)
    setTimeout(() => {
      setShowComponent2(!showComponent2)
      setAnimation(exit_left)
      setTimeout(() => {
        setShowComponent(false)
      }, 300);
    }, 500);
  }

  return {
    showComponent, handleShowComponent,
    showComponent2, handleShowComponent2, animation, animation2
  }
}