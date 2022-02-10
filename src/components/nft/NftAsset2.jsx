import React, { useContext } from 'react'
import { DataContext } from '../../context/context';
import chain from '../../temp/chain.jpg';
import { animations_object } from '../../utils/animations/animations_object';
export const NftAsset2 = () => {
  const { intro, flip_x } = animations_object;
  const { nft:{ data: {
    regular_image,
    nft_code,
    tags,


  } } } = useContext(DataContext)
  // debugger
  return (
    <div className="nft__asset nft--2 c95">
      <figure className="asset--item">
        <img className={`${intro}`} src={ regular_image } alt={ tags }  style={{ 
            animationDelay: '1s',
            // transform: `rotate(45deg)` 
          }}/>
        <img className={`asset--effect ${ intro }`} src={ regular_image } alt={ tags } />
      </figure>
      <div className={`nft__alt ${ intro }`} style={{ animationDelay: '1.5s' }}>
        {/* <h2>Spartans never day only disappear in combat</h2> */}
        <h3>{ nft_code }</h3>
        <div className="glass"></div>
      </div>

        <div className="glass"></div>
    </div>
  )
}
