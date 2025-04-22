// Ejercicios por grupo muscular
const ejercicios = {
    espalda: [
        {
            nombre: "Remo con barra",
            descripcion: "Este ejercicio trabaja los músculos de la espalda. Mantén la espalda recta y usa una barra para realizar el movimiento de remo.",
            imagen: "remo_barra.png"
        },
        {
            nombre: "Pull-up",
            descripcion: "Usa una barra fija para colgarte. Sube y baja utilizando tus músculos de la espalda y los brazos.",
            imagen: "pull_up.png"
        }
    ],
    pecho: [
        {
            nombre: "Press de banca",
            descripcion: "Este ejercicio trabaja principalmente el pectoral mayor. Utiliza una barra o mancuernas para realizar el movimiento.",
            imagen: "press_banca.png"
        },
        {
            nombre: "Flexiones",
            descripcion: "Ejercicio básico para trabajar el pecho. Baja y sube el torso manteniendo la espalda recta.",
            imagen: "flexiones.png"
        }
    ],
    piernas: [
        {
            nombre: "Sentadillas",
            descripcion: "Este ejercicio trabaja los cuádriceps, glúteos y la parte inferior de las piernas.",
            imagen: "sentadillas.png"
        },
        {
            nombre: "Prensa de pierna",
            descripcion: "Usa la máquina de prensa de pierna para trabajar los músculos de las piernas.",
            imagen: "prensa_pierna.png"
        }
    ]
};

// Función para mostrar los ejercicios
function mostrarEjercicios(grupo) {
    const container = document.getElementById('ejercicios');
    container.innerHTML = ''; // Limpiar el contenedor

    ejercicios[grupo].forEach(ejercicio => {
        const div = document.createElement('div');
        div.classList.add('ejercicio');

        div.innerHTML = `
            <h3>${ejercicio.nombre}</h3>
            <img src="assets/${ejercicio.imagen}" alt="${ejercicio.nombre}">
            <p>${ejercicio.descripcion}</p>
        `;
        
        container.appendChild(div);
    });
}

// Función para manejar los botones
document.getElementById('espalda').addEventListener('click', () => mostrarEjercicios('espalda'));
document.getElementById('pecho').addEventListener('click', () => mostrarEjercicios('pecho'));
document.getElementById('piernas').addEventListener('click', () => mostrarEjercicios('piernas'));
