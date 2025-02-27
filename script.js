const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const formContainer = document.getElementById('form-container')
const formName = document.getElementById('form-name')
const formLastName = document.getElementById('form-lastname')
const codeElement = document.getElementById('final-code')
const linkForm = document.getElementById('link-form')


let shuffledQuestions, currentQuestionIndex, total, questionNumber, totalcode

const cosis = ['100','99','98','97','96','95','94','93','92','91','90','i','2','3','4','5','o','6','7','8','9','u','10','11','12','13','14','15','a','16','17','18','e','19','20']

startButton.addEventListener('click', startGame)

formName.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        formLastName.focus()
    }
});

formLastName.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        startButton.click();
    }
});

function startGame() {
    if (!(formName.value.length > 2)) {
        alert('Escriba su nombre completo por favor')
    } else {
        questionNumber = 0
        total = 0
        startButton.classList.add('hide')
        formContainer.classList.add('hide')
        shuffledQuestions = randomizeList(questions)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        setNextQuestion()
    }
}

function setNextQuestion() {
    questionNumber++
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = questionNumber + '. ' + question.question
    randomizeList(question.answers).forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function randomizeList(list) {
    return list.sort(() => Math.random() - .5)
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correctCheck = selectedButton.dataset.correct
    behaviorForOption(correctCheck)
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        currentQuestionIndex++
        setNextQuestion()
    } else {
        //TODO match codes con total
        codes.forEach(codeblock => {
            if (codeblock.total == total){
                totalcode = codeblock.code
            }
        })

        questionElement.innerText = 'Gracias por participar de nuestra fiesta '+formName.value+'. Ahora ingresa tu codigo en el link debajo, tal vez ganaste una sorpresa!'
        codeElement.innerText = 'TÚ CÓDIGO ES: ' + totalcode
        codeElement.classList.remove('hide')
        // NO more additions to the form with this line commented:
        linkForm.classList.remove('hide')

        console.log(formName.value)
        console.log(total)
        // startButton.innerText = 'Restart'
        // startButton.classList.remove('hide')
    }
}

function behaviorForOption(correct) {
    resetState()
    if (cosis.includes(correct)) {
        total++
    } else {
        //TODO behavior for wrong
    }
}

const questions = [
    {
        question: "¿Cuál fue la última serie Coreana que vieron Eileen y Martín?",
        answers: [
            {text: 'Alquimia de almas', correct: 'i'},
            {text: 'Aterrizaje de emergencia en tu corazón', correct: 'w'},
            {text: 'Tu tiempo llama', correct: 'q'},
            {text: 'Propuesta Laboral', correct: 'n'}
        ]
    },
    {
        question: '¿Por qué es importante el 27 de febrero?',
        answers: [
            {text: 'Es el cumpleaños de Martín', correct: 'a'},
            {text: 'Es el Pókemon day', correct: 'e'},
            {text: 'Manuel Belgrano iza la bandera Argentina por primera vez', correct: 'i'},
            {text: 'Todas son correctas', correct: 'o'}
        ]
    },
    {
        question: '¿Cuál es el último juego que jugó Martín?',
        answers: [
            {text: 'Spider-Man Shattered Dimensions', correct: 'a'},
            {text: 'Spider-Man 2 PS5', correct: 'b'},
            {text: 'The Legend of Zelda - Tears of the Kingdom', correct: 'c'},
            {text: 'Pokemon Legends: Arceus', correct: 'p'}
        ]
    },
    {
        question: "¿Cuantos joysticks de Nintendo Switch tiene Martín? (contando cada joycon como 1)",
        answers: [
            {text: '15', correct: 't'},
            {text: '20', correct: 'a'},
            {text: '10', correct: 'r'},
            {text: '25', correct: 'f'}
        ]
    },
    {
        question: "Martín es:",
        answers: [
            {text: 'Ordenado', correct: 'g'},
            {text: 'Desordenado', correct: 'u'},
            {text: 'Spider-Man', correct: 'f'}
        ]
    },
    {
        question: "Martín es:",
        answers: [
            {text: 'Impuntual', correct: 'e'},
            {text: 'Puntual', correct: 'y'},
            {text: 'Un agente secreto de los servicios de inteligencia', correct: 'g'}
        ]
    },
    {
        question: "¿Cuantas consolas de videojuegos chinas tiene actualmente Martín?",
        answers: [
            {text: '5', correct: 'e'},
            {text: '3', correct: 'y'},
            {text: '2', correct: 'g'},
            {text: '1', correct: 'n'}
        ]
    },
    {
        question: "¿Cual de estos gustos de helado no soporta Martín?",
        answers: [
            {text: 'Kinotos al Whisky', correct: 'b'},
            {text: 'Sambayon', correct: 'a'},
            {text: 'Menta granizada', correct: 't'},
            {text: 'Mascarpone', correct: 'k'}
        ]
    },
    {
        question: "¿Cuando fue la ultima vez que Martín rayó su auto?",
        answers: [
            {text: 'Hace 1 año', correct: 'f'},
            {text: 'Ayer', correct: 'u'},
            {text: 'A la semana de tenerlo', correct: 't'},
            {text: 'Hace 2 años', correct: 'm'}
        ]
    },
    {
        question: "¿Qué le duele actualmente mas a Martín?",
        answers: [
            {text: 'Un Hombro', correct: 'i'},
            {text: 'El Corazón', correct: 't'},
            {text: 'La Edad', correct: 'r'},
            {text: 'La Espalda', correct: 'j'}
        ]
    },
    {
        question: "¿Cuantos televisores llegó a tener Martín en un monoambiente de 40 metros cuadrados?",
        answers: [
            {text: '3', correct: 'o'},
            {text: '2', correct: 'w'},
            {text: '1', correct: 'x'},
            {text: '4', correct: 'y'}
        ]
    },
    {
        question: "¿Cual es el amigo mas antiguo de Martín?",
        answers: [
            {text: 'Uriel', correct: 'i'},
            {text: 'Emilio', correct: 't'},
            {text: 'Emmanuel', correct: 'r'},
            {text: 'Spider-Man', correct: 'n'}
        ]
    },
    {
        question: "Entre estos Pokemones, ¿Cual prefiere Martín?",
        answers: [
            {text: 'Growlithe', correct: 'i'},
            {text: 'Garchomp', correct: 't'},
            {text: 'Kadabra', correct: 'f'},
            {text: 'Sudowoodo', correct: 'g'}
        ]
    },
    {
        question: "¿Cual es la ultima compra de china que le llegó a Martín?",
        answers: [
            {text: 'Una banda elástica con parlantes para dormir', correct: 'i'},
            {text: 'Mas joysticks', correct: 't'},
            {text: 'Un teclado', correct: 'f'},
            {text: 'Otra consola china', correct: 'g'}
        ]
    },
    {
        question: "¿Cual de estas actividades no realizó nunca Martín?",
        answers: [
            {text: 'Tela', correct: 'm'},
            {text: 'Rugby', correct: 'u'},
            {text: 'Radio', correct: 'p'},
            {text: 'Ping Pong', correct: 'l'}
        ]
    }
]

const codes = [
    {code: 'abra', total: 0},
    {code: 'baltoy', total: 1},
    {code: 'caterpie', total: 2},
    {code: 'darkrai', total: 3},
    {code: 'eevee', total: 4},
    {code: 'fearow', total: 5},
    {code: 'golem', total: 6},
    {code: 'haunter', total: 7},
    {code: 'ivysaur', total: 8},
    {code: 'jolteon', total: 9},
    {code: 'kadabra', total: 10},
    {code: 'lapras', total: 11},
    {code: 'machop', total: 12},
    {code: 'nidorina', total: 13},
    {code: 'oddish', total: 14},
    {code: 'palkia', total: 15},
    {code: 'quagsire', total: 16},
    {code: 'raichu', total: 17},
    {code: 'sandshrew', total: 18},
    {code: 'tauros', total: 19},
    {code: 'umbreon', total: 20},
    {code: 'vaporeon', total: 21},
    {code: 'wartortle', total: 22},
    {code: 'xatu', total: 23},
    {code: 'yanma', total: 24},
    {code: 'zapdos', total: 25}
]