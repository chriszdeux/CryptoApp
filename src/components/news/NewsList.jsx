import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'
import { NewsCard } from '../cards/NewsCard'

export const NewsList = ({ handleShowComponent }) => {
  const { intro } = animations_object;
  return (
    <div className={`news__grid c100 ${ intro }`}>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
      <NewsCard handleShowComponent={ handleShowComponent }/>
    </div>
  )
}
