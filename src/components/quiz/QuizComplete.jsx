import React from 'react'
import kraken from '../../temp/kraken.png';
import image from '../../utils/vector/winner.svg';
export const QuizComplete = () => {
  return (
    <div className="quiz__completed">
      <h1>Well done!</h1>
      <h2>You earned <span>$5</span> in crypto</h2>

      <figure className="quiz__asset mg--v--3">
        <img src={ kraken } alt="" />
        <img src={ kraken } alt="" />
      </figure>
      <button className="btn btn--primary">Continue</button>
      <figure className="winner">
        <img src={ image } alt="" />
      </figure>
    </div>
  )
}
