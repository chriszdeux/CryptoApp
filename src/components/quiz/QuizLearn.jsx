import React, { useContext, useEffect } from 'react'
import { icons } from '../../utils/icons/icons_object'
import { QuizVideo } from './QuizVideo'
import image from '../../utils/vector/learn.svg';
import { DataContext } from '../../context/context';
import { useState } from 'react/cjs/react.development';

export const QuizLearn = ({values}) => {
  const { dataEarning: {
    title, description, video, duration, approved_at, 
  } } = useContext(DataContext)
  // debugger
  const [getReward, setGetReward] = useState(false);
  const [counter, setCounter] = useState(10);
  const { handleShowComponent2,  handleShowComponent} = values

  useEffect(() => {
    const counter_interval = setInterval(() => {
      if(counter === 0) {
        setGetReward(true)
      } else {
        setCounter(counter - 1)
      }
    }, 1000);
    return () => {
      clearInterval(counter_interval)
    }
  })
  // debugger
  return (
    <>
     <div className="quiz--icon" onClick={ handleShowComponent }>
        { icons.back_icon }
      </div>
      <div className="quiz__content">
        <QuizVideo video={ video }/>/
        <h2 className="">{ title }</h2>
        <p className="mg--b--3">{ description }</p>

        {
          getReward
            ? 
            <button className="btn btn--primary" onClick={ handleShowComponent2 }>Reward</button>
            :
            <button className="btn btn--primary" >{ counter }s to skip</button>
        }
      </div>

      <figure>
        <img src={ image } alt="" />
      </figure> 
    </>
  )
}
