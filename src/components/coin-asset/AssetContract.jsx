import React, { useContext } from 'react'
import { DataAssetContext } from '../../context/context'
import { icons } from '../../utils/icons/icons_object'

export const AssetContract = () => {
  const { data: {
    contract_address
  }, } = useContext(DataAssetContext)
  return (
    <ul className="asset__contracts mg--b">
      {
        contract_address &&
        <li>
          <figure>
            <img src="" alt="" />
          </figure>
          <h3 className="mg--r">0x54asd564s6das654zzx46sd8fsd46df</h3>
          <div>
        { icons.copy_icon }
          </div>
        </li>
      }
    </ul>
  )
}
