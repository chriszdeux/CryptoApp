import { useState } from "react"

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

  return {
    nft, handleNftData
  }
}