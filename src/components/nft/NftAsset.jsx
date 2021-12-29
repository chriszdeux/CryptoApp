import React from 'react'
import chain from '../../temp/chain.jpg';
export const NftAsset = () => {
  return (
    <div className="nft__asset c95">
      <figure className="asset--item">
        <img src={ chain } alt="" />
        <img className="asset--effect" src={ chain } alt="" />
      </figure>
      <div className="nft__alt">
        <h2>Spartans never day only disappear in combat</h2>
        <h3>f9isdnrw9jndfi90wr-3r23rfe</h3>
        <div className="glass"></div>
      </div>

        <div className="glass"></div>
    </div>
  )
}
