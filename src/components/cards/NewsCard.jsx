import React from 'react'
import kraken from '../../temp/kraken.png';
export const NewsCard = ({ handleShowComponent }) => {
  return (
    <article className="news__card mg--h" onClick={ handleShowComponent }>
      <figure className="card__cover">
        <img className="card--cover" src={ kraken } alt="" />
      </figure>
      <div className="news__info mg--b pd">
        <h2 className="mg--b">Event - NTF's </h2>
        <p className="mg--b">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, expedita.</p>
        <div className="conference mg--b">
          <h3>By CryptoDeux</h3>
          <h3>date</h3>
        </div>
      </div>
    </article>
  )
}
