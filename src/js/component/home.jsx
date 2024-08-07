// Importamos las dependencias necesarias
import React from 'react';
import '../../styles/index.css'; // Asegúrate de que esta ruta sea correcta para importar los estilos

// Creamos el componente CounterDisplay
const CounterDisplay = ({ seconds }) => {

    // Convertir segundos a formato 00:00:00:00:00:00
    // 'days', 'hours', 'minutes' y 'secs' se calculan dividiendo y sacando el residuo de 'seconds'
    
    // Calcula el número de días completos
    const days = Math.floor(seconds / (24 * 3600)).toString().padStart(2, '0');
    // Calcula el número de horas restantes después de contar los días completos
    const hours = Math.floor((seconds % (24 * 3600)) / 3600).toString().padStart(2, '0');
    // Calcula el número de minutos restantes después de contar las horas completas
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    // Calcula el número de segundos restantes después de contar los minutos completos
    const secs = (seconds % 60).toString().padStart(2, '0');
    
    // Devuelve el JSX para renderizar el componente
    return (
        <div className="counter-display">
            <i className="fa fa-clock"></i>
            <div className="display">
                {/* Mostramos el tiempo en formato 00:00:00:00:00:00 */}
                <span className="digit">{`${days}:${hours}:${minutes}:${secs}`}</span>
            </div>
        </div>
    );
};

// Exportamos el componente para que pueda ser usado en otros archivos
export default CounterDisplay;
