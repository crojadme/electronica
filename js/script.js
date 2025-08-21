// Removemos el arreglo de preguntas y respuestas de este archivo
// const questions = [...];

let currentQuestionIndex = 0;
let score = 0;

// Referencias a los elementos del DOM
const questionEl = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const nextBtn = document.getElementById('next-btn');

// Función para mostrar la pregunta actual
function showQuestion() {
    // La variable 'questions' ahora es accesible porque está en un script separado que se carga antes
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsContainer.innerHTML = ''; // Limpia las opciones anteriores

    currentQuestion.options.forEach(option => {
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
    // Deshabilitar botones para evitar múltiples clics
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        feedbackContainer.textContent = "¡Correcto! ✅";
        feedbackContainer.style.color = '#28a745';
        score++;
    } else {
        feedbackContainer.textContent = "Incorrecto. ❌ La respuesta correcta era: " + correctAnswer;
        feedbackContainer.style.color = '#dc3545';
    }

    // Resaltar la respuesta correcta e incorrecta
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

    // Puedes añadir un botón para reiniciar el quiz
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Reiniciar Quiz';
    restartBtn.classList.add('option-btn');
    restartBtn.style.backgroundColor = '#007bff';
    restartBtn.style.color = 'white';
    restartBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    });
    optionsContainer.appendChild(restartBtn);
}

// Event listener para el botón "Siguiente"
nextBtn.addEventListener('click', nextQuestion);

// Iniciar el quiz al cargar la página
showQuestion();