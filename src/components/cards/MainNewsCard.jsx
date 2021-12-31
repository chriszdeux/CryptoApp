import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'

export const MainNewsCard = () => {
  const { intro_left } = animations_object
  return (
    <div className={`main__news__card  ${intro_left}`}>
      <h2>title crytpo news <a href="/">read more</a> </h2>
    </div>
  )
}
