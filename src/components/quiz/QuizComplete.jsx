import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { actionBuy } from '../../actions/actionBuy';
import { actionTransaction, actionTransactionEarn } from '../../actions/actionTransaction';
import { DataContext } from '../../context/context';
import { useFetchAsset } from '../../hooks/fetchHooks/useFetchAsset';
import kraken from '../../temp/kraken.png';
import { animations_object } from '../../utils/animations/animations_object';
import { icons } from '../../utils/icons/icons_object';
import image from '../../utils/vector/winner.svg';
import { ErrorConnect } from '../errors/ErrorConnect';
import { LoadingText } from '../loading/LoadingText';
export const QuizComplete = ({ handleShowComponent }) => {
  const { intro, intro_up } = animations_object;
  const { dataEarning: {
    cryptocurrency, earn_dollars, 
  } } = useContext(DataContext)
  // const { data, loading, error } = useFetchAsset(cryptocurrency);
  const { loading, error, data } = useFetchAsset( earn_dollars && cryptocurrency)

  const dispatch = useDispatch()

  const handleQuizCompleted = () => {
    dispatch( actionBuy({...data, amount_dollar: earn_dollars}) )
    dispatch( actionTransactionEarn ({ ...data }) );
    handleShowComponent()
  }
  // debugger
  return (
    <div className={`quiz__completed ${ intro }`}>
      {
        loading 
          ? <LoadingText />
          : error
            ? <ErrorConnect />
            :
            <>
              <div className={`well__done ${ intro_up }`} style={{ animationDelay: '1s' }}>
                <h1>Well done!</h1>
                <h2>You earned <span>$5</span> in { data.name }</h2>
                {/* <div className="close" >
                  { icons.back_icon }
                </div> */}
                <figure className="quiz__asset mg--v--3">
                  <img src={ data.image.small } alt={ data.name } />
                  <img src={ data.image.small } alt={ data.name } />
                </figure>
                <button className="btn btn--primary" onClick={ handleQuizCompleted }>Continue</button>
                </div>
            </>
      }
      <figure className="winner">
        <img src={ image } alt="" />
      </figure>
    </div>
  )
}
