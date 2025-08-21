let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Referencias a los elementos del DOM
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const nextBtn = document.getElementById('next-btn');

// Función de mezcla de Fisher-Yates para aleatorizar arrays
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función asíncrona para cargar las preguntas desde el archivo JSON
async function loadQuestions() {
    try {
        const response = await fetch('base.json');
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        questions = await response.json();
        shuffleArray(questions); // <-- Aleatoriza el orden de las preguntas al inicio
        startQuiz();
    } catch (error) {
        console.error("No se pudieron cargar las preguntas:", error);
        questionEl.textContent = "Error al cargar el quiz. Por favor, recarga la página.";
    }
}

function startQuiz() {
    if (questions.length > 0) {
        showQuestion();
    } else {
        questionEl.textContent = "No hay preguntas para mostrar.";
    }
}

// Función para mostrar la pregunta actual
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    // Copia las opciones para no modificar el array original y luego las mezcla
    const shuffledOptions = [...currentQuestion.options];
    shuffleArray(shuffledOptions); // <-- Aleatoriza el orden de las alternativas

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        optionsContainer.appendChild(button);

        button.addEventListener('click', () => selectOption(option, currentQuestion.answer));
    });

    feedbackContainer.textContent = '';
    nextBtn.style.display = 'none';
}

// Función para manejar la selección de una opción
function selectOption(selectedOption, correctAnswer) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        feedbackContainer.textContent = "¡Correcto! ✅";
        feedbackContainer.style.color = '#28a745';
        score++;
    } else {
        feedbackContainer.textContent = "Incorrecto. ❌ La respuesta correcta era: " + correctAnswer;
        feedbackContainer.style.color = '#dc3545';
    }

    document.querySelectorAll('.option-btn').forEach(btn => {
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
        if (btn.textContent === selectedOption && selectedOption !== correctAnswer) {
            btn.classList.add('incorrect');
        }
    });

    nextBtn.style.display = 'block';
}

// Función para pasar a la siguiente pregunta o finalizar
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Función para mostrar los resultados finales
function showResults() {
    questionEl.textContent = `¡Quiz terminado!`;
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = `Tu puntuación es de ${score} de ${questions.length} preguntas.`;
    nextBtn.style.display = 'none';

    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Reiniciar Quiz';
    restartBtn.classList.add('option-btn');
    restartBtn.style.backgroundColor = '#007bff';
    restartBtn.style.color = 'white';
    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        // Al reiniciar, volvemos a cargar las preguntas para que se mezclen de nuevo
        loadQuestions();
    });
    optionsContainer.appendChild(restartBtn);
}

nextBtn.addEventListener('click', nextQuestion);

// Iniciar el proceso de carga de preguntas al cargar la página
loadQuestions();