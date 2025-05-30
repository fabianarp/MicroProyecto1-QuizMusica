const Quiz = "Música"
const preguntas = [ //declaro variable constante preguntasMusica
    //Pregunta 1
    {
        pregunta: "¿Que banda lanzó la canción Bohemian Rhapsody?",
        opciones: ["Queen", "Pink Floyd", "Rolling Stones", "U2"],
        respuesta: "Queen"
    },
    //Pregunta 2
    {
        pregunta: "¿Quien fue el artista más escuchado en spotify en 2024?",
        opciones: ["Bad Bunny", "Taylor Swift", "The Weeknd", "Harry Styles"],
        respuesta: "Taylor Swift",
    },
    //Pregunta 3
    {
        pregunta: "¿Quien es conocida como la reina del pop?",
        opciones: ["Beyoncé", "Whitney Houston", "Madonna", "Taylor Swift"],
        respuesta: "Madonna",
    },
    //Pregunta 4
    {
        pregunta: "¿De que pa+is viene el género musical Reggae?",
        opciones: ["Brasil", "Jamaica", "Colombia", "Cuba"],
        respuesta: "Jamaica",
    },
    //Pregunta 5
    {
        pregunta: "¿Que cantante es famoso por el maso de baile Moonwalk?",
        opciones: ["Michael Jackson", "Harry Styles", "Justin Biber", "Bad Bunny"],
        respuesta: "Michael Jackson",
    }, 
    //Pregunta 6
    {
        pregunta: "¿Quien es el vocalista principal de la banda U2?",
        opciones: ["Chris Martin", "Liam Gallagher", "Bono", "Mick Jagger"],
        respuesta: "Bono",
    },
    //Pregunta 7
    {
        pregunta: "¿Cuantos integrantes habian en la banda One Direction?",
        opciones: ["2", "3", "4", "5", "6"],
        respuesta: "5",
    }, 
    //Pregunta 8
    {
        pregunta: "¿Que duo es conocido por sus canciones Dancing Queen y Mamma Mia?",
        opciones: ["Roxette", "Ace of Base", "Europe", "ABBA"],
        repuesta: "ABBA",
    },
    //Pregunta 9
    {
        pregunta: "¿Que artista puertoriqueño ha dominado con su música urbana?",
        opciones: ["Bad Bunny", "J Balvin", "Maluma", "Anuel AA"],
        respuesta: "Bad Bunny",
    },
    //Pregunta 10
    {
        pregunta: "¿De que banfa es la cancion Let It Be?",
        opciones: ["The Rolling Stones", "Queen", "The Beatles", "U2"],
        respuesta: "The Beatles",
    },
    //Pregunta 11
    {
        pregunta: "¿De que cantante es la cancion Hips Dont Lie?",
        opciones: ["Jennifer Lopez", "Shakira", "Karol G", "Christina Aguilera"],
        respuesta: "Shakira",
    },
    //Pregunta 12
    {
        pregunta: "¿Que cancion de Luis Fonsi y Daddy Yankee fue un exito en 2017?",
        opciones: ["Bailando", "Gasolina", "Ginza", "Despacito"],
        respuesta: "Despacito",
    },
    //Pregunta 13
    {
        pregunta: "¿Que artista es famoso por su canción Baby?",
        opciones: ["Ed Sheeran", "Justin Biber", "Shawn Mendes", "Harry Styles"],
        respuesta: "Justin Biber",
    },
    //Pregunta 14
    {
        pregunta: "¿Cual fue la primera canción de One Direction?",
        opciones: ["What Makes You Beautiful", "Kiss You", "Perfect", "Best Song Ever"],
        respuesta: "What Makes You Beautiful",
    },
    //Pregunta 15
    {
        pregunta: "¿Que artista es famosa por su cancion Poker Face?",
        opciones: ["Lady Gaga", "Katy Perry", "Beyoncé", "Madonna"],
        respuesta: "Lady Gaga",
    },
];

let usuario = "";
let preguntaActualI = 0;  //index de la pregunta actual
let puntuacion = 0;
let tiempo;
let tiempoRestante = 300;  //5min en seg
let preguntasSeleccionadas = [];




function empezarQuiz() {
    usuario = usuarioInput.value.trim(),
    if (usuario === "") {
        alert("Ingresa tu usuario para poder empezar el quiz");
        return;
    }

}

function reiniciarQuiz() {
    preguntaActualI = 0;
    puntuacion = 0;
    tiempoRestante = 300;
    clearInterval(tiempo); //Para temporizador anterior

}



function terminarQuiz(timedOut = false){
    clearInterval(tiempo);
    
}

