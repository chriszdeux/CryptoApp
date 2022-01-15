import React, { useContext } from 'react'
import { DataContext } from '../../context/context'
import { animations_object } from '../../utils/animations/animations_object'
import { NewsCard } from '../cards/NewsCard'
import { ErrorConnect } from '../errors/ErrorConnect'
import { LoadingText } from '../loading/LoadingText'

export const NewsList = () => {
  
  const {dataNews: { loading, error, data } } = useContext(DataContext)
  const { intro } = animations_object;
  
  return (
    <div className={`news__grid c100 ${ intro }`}>
      {
          loading
            ? <LoadingText />
            : error
              ? <ErrorConnect />
              :
                data.map(item => (
                  <NewsCard key={ item.article_title } item={ item } />
                ))
        }
    </div>
  )
}
