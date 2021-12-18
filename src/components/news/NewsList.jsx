import React from 'react'
import { NewsCard } from '../cards/NewsCard'

export const NewsList = ({ handleShowComponent }) => {
  return (
    <div className="news__grid c100">
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
