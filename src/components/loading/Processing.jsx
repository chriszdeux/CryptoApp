import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { animations_object } from '../../utils/animations/animations_object'
import { icons } from '../../utils/icons/icons_object'

export const Processing = ({ image }) => {
  // const navigate = useNavigate()
  // useEffect(() => {
  //   const process = setTimeout(() => {
  //     navigate.push('/main', null)
  //   }, 5000);

  //   return () => {
  //     clearTimeout(process)
  //   }
  // }, [  ])
  const [done, setDone] = useState(false);
  const { intro, exit } = animations_object
  const [animation, setAnimation] = useState(intro);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true)
    }, 6000);

    const timer2 = setTimeout(() => {
      setAnimation(exit)
    }, 8000);
    return () => {
      clearTimeout(timer)  
      clearTimeout(timer2)  
    }
  }, [ ])
  // debugger
  return (
    <div className={`processing ${ animation }`}>
      <div>
        { icons.loading_icon }
        { icons.loading_2_icon }
        { icons.loading_2_icon }
      </div>
      <h2>{ !done ? 'Processing transaction' : 'Transaction done!' }</h2>
      {/* {icons} */}
      <figure className='asset__background'>
        {
          image && <img src={ image } alt="" />
        }
      </figure>
    </div>
  )
}
