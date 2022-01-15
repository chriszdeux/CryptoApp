import { useEffect, useState } from "react"

export const usePagination = () => {
  const [currentPosition, setCurrentPosition] = useState(1)
  const [pages, setPages] = useState({
    prev_2: currentPosition - 2,
    prev: currentPosition - 1,
    current: currentPosition,
    next: currentPosition + 1,
    next_2: currentPosition + 2
  })
  const handleNextPage = () => {
    setCurrentPosition(currentPosition + 1)
    setTimeout(() => {
      
    }, 500);
  }

  const handlePrevPage = () => {
    setCurrentPosition(currentPosition - 1)
    setTimeout(() => {
      
    }, 500);
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


  return { pages, currentPosition, handleNextPage, handlePrevPage }
}