import React, { useState, useEffect } from 'react'
import { icons } from '../../utils/icons/icons_object'
import { MainButton } from '../buttons/MainButton'
import shib from '../../temp/shib.png'
import { Divider } from '../helpers/Divider'
import { useForm } from '../../hooks/useForm'
// import { useEffect } from 'react/cjs/react.development'
import { useFormatNumbers } from '../../hooks/useFormatNumbers'
import { useWidthNumber } from '../../hooks/useWidthNumber'
import { BuyPay } from './BuyPay'
import { Amount } from './Amount'
import { SwapNavbar } from './SwapNavbar'
import { SwapBalance } from './SwapBalance'
import { PreviewTransaction } from './PreviewTransaction'
import { useShowComponent } from '../../hooks/ShowComponent'
import { BackgroundImage } from '../main/BackgroundImage'
import image from '../../utils/vector/server.svg'
import { RecurrentTransaction } from './RecurrentTransaction'
import { useValidateAmount } from '../../hooks/useValidateAmount'
import { animations_object } from '../../utils/animations/animations_object'

export const SwapCrypto = ({ handleShowComponent2 }) => {

  const [swapOperations, setSwapOperations] = useState({
    buy: false,
    sell: false,
    convert: false
  })

  const { warningAmount, validateAmount, setValidateAmount, handleWarningAmount } = useValidateAmount()
  // debugger
  // const [warningAmount, setWarningAmount] = useState(false)
  const { showComponent, handleShowComponent } = useShowComponent()
  useEffect(() => {
    handleWarningAmount()
    // debugger
  }, [  validateAmount])
  const { intro_right } = animations_object;
  // debugger
  return (
    <div className={`swap c100 ${ intro_right }`}>
      <div className="swap__back" onClick={ handleShowComponent2 }>
      { icons.back_icon }
      </div>
      <SwapNavbar />
      <Divider />
      <Amount setValidateAmount={ setValidateAmount }/>
      <RecurrentTransaction />
       
      <BuyPay />
      {
        warningAmount &&
        <button className="btn btn--primary" onClick={ handleShowComponent }>
          Preview Transaction
        </button>
      }
      <SwapBalance />
      {
        showComponent && <PreviewTransaction handleShowComponent={ handleShowComponent }/>
      }
            {/* <BackgroundImage image={ image }/> */}
      {/* <div className="glass"></div> */}
    </div>
  )
}
