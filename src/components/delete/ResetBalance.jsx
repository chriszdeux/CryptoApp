import React from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { actionRemoveBuy } from '../../actions/actionBuy'
import { animations_object } from '../../utils/animations/animations_object'

export const ResetBalance = ({ handleShowComponent2 }) => {
  const dispatch = useDispatch()
  // const navigate = Navigate()
  const navigate = useNavigate()

  const handleRemoveAsset = () => {
    dispatch(actionRemoveBuy())
    handleShowComponent2()
    navigate('/crypto')
  }
  const { intro } = animations_object
  return (
    <div className={`confirmation__screen ${ intro }`}>
      <div className={ `confirmation__content ${ intro }` } style={{ animationDelay: '1.5s' }}>
        <h2>Are you sure?</h2>
        <h3>All assets will be removed from your portfolio</h3>
        <div className='confirmation__buttons'>
          <button className="btn btn--primary" onClick={ handleRemoveAsset }>Accept</button>
          <button className="btn btn--cancel" onClick={ handleShowComponent2 }>Cancel</button>
        </div>
      </div>
      <div className='confirmation--layout'></div>
    </div>
  )
}
