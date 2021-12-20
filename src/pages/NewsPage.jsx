import React from 'react'
import { BackgroundImage } from '../components/main/BackgroundImage'
import { NewsInfo } from '../components/news/NewsInfo'
import { NewsList } from '../components/news/NewsList'
import { Pagination } from '../components/pagination/Pagination'
import { useShowComponent } from '../hooks/ShowComponent'
import { icons } from '../utils/icons/icons_object';
import image from '../utils/vector/news2.svg';

export const NewsPage = () => {
  const { showComponent, handleShowComponent } = useShowComponent()
  return (
    <>
    <section className="news__page c95">
      <div>
        
      </div>
      <h2>Crypto news!</h2>
      <NewsList handleShowComponent={ handleShowComponent }/>
      {
        showComponent && <NewsInfo handleShowComponent={ handleShowComponent }/>
      }
      {/* <NewsInfo /> */}
      <Pagination />
      <BackgroundImage image={ image }/>
    </section>
    </>
  )
}
