import React from 'react'
import { Pagination } from '../pagination/Pagination';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
export const CryptoTable = () => {
  return (
    <section className="crypto__coins c100">

      <table className="crypto__table c95 pd ">
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
