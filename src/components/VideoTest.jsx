import React from 'react'

export const VideoTest = () => {
  return (
    <video width="320" height="240" controls duration>
      <source src="https://firebasestorage.googleapis.com/v0/b/huddle-c7911.appspot.com/o/180405_FinancialCharts_11.mp4?alt=media&token=93a94fea-77ce-49bf-922a-19e2ec61d227" type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg" /> */}
    Your browser does not support the video tag.
    </video>
  )
}
