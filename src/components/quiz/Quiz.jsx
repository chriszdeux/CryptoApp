import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { BackgroundImage } from '../main/BackgroundImage'
import { QuizVideo } from './QuizVideo'
import { QuizLearn } from './QuizLearn';
import { QuizComplete } from './QuizComplete';
import { useShowComponent } from '../../hooks/ShowComponent';
export const Quiz = () => {
  const { handleShowComponent, showComponent } = useShowComponent()
  return (
    <div className="quiz__layout pd">
      <QuizLearn handleShowComponent={ handleShowComponent }/>
      {
        showComponent && <QuizComplete handleShowComponent={ handleShowComponent }/>
      }
      {/* <BackgroundImage image={ image }/> */}
      
    </div>
  )
}
