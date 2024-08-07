// Importamos React, ReactDOM y los estilos
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/index.css'; 

// Componente que muestra un contador
const CounterDisplay = () => {
    // Estado para contar segundos
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        // Actualiza el contador cada segundo
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []); // Configura el intervalo solo una vez

    // Convertir segundos a formato 00:00:00:00:00:00
    const days = Math.floor(seconds / (24 * 3600)).toString().padStart(2, '0');
    const hours = Math.floor((seconds % (24 * 3600)) / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    
    return (
        <div className="counter-display">
            <i className="fa fa-clock"></i>
            <div className="display">
                <span className="digit">{`${days}:${hours}:${minutes}:${secs}`}</span>
            </div>
        </div>
    );
};

// Renderiza el componente en el contenedor con id 'app'
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<CounterDisplay />);
