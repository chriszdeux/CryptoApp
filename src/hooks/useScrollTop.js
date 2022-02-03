import { useEffect } from "react";
import { useState } from "react/cjs/react.development"

export const useScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(null);

  useEffect(() => {
    setScrollTop(
      window.scrollTo({top: 0, behavior: 'smooth'})
    )
  }, [  ])


  return scrollTop
}