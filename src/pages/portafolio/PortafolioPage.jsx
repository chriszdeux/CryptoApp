import React from 'react'
import { CryptoTable } from '../../components/crytp-table/CryptoTable'
import { SwapCrypto } from '../../components/swap-crypto/SwapCrypto';
import { icons } from '../../utils/icons/icons_object';
export const PortafolioPage = () => {
  return (
    <section>
      <div className="balance">
        <div>
          <h3>Portafolio balance</h3>
          <h2>$3,158.66</h2>
        </div>
        <div className="chart">

        </div>
        <div>
          <h2>Your Assets</h2>
        <CryptoTable />

        </div>
        <div>
          <h2>Wish list</h2>
          <CryptoTable />
        </div>
      </div>

      <aside>
        {/* <SwapCrypto /> */}
      </aside>
    </section>
  )
}
