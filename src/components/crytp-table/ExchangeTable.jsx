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
import { ExchangeTableHeader } from './ExchangeTableHeader';
import { ExchangeTableRow } from './ExchangeTableRow';

export const ExchangeTable = () => {
  const { dataExchanges:{
    loading, error, data
  } } = useContext(DataContext)
  // console.log(data)
  // debugger
  // const { dataAssets: {
  //   data, loading, error
  // } } = useContext( DataContext );
  // debugger
  const { animation } = useContext(DataContext)
  // debugger
  const { intro } = animations_object;
  // debugger
  return (
    <LazyLoadComponent className={`crypto__coins c100 ${ intro }`} >
      {/* <Pagination /> */}
      {
        loading 
        ? <LoadingText />
        : error
          ? <ErrorConnect />
          :
            <table className={`crypto__table c95 pd ${ animation }`} >
              <ExchangeTableHeader />
                    {
                      data.map((item, index) => (
                        <ExchangeTableRow key={ `${ item.id }` }item={ item }/>
                        
                      ))
                    }
            </table>
      }
        
      {/* <Pagination /> */}
      

    </LazyLoadComponent>
  )
}
