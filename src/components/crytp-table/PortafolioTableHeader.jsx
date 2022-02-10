import React from 'react';
import { icons } from '../../utils/icons/icons_object';

export const PortafolioTableHeader = () => {
  return (

    <thead>
      <tr className="table__header">
        <th className="coin--image">Rank #</th>
        <th className="coin--image">Asset</th>
        <th className="coin--name">Name</th>
        <th className="coin--name">Balance</th>
        <th className="total--invested">Invested</th>
        <th className="coin--price">Price</th>
        <th className="coin--price">{ icons.dots_vertical_icon }</th>
        {/* <th className="market--cap--24h">24h%</th> */}
      </tr>
    </thead>
    )
};
