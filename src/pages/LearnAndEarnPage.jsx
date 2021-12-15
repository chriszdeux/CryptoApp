import React from 'react'
import { LearnCardWrapper } from '../components/cards/LearnCardWrapper'
import { BackgroundImage } from '../components/main/BackgroundImage';
import image from '../utils/vector/earn.svg';

export const LearnAndEarnPage = () => {
  return (
    <section className="earn__page">
      <h2 className="mg--l">Learn and Earn</h2>
      <LearnCardWrapper />
      <LearnCardWrapper />
      <LearnCardWrapper />
      <BackgroundImage image={ image }/>
    </section>
  )
}
