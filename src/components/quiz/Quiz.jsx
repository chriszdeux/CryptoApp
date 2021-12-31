import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { BackgroundImage } from '../main/BackgroundImage'
import { QuizVideo } from './QuizVideo'
import { QuizLearn } from './QuizLearn';
import { QuizComplete } from './QuizComplete';
import { useShowComponent } from '../../hooks/ShowComponent';
import { animations_object } from '../../utils/animations/animations_object';
export const Quiz = ({ handleShowComponent }) => {
  const { handleShowComponent2, showComponent2 } = useShowComponent();
  // debugger
  const { intro } = animations_object;
  return (
    <div className={`quiz__layout pd ${ intro }`}>
      <QuizLearn values={ {handleShowComponent, handleShowComponent2} }/>
      {
        showComponent2 && <QuizComplete handleShowComponent={ handleShowComponent }/>
      }
      {/* <BackgroundImage image={ image }/> */}
      
    </div>
  )
}
