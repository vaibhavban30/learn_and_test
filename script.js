const quizData = [
    {
        question: "Relation between Cp and Cv is: ",
        a: "Cv-Cp=R",
        b: "Cp+Cv=R",
        c: "Cp-Cv=2R",
        d: "Cp-Cv=R",
        correct: "d",
    },
    {
        question: "Which of the following express diadonal relationship?",
        a: "Lithium and Beryllium",
        b: "Boron and Silicon",
        c: "Sodium and Magnesium",
        d: "Beryllium and Silicon",
        correct: "b",
    },
    {
        question: "What is the value of 4C2?",
        a: "6",
        b: "8",
        c: "4",
        d: "12",
        correct: "a",
    },
    {
        question: "What is first law of thermodynamics?",
        a: "dU = dQ + dW",
        b: "dQ = dU + dW",
        c: "dW = dQ + dU",
        d: "None of these",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Retake Quiz</button>
            `
        }
    }
})