import './Cursos.css';
import Card from './components/card';
import TopBar from './components/topbar';

function Cursos() {
  return (

    <div className="Cursos">

      <TopBar />
    
    <main className='main-container'>
        <div className='detalle-container'>
            <div className='title-container'>
              <h2>Cursos</h2>
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
