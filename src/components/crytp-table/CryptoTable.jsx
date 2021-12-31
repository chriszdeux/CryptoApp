import React from 'react'
import { animations_object } from '../../utils/animations/animations_object';
import { Pagination } from '../pagination/Pagination';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
export const CryptoTable = () => {
  const { intro } = animations_object;
  return (
    <section className="crypto__coins c100">

      <table className={`crypto__table c95 pd ${ intro }`}>
      <div className="glass"></div>
        <TableHeader />
        {/* <hr /> */}
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      {/* <div className="glass"></div> */}
      </table>
      {/* <Pagination /> */}

    </section>
  )
}
