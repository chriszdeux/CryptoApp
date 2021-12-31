import React from 'react'
import { animations_object } from '../../utils/animations/animations_object'

export const AssetAbout = () => {
  const { intro } = animations_object;
  return (
    <div className={`asset__about mg--v pd ${ intro }`}>
      <div className="about__header mg--b">
        <h2>Asset title</h2>
        <h2>Traducir</h2>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi qui animi rerum fugiat dolorum modi repudiandae excepturi nobis cum deleniti obcaecati, nihil consequatur cumque a ratione repellat illo, veritatis nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptatibus beatae aspernatur porro illum molestias, reiciendis, quisquam eaque adipisci dolorum voluptate eum corporis nulla, magni et? Nostrum temporibus quo veniam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, sequi reiciendis debitis aperiam aspernatur atque iusto in quo deleniti temporibus id dolorum doloremque ratione recusandae. Autem numquam corporis fuga aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, dolor eos sunt explicabo dignissimos non culpa unde vel voluptatum assumenda. Placeat rerum ab quidem dolor unde numquam voluptas sint excepturi.</p>
    </div> 
  )
}
