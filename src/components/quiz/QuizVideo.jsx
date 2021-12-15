import React, { useEffect, useState } from 'react'

export const QuizVideo = () => {
  const [play, setPlay] = useState(false)

  const handlePlay = () => {
    
  }

  return (
    <div className="quiz__video" >
      <iframe className="video--frame" src="https://youtube.com/embed/CuEmVUV4JjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture, duration" allowfullscreen></iframe>
      
    </div>

  )
}
