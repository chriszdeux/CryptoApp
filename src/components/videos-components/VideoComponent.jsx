import React from 'react'

export const VideoComponent = () => {
  const a = 'https://youtu.be/PVqsCXh-V5Y"';

  const b = a.replace('youtu.be/', 'youtube.com/embed/')
  const c = b.replace('"', '');
  // console.log(c)
  return (
    <div>
      <iframe className="video__frame"
        src={ c }>
      </iframe>
      
    </div>
  )
}
