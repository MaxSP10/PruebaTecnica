import './Especifico.css';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from './images/logo.png';
import SideBar from './components/navbar';
import Test from './components/test';

function Especifico() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (

    <div className="App">

    <header>
      <GiHamburgerMenu onClick={() => setShowSideBar(!showSideBar)} className='menu-hamburger'/>
      <div className='logo-container'>
          <img src={logo} alt='logo' className='logo' />
      </div>
    </header>
    {showSideBar && <SideBar />}
    <main className='main-container'>
        <div className='detalle-container'>
            <div className='title-container'>
              <h1>Fisica II</h1>
            </div>
            <div className='ciclo-container'>
              <h2>Examenes disponibles</h2>
            </div>
        </div>
        <div className='test-container-wrapper'>
          <div className='test-container'>
              <Test />
              <Test />
              <Test />
              <Test />
              <Test />
          </div>
        </div>

    </main>

</div>
  )
}

export default Especifico;
