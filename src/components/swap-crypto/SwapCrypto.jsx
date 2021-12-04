import React from 'react'
import { icons } from '../../utils/icons/icons_object'
import { MainButton } from '../buttons/MainButton'

export const SwapCrypto = () => {
  return (
    <div>
          <ul>
            <li>Buy</li>
            <li>Cell</li>
            <li>Convert</li>
          </ul>
          <div>
            <div>
              { icons.convert_icon }
              <h3>crypto coin</h3>
            </div> 
            <div>
              <div>
                { icons.bank_icon }
                <div>
                  <h3>Bank</h3>
                  <h4>****4541</h4>
                </div>
              </div>
              <h3>$35,000 litmit</h3>
            </div>
          </div>

          <div>
            <h2>Pay with</h2>
            <div>
              <div>
                { icons.bank_icon }
                <div>
                  <h3>Bank</h3>
                  <h4>****4541</h4>
                </div>
              </div>
              <h3>$35,000 litmit</h3>
            </div>
          </div>
          <MainButton message={'Preview Buy'}/>
        </div>
  )
}
