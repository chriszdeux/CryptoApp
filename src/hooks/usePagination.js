import { useEffect, useState } from "react"
import { animations_object } from "../utils/animations/animations_object"

export const usePagination = () => {
  const [currentPosition, setCurrentPosition] = useState(1)
  const [pages, setPages] = useState({
    prev_2: currentPosition - 2,
    prev: currentPosition - 1,
    current: currentPosition,
    next: currentPosition + 1,
    next_2: currentPosition + 2
  })
  const { intro, exit } = animations_object
  const [animation, setAnimation] = useState(intro);
  const handleNextPage = () => {
    setAnimation(exit)
    setTimeout(() => {
      
      setCurrentPosition(currentPosition + 1)
    }, 300);
    setTimeout(() => {
      setAnimation(intro)
    }, 1500);
  }
  
  const handlePrevPage = (  ) => {
    setAnimation(exit)
    setTimeout(() => {
      
      setCurrentPosition(currentPosition - 1)
    }, 300);
    setTimeout(() => {
      setAnimation(intro)
      
    }, 1500);
  }
  
  const handleCurrent = ( value ) => {
    
    setAnimation(exit)
    setTimeout(() => {
      
      setCurrentPosition( value )
    }, 300);
    setTimeout(() => {
      setAnimation(intro)
      
    }, 1500);
  }

  const handleStartPosition = (  ) => {
    
    setAnimation(exit)
    setTimeout(() => {
      
      setCurrentPosition( 1 )
    }, 300);
    setTimeout(() => {
      setAnimation(intro)
      
    }, 1500);
  }


  useEffect(() => {
    setPages({
      prev_2: currentPosition - 2,
      prev: currentPosition - 1,
      current: currentPosition,
      next: currentPosition + 1,
      next_2: currentPosition + 2
    })
  }, [ currentPosition ])


  return { pages, currentPosition, handleNextPage, handlePrevPage, animation, handleCurrent, handleStartPosition }
}