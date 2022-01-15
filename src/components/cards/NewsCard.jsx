import React from 'react'
import kraken from '../../temp/kraken.png';
export const NewsCard = ( { item }) => {
  // debugger
  const { 
    article_date,
    article_image,
    article_title,
    article_url  
  } = item

  return (
    <article className="news__card mg--h" >
      <figure className="card__cover">
        <img className="card--cover" src={ article_image } alt={ article_title } />
      </figure>
      <div className="news__info mg--b pd">
        <h2 className="mg--b">{ article_title } </h2>

        {/* <p className="mg--b">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, expedita.</p> */}
        <div className="conference mg--b">
          <h3>{ article_date }</h3>
          <a href={ article_url } target="_blank">Read More</a>
        </div>
      </div>
    </article>
  )
}
