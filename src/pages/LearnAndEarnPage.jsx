import React from 'react'
import { LearnCardWrapper } from '../components/cards/LearnCardWrapper'
import { BackgroundImage } from '../components/main/BackgroundImage';
import { Quiz } from '../components/quiz/Quiz';
import { useShowComponent } from '../hooks/ShowComponent';

export const LearnAndEarnPage = () => {

  const { handleShowComponent, showComponent } = useShowComponent()
  return (
    <>
    <section className="earn__page">
      <h2 className="mg--l">Learn and Earn</h2>
      <LearnCardWrapper handleShowComponent={ handleShowComponent }/>
    </section>
    {
      showComponent && <Quiz handleShowComponent={ handleShowComponent }/>
    }
    
    </>
  )
}
