import React, { useContext } from 'react'
import { LearnCardWrapper } from '../components/cards/LearnCardWrapper'
import { BackgroundImage } from '../components/main/BackgroundImage';
import { Quiz } from '../components/quiz/Quiz';
import { DataContext } from '../context/context';
import { useShowComponent } from '../hooks/ShowComponent';
const image = 'https://firebasestorage.googleapis.com/v0/b/crypto-1bf30.appspot.com/o/earn.svg?alt=media&token=fb89fbf3-0ab5-4981-b290-2ccf3c705830';

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
