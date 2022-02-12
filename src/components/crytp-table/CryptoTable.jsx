import React, { useContext } from 'react'
import { DataContext } from '../../context/context';
import { animations_object } from '../../utils/animations/animations_object';
import { Pagination } from '../pagination/Pagination';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { LoadingText } from '../loading/LoadingText'
import { ErrorConnect } from '../errors/ErrorConnect';
import { useSelector } from 'react-redux';

import { LazyLoadComponent } from 'react-lazy-load-image-component'

export const CryptoTable = ({ data }) => {
  // const context = useContext(contextdata)
  // console.log(data)
  // debugger
  // const { dataAssets: {
  //   data, loading, error
  // } } = useContext( DataContext );
  const { animation, dataAssets: {
    loading, error
  } } = useContext(DataContext)
  // debugger
  const { intro } = animations_object;
  // debugger
  return (
    <LazyLoadComponent className={`crypto__coins c100 ${ intro }`} >
      {/* <Pagination /> */}
        
      <table className={`crypto__table c95 pd ${ animation }`} >
      {/* <div className="glass"></div> */}
        <TableHeader />
              {
                loading 
                ? <LoadingText />
                : error
                  ? <ErrorConnect />
                  :
                  
                    data.map((item, index) => (
                      // debugger
                      <TableRow key={ `${ item.id }` }item={ item }/>
                      
                    ))
                  
              }
      </table>
        
      {/* <Pagination /> */}
      

    </LazyLoadComponent>
  )
}
