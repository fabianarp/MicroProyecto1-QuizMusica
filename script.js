// Variables globales
const Quiz = "Música";
const preguntas = [
    // Pregunta 1
    {
        pregunta: "¿Qué banda lanzó la canción Bohemian Rhapsody?",
        opciones: ["Queen", "Pink Floyd", "Rolling Stones", "U2"],
        respuesta: "Queen"
    },
    // Pregunta 2
    {
        pregunta: "¿Quien fue el artista más escuchado en spotify en 2024?",
        opciones: ["Bad Bunny", "Taylor Swift", "The Weeknd", "Harry Styles"],
        respuesta: "Taylor Swift",
    },
    // Pregunta 3
    {
        pregunta: "¿Quien es conocida como la reina del pop?",
        opciones: ["Beyoncé", "Whitney Houston", "Madonna", "Taylor Swift"],
        respuesta: "Madonna",
    },
    // Pregunta 4
    {
        pregunta: "¿De que país viene el género musical Reggae?",
        opciones: ["Brasil", "Jamaica", "Colombia", "Cuba"],
        respuesta: "Jamaica",
    },
    // Pregunta 5
    {
        pregunta: "¿Que cantante es famoso por el maso de baile Moonwalk?",
        opciones: ["Michael Jackson", "Harry Styles", "Justin Biber", "Bad Bunny"],
        respuesta: "Michael Jackson",
    }, 
    // Pregunta 6
    {
        pregunta: "¿Quien es el vocalista principal de la banda U2?",
        opciones: ["Chris Martin", "Liam Gallagher", "Bono", "Mick Jagger"],
        respuesta: "Bono",
    },
    // Pregunta 7
    {
        pregunta: "¿Cuantos integrantes habian en la banda One Direction?",
        opciones: ["2", "3", "4", "5", "6"],
        respuesta: "5",
    }, 
    // Pregunta 8 - CORREGIDO: repuesta -> respuesta
    {
        pregunta: "¿Que duo es conocido por sus canciones Dancing Queen y Mamma Mia?",
        opciones: ["Roxette", "Ace of Base", "Europe", "ABBA"],
        respuesta: "ABBA",
    },
    // Pregunta 9
    {
        pregunta: "¿Que artista puertoriqueño ha dominado con su música urbana?",
        opciones: ["Bad Bunny", "J Balvin", "Maluma", "Anuel AA"],
        respuesta: "Bad Bunny",
    },
    // Pregunta 10
    {
        pregunta: "¿De que banda es la cancion Let It Be?",
        opciones: ["The Rolling Stones", "Queen", "The Beatles", "U2"],
        respuesta: "The Beatles",
    },
    // Pregunta 11
    {
        pregunta: "¿De que cantante es la cancion Hips Dont Lie?",
        opciones: ["Jennifer Lopez", "Shakira", "Karol G", "Christina Aguilera"],
        respuesta: "Shakira",
    },
    // Pregunta 12
    {
        pregunta: "¿Que cancion de Luis Fonsi y Daddy Yankee fue un exito en 2017?",
        opciones: ["Bailando", "Gasolina", "Ginza", "Despacito"],
        respuesta: "Despacito",
    },
    // Pregunta 13
    {
        pregunta: "¿Que artista es famoso por su canción Baby?",
        opciones: ["Ed Sheeran", "Justin Biber", "Shawn Mendes", "Harry Styles"],
        respuesta: "Justin Biber",
    },
    // Pregunta 14
    {
        pregunta: "¿Cual fue la primera canción de One Direction?",
        opciones: ["What Makes You Beautiful", "Kiss You", "Perfect", "Best Song Ever"],
        respuesta: "What Makes You Beautiful",
    },
    // Pregunta 15
    {
        pregunta: "¿Que artista es famosa por su cancion Poker Face?",
        opciones: ["Lady Gaga", "Katy Perry", "Beyoncé", "Madonna"],
        respuesta: "Lady Gaga",
    },
];

// Elementos del DOM
const usuarioInput = document.getElementById('usuario-input');
const iniciarBtn = document.getElementById('iniciar-btn');
const menuInicio = document.getElementById('menu-inicio');
const quizContainer = document.getElementById('quiz-container');
const resultadosContainer = document.getElementById('resultados-container');
const preguntaTexto = document.getElementById('pregunta-texto');
const opcionesContainer = document.getElementById('opciones-container');
const temporizador = document.getElementById('temporizador');
const siguienteBtn = document.getElementById('siguiente-btn');
const resultadoTexto = document.getElementById('resultado-texto');
const detallesResultados = document.getElementById('detalles-resultados');
const nuevoQuizBtn = document.getElementById('nuevo-quiz-btn');
const volverMenuBtn = document.getElementById('volver-menu-btn');
const rankingBody = document.getElementById('ranking-body');

// Variables de estado
let usuario = "";
let preguntaActualI = 0;
let puntuacion = 0;
let intervalo;
let tiempoRestante = 300; // 5 minutos en segundos
let preguntasSeleccionadas = [];
let respuestasUsuario = [];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    cargarRanking();
    iniciarBtn.addEventListener('click', empezarQuiz);
    siguienteBtn.addEventListener('click', siguientePregunta);
    nuevoQuizBtn.addEventListener('click', reiniciarQuiz);
    volverMenuBtn.addEventListener('click', volverAlMenu);
});

// Función para empezar el quiz
function empezarQuiz() {
    usuario = usuarioInput.value.trim();
    if (usuario === "") {
        alert("Ingresa tu usuario para poder empezar el quiz");
        return;
    }

    // Seleccionar 10 preguntas aleatorias sin repetir
    preguntasSeleccionadas = [];
    while (preguntasSeleccionadas.length < 10) {
        const randomIndex = Math.floor(Math.random() * preguntas.length);
        if (!preguntasSeleccionadas.includes(randomIndex)) {
            preguntasSeleccionadas.push(randomIndex);
        }
    }

    // Inicializar variables
    preguntaActualI = 0;
    puntuacion = 0;
    tiempoRestante = 300;
    respuestasUsuario = [];

    // Mostrar quiz y ocultar menú
    menuInicio.style.display = 'none';
    quizContainer.style.display = 'block';
    resultadosContainer.style.display = 'none';

    // Iniciar temporizador - CORRECCIÓN: 1000 ms, no 3000
    actualizarTemporizador();
    intervalo = setInterval(actualizarTemporizador, 1000);

    // Mostrar primera pregunta
    mostrarPregunta();
}

// Función para mostrar la pregunta actual
function mostrarPregunta() {
    const preguntaIndex = preguntasSeleccionadas[preguntaActualI];
    const pregunta = preguntas[preguntaIndex];

    preguntaTexto.textContent = pregunta.pregunta;
    opcionesContainer.innerHTML = '';

    // Crear botones para cada opción
    pregunta.opciones.forEach((opcion, i) => {
        const boton = document.createElement('button');
        boton.className = 'opcion-btn';
        boton.textContent = opcion;
        boton.addEventListener('click', () => seleccionarRespuesta(opcion));
        opcionesContainer.appendChild(boton);
    });

    // Ocultar botón siguiente hasta que se seleccione una respuesta
    siguienteBtn.style.display = 'none';
}

// Función para seleccionar respuesta
function seleccionarRespuesta(opcionSeleccionada) {
    const preguntaIndex = preguntasSeleccionadas[preguntaActualI];
    const pregunta = preguntas[preguntaIndex];
    
    // Guardar respuesta del usuario
    respuestasUsuario.push({
        preguntaIndex: preguntaIndex,
        opcionSeleccionada: opcionSeleccionada,
        esCorrecta: opcionSeleccionada === pregunta.respuesta
    });

    // Deshabilitar todos los botones de opción
    const botones = document.querySelectorAll('.opcion-btn');
    botones.forEach(boton => {
        boton.disabled = true;
        if (boton.textContent === pregunta.respuesta) {
            boton.classList.add('correcta');
        } else if (boton.textContent === opcionSeleccionada && opcionSeleccionada !== pregunta.respuesta) {
            boton.classList.add('incorrecta');
        }
    });

    // Actualizar puntuación si la respuesta es correcta
    if (opcionSeleccionada === pregunta.respuesta) {
        puntuacion++;
    }

    // Mostrar botón siguiente
    siguienteBtn.style.display = 'inline-block';
}

// Función para pasar a la siguiente pregunta
function siguientePregunta() {
    preguntaActualI++;
    
    if (preguntaActualI < 10) {
        mostrarPregunta();
    } else {
        terminarQuiz();
    }
}

// Función para actualizar el temporizador
function actualizarTemporizador() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    temporizador.textContent = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    
    if (tiempoRestante <= 0) {
        terminarQuiz(true);
    } else {
        tiempoRestante--;
    }
}

// Función para terminar el quiz
function terminarQuiz(timedOut = false) {
    clearInterval(intervalo);
    
    // Mostrar resultados
    quizContainer.style.display = 'none';
    resultadosContainer.style.display = 'block';
    
    // Mostrar puntaje
    const porcentaje = Math.round((puntuacion / 10) * 100);
    resultadoTexto.textContent = `¡${usuario}, obtuviste ${puntuacion}/10 (${porcentaje}%)!`;
    
    // Mostrar detalles de respuestas
    detallesResultados.innerHTML = '';
    respuestasUsuario.forEach((respuesta, i) => {
        const pregunta = preguntas[respuesta.preguntaIndex];
        const item = document.createElement('div');
        item.className = `respuesta-item ${respuesta.esCorrecta ? 'correcta' : 'incorrecta'}`;
        item.innerHTML = `
            <p><strong>Pregunta ${i + 1}:</strong> ${pregunta.pregunta}</p>
            <p>Tu respuesta: ${respuesta.opcionSeleccionada} ${respuesta.esCorrecta ? '✓' : '✗'}</p>
            ${!respuesta.esCorrecta ? `<p>Respuesta correcta: ${pregunta.respuesta}</p>` : ''}
            <hr>
        `;
        detallesResultados.appendChild(item);
    });

    // Guardar puntaje
    guardarPuntaje();
}

// Función para guardar el puntaje en localStorage
function guardarPuntaje() {
    const puntajes = JSON.parse(localStorage.getItem('quizMusicaPuntajes')) || [];
    const nuevoPuntaje = {
        nombre: usuario,
        puntaje: puntuacion,
        fecha: new Date().toLocaleDateString(),
        porcentaje: Math.round((puntuacion / 10) * 100)
    };
    
    puntajes.push(nuevoPuntaje);
    puntajes.sort((a, b) => b.puntaje - a.puntaje);
    
    if (puntajes.length > 5) {
        puntajes.length = 5; // Mantener solo los 5 mejores
    }
    
    localStorage.setItem('quizMusicaPuntajes', JSON.stringify(puntajes));
    cargarRanking();
}

// Función para cargar el ranking desde localStorage
function cargarRanking() {
    const puntajes = JSON.parse(localStorage.getItem('quizMusicaPuntajes')) || [];
    rankingBody.innerHTML = '';
    
    puntajes.forEach((puntaje, i) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${i + 1}</td>
            <td>${puntaje.nombre}</td>
            <td>${puntaje.puntaje}/10 (${puntaje.porcentaje}%)</td>
            <td>${puntaje.fecha}</td>
        `;
        rankingBody.appendChild(fila);
    });
}

// Función para reiniciar el quiz
function reiniciarQuiz() {
    resultadosContainer.style.display}