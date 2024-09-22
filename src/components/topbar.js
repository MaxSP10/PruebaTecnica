import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../images/logo.png';
import SideBar from './navbar';
import { useState } from 'react';


function TopBar() {
    const [showSideBar, setShowSideBar] = useState(false);
  return (
    <header className='topbar'>
        <GiHamburgerMenu onClick={() => setShowSideBar(!showSideBar)} className='menu-hamburger'/>
        <div className='logo-container'>
            <img src={logo} alt='logo' className='logo' />
        </div>
        {showSideBar && <SideBar />}
    </header>

  )
}

export default TopBar