import React from 'react'
import { LearnCardWrapper } from '../components/cards/LearnCardWrapper'
import { BackgroundImage } from '../components/main/BackgroundImage';
import { Quiz } from '../components/quiz/Quiz';
import { useShowComponent } from '../hooks/ShowComponent';
import image from '../utils/vector/earn.svg';

export const LearnAndEarnPage = () => {
  const { handleShowComponent, showComponent } = useShowComponent()
  return (
    <>
    <section className="earn__page">
      <h2 className="mg--l">Learn and Earn</h2>
      <LearnCardWrapper handleShowComponent={ handleShowComponent }/>
      <BackgroundImage image={ image }/>
    </section>
    {
      showComponent && <Quiz handleShowComponent={ handleShowComponent }/>
    }
    
    </>
  )
}
