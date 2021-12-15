import React from 'react'
import kraken from '../../temp/kraken.png';
import { icons } from '../../utils/icons/icons_object';
import image from '../../utils/vector/news.svg';
import { BackgroundImage } from '../main/BackgroundImage'
import { NewsStats } from './NewsStats';
export const NewsInfo = () => {
  
  return (
    <div className="news__info__aside">
      <div className="news__content c95">
        
        <h2 className="mg--v--3 pd--b">{ icons.forward_icon }  New crypto event soon</h2>
        <figure className="mg--b--3">
          <img src={ kraken } alt="" />
        </figure>
       <NewsStats />
        <p className="mg--v">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab dolor distinctio earum possimus. Cum reiciendis quaerat aliquid tempora minus aliquam porro, alias mollitia sequi inventore tenetur quidem voluptatum totam asperiores!

          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, similique sapiente harum et earum omnis reiciendis, eum de
        </p>

      <buton className="btn btn--primary mg--v--3">Go</buton>
      </div>
      <figure className="news__background">
        <img src={ image } alt="" />
      </figure>

    </div>
  )
}
