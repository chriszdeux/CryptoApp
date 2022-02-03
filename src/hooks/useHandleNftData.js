import { useEffect, useState } from "react"
import { scrollTop } from "../utils/functions/scrollTop"

export const useHandleNftData = () => {
  const [nft, setNft] = useState({
    data: [],
    position: Number,
  })

  const handleNftData = (data, position) => {
    setNft({
      data: data,
      position: position
    })
  }

  useEffect(() => {
    scrollTop()
  }, [ nft.position ])
  return {
    nft, handleNftData
  }
}