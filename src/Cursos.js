import './Cursos.css';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from './images/logo.png';
import SideBar from './components/navbar';
import Card from './components/card';

function Cursos() {
  const [showSideBar, setShowSideBar] = useState(false);
  return (

    <div className="Cursos">

    <header>
      <GiHamburgerMenu onClick={() => setShowSideBar(!showSideBar)} className='menu-hamburger'/>
      <div className='logo-container'>
          <img src={logo} alt='logo' className='logo' />
      </div>
      {showSideBar && <SideBar />}
    </header>
    


    <main className='main-container'>
        <div className='detalle-container'>
          <div className='title-container'>
            <h1>Cursos</h1>
          </div>
          <div className='ciclo-container'>
            <h2>2024 - Ciclo 2 Agosto PREG (001) (Actual)</h2>
          </div>
        </div>

        <div className='cards-wrapper'>
          <div className='card-container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Cursos;
