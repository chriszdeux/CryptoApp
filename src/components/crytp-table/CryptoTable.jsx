import React, { useContext } from 'react'
import { DataContext } from '../../context/context';
import { animations_object } from '../../utils/animations/animations_object';
import { Pagination } from '../pagination/Pagination';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { LoadingText } from '../loading/LoadingText'
import { ErrorConnect } from '../errors/ErrorConnect';
import { useSelector } from 'react-redux';
export const CryptoTable = () => {
  // const context = useContext(contextdata)
  // console.log(data)
  // debugger
  // const { dataAssets: {
  //   data, loading, error
  // } } = useContext( DataContext );
  const { loading, error, data } = useSelector(state => state.data_reducer)
  
  // debugger
  const { intro } = animations_object;
  // debugger
  return (
    <section className="crypto__coins c100">
      <Pagination />
        {/* <hr /> */}
        {
          loading
            ? <LoadingText />
            : error 
              ? <ErrorConnect />
              : 
      <table className={`crypto__table c95 pd ${ intro }`}>
      {/* <div className="glass"></div> */}
        <TableHeader />
              {
                data.map((item, index) => (
                  // debugger
                  <TableRow key={ `${ item.ath_date+index }` }item={ item }/>
                ))
              }
      </table>
        }
      {/* <div className="glass"></div> */}
      <Pagination />
      

    </section>
  )
}
