import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { GainerLoser } from '../components/cards/GainerLoser';
import { CryptoTable } from '../components/crytp-table/CryptoTable'
import { Pagination } from '../components/pagination/Pagination'
import { animations_object } from '../utils/animations/animations_object';
import { scrollTop } from '../utils/functions/scrollTop';

export const TradePage = () => {

  const { data } = useSelector(state => state.data_reducer)
  const { intro } = animations_object 
  useEffect(() => {
    scrollTop()
  }, [  ])
  return (
    <div className="trade__section">
      <div className={`main__trade ${ intro }`} style={{ animationDelay: '1s' }}>
        <GainerLoser />
        <Pagination />
        <CryptoTable data={ data }/>
        <Pagination />z
      </div>
    </div>
  )
}
