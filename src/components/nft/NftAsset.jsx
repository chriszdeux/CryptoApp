import React from 'react'
import chain from '../../temp/chain.jpg';
import { animations_object } from '../../utils/animations/animations_object';
export const NftAsset = () => {
  const { intro, flip_x } = animations_object;
  return (
    <div className="nft__asset c95">
      <figure className="asset--item">
        <img className={`${intro}`} src={ chain } alt=""  style={{ 
            animationDelay: '1s',
            // transform: `rotate(45deg)` 
          }}/>
        <img className={`asset--effect ${ intro }`} src={ chain } alt="" />
      </figure>
      <div className={`nft__alt ${ intro }`} style={{ animationDelay: '1.5s' }}>
        <h2>Spartans never day only disappear in combat</h2>
        <h3>f9isdnrw9jndfi90wr-3r23rfe</h3>
        <div className="glass"></div>
      </div>

        <div className="glass"></div>
    </div>
  )
}
