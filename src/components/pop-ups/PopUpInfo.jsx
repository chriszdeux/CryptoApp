import React, { useEffect, useState } from 'react'
import { icons } from '../../utils/icons/icons_object'

export const PopUpInfo = ({ values }) => {
  const { blockchain_site, official_forum_url } = values
  // debugger
  const [links, setLinks] = useState([])
  // debugger
  useEffect(() => {
    if(blockchain_site) return setLinks(blockchain_site.filter(item => {
      return item !=+ ''
    }))
    if(official_forum_url) return setLinks(official_forum_url.filter(item => {
      return item !=+ ''
    }))
  }, [ values ])
  // debugger
  return (
    <div className="pop__up">
      <div className="pop__up__icon">
        { icons.up_icon }
      </div>
      <ul className="pop__up__list">
        {
          links.map((item, index) => (
            <li key={ `${item}${index}` }> { item.slice(0,15) }... 
              <a href={ item } target="_blank" rel="linksr">
                { icons.open_icon }
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
