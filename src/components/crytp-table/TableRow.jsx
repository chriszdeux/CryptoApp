import { cleanup } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import kraken from '../../temp/kraken.png';
import {icons} from '../../utils/icons/icons_object';
export const TableRow = ({item}) => {
  const { id } = item
  return (
    <>
        <tbody>
    <tr className="table__row c100 ">
      {/* <td>1</td> */}

      <td className="rank">1</td>
      <td className="coin">
        <figure className="crypto__coin">
          <img className="coin--image" src={ kraken } alt="" />
        </figure>
      </td>

      <td className="coin--name">{ id }<br /><span className="short--name pd--h">SHIB</span></td>
      <td className="price">
        $0.000008485 <br />
        {/* <span className="supply">
        Supply $1,521,625.236  
        </span> */}
      </td>

      <td className="market--cap--24h"><span className="market--mark">{ icons.up_icon } 6.5%</span></td>
      <td className="market--cap--7d"><span className="market--mark">{ icons.up_icon } 6.5%</span></td>

      <td className="volume">$3,845,965,256.2641</td>
      <td className="supply">$1,521,625.236 </td>

      {/* <hr /> */}
    </tr>

    </tbody>
      </>
  )
}
