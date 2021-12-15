import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { BackgroundImage } from '../main/BackgroundImage'
import { QuizVideo } from './QuizVideo'
import { QuizLearn } from './QuizLearn';
import { QuizComplete } from './QuizComplete';
export const Quiz = () => {
  return (
    <div className="quiz__layout pd">
      {/* <QuizLearn /> */}
      {/* <BackgroundImage image={ image }/> */}
      <QuizComplete />
    </div>
  )
}
