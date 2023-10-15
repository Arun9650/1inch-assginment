import React from 'react'
import { Logo } from './icons'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {
  return (
    <div className='flex  items-center justify-between  w-full max-w-7xl mx-auto'>

        <div>
            <Logo size={150} height={100}/>
        </div>
        <div>
            <ConnectButton showBalance={true}/>
        </div>
    </div>
  )
}

export default Navbar