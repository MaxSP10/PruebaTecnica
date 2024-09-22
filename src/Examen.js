import './Examen.css';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from './images/logo.png';
import SideBar from './components/navbar';
import PreguntaRadioBox from './components/PreguntaRadioBox';
import PreguntaCheckBox from './components/PreguntaCheckBox';
import PreguntaTextBox from './components/PreguntaTextBox';
import PreguntaTextBoxNoFormat from './components/PreguntaTextBoxNoFormat';
import PreguntaCoding from './components/PreguntaCoding';

function Examen() {
    const opcionesRadio = ["Opción 1", "Opción 2", "Opción 3"];
    const opcionesCheckBox = ["Opción A", "Opción B", "Opción C"];
    
    const [formData, setFormData] = useState({
        radioSelection: '',
        checkboxSelections: [],
        textBoxContent: '',
        textBoxNoFormatContent: '',
        codingContent: ''
    });
    
    const [isFormValid, setIsFormValid] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);

    const handleRadioChange = (value) => {
        setFormData(prev => ({ ...prev, radioSelection: value }));
    };

    const handleCheckboxChange = (selectedOptions) => {
        setFormData(prev => ({ ...prev, checkboxSelections: selectedOptions }));
    };

    const handleTextBoxChange = (content) => {
        setFormData(prev => ({ ...prev, textBoxContent: content }));
    };

    const handleTextBoxNoFormatChange = (content) => {
        setFormData(prev => ({ ...prev, textBoxNoFormatContent: content }));
    };

    const handleCodingChange = (content) => {
        setFormData(prev => ({ ...prev, codingContent: content }));
    };

    useEffect(() => {
        const isValid = 
            formData.radioSelection !== '' &&
            formData.checkboxSelections.length > 0 &&
            formData.textBoxContent.trim() !== '' && 
            formData.textBoxNoFormatContent.trim() !== '' &&
            formData.codingContent.trim() !== '';

        setIsFormValid(isValid);
        // Log only if form validity changes
    }, [formData]);

    return (
        <div className="Examen">
            <header>
                <GiHamburgerMenu onClick={() => setShowSideBar(!showSideBar)} className='menu-hamburger' />
                <div className='logo-container'>
                    <img src={logo} alt='logo' className='logo' />
                </div>
            </header>
            {showSideBar && <SideBar />}
            <div className='Detalle-Examen'>
                <h1>Practica 1 de Fisica II</h1>
            </div>
            <main className='main-container'>
                <div className='preguntas-wrapper'>
                    <div className='pregunta-container'>
                        <PreguntaRadioBox
                            pregunta="¿Cuál es tu color favorito?"
                            opciones={opcionesRadio}
                            onChange={handleRadioChange}
                        />
                    </div>

                    <div className='pregunta-container'>
                        <PreguntaCheckBox
                            pregunta="Selecciona tus frutas favoritas:"
                            opciones={opcionesCheckBox}
                            onChange={handleCheckboxChange}
                            value={formData.checkboxSelections} 
                        />
                    </div>

                    <div className='pregunta-container'>
                        <PreguntaTextBox 
                            pregunta="Escribe un párrafo de texto con formato:" 
                            onChange={handleTextBoxChange}
                            value={formData.textBoxContent}
                        />
                    </div>

                    <div className='pregunta-container'>
                        <PreguntaTextBoxNoFormat 
                            pregunta="Ingresa tu nombre:" 
                            onChange={handleTextBoxNoFormatChange}
                            value={formData.textBoxNoFormatContent}
                        />
                    </div>

                    <div className='pregunta-container'>
                        <PreguntaCoding 
                            pregunta="Ingresa un fragmento de código:" 
                            onChange={handleCodingChange} 
                            value={formData.codingContent} 
                        />
                    </div>

                    <div className='button-container'>
                        <button className={`BtnEnviar ${isFormValid ? '' : 'disabled'}`} disabled={!isFormValid}>
                            Enviar
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Examen;
