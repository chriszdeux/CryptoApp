import React from 'react'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { NewsInfo } from '../components/news/NewsInfo'
import { NewsList } from '../components/news/NewsList'
import { Pagination } from '../components/pagination/Pagination'
import { useShowComponent } from '../hooks/ShowComponent'

export const NewsPage = () => {
  const { showComponent, handleShowComponent } = useShowComponent()
  return (
    <>
    <section className="news__page c95">
      <div className="news__main">
        <h2>Crypto news!</h2>
        <NewsList />
      </div>
      <div className="news__aside">
        <NewsInfo handleShowComponent={ handleShowComponent } />
      </div>
      <div className="news__modal">
        {
          showComponent && <NewsInfo handleShowComponent={ handleShowComponent }/>
        }
      </div>

      <Pagination />
    </section>
    </>
  )
}
