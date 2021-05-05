const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
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

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: '1. яка криптовалюта найдорожчча?',
    answers: [
      { text: 'Bitcoin', correct: true },
      { text: 'Altcoin', correct: false },
      { text: 'Dogecoin', correct: false },
      { text: 'Filecoin', correct: false }
    ]
  },
  {
    question: '2. яке спеціальне обладнання використовують майнери?',
    answers: [
      { text: 'Asic', correct: true },
      { text: 'відокарти', correct: false },
      { text: 'процесор', correct: false },
      { text: 'ОЗУ', correct: false }
    ]
  },
  {
    question: '3. яка автомобільна компанія є найдорожчою в світі?',
    answers: [
      { text: 'Toyota', correct: false },
      { text: 'Tesla', correct: true },
      { text: 'Mersedes-Benz', correct: false },
      { text: 'Lincoln', correct: false }
    ]
  },
  {
    question: '4. яка країна найбільш технологічно розвинута?',
    answers: [
      { text: 'США', correct: false },
      { text: 'Україна', correct: false },
      { text: 'Китай', correct: false },
      { text: 'Японія', correct: true }
    ]
  },
    {
      question: '5. в якому штаті розташована штаб-квартира Google?',
      answers: [
        { text: 'Каліфорнія', correct: true },
        { text: 'Вашингтон', correct: false },
        { text: 'Теxас', correct: false },
        { text: 'Аризона', correct: false }
        
      ]
    },
    {
      question: '6. в якому штаті розташована штаб-квартира Microsoft?',
      answers: [
        { text: 'Каліфорнія', correct: false },
        { text: 'Вашингтон', correct: true },
        { text: 'Теxас', correct: false },
        { text: 'Аризона', correct: false }
      ]
    },
    {
      question: '7. в якому році був створений Bitcoin',
      answers: [
        { text: '1998', correct: false },
        { text: '2020', correct: false },
        { text: '2008', correct: true },
        { text: '2007', correct: false }
      ]
    },
    {
      question: '8. в якому році була створена компанія nVidia?',
      answers: [
        { text: '2007', correct: false },
        { text: '1699', correct: false },
        { text: '2001', correct: false },
        { text: '1993', correct: true }
      ]
    },
    {
      question: '9. в якому році була створена компанія Intel?',
      answers: [
        { text: '2003', correct: false },
        { text: '2000', correct: false },
        { text: '1998', correct: false },
        { text: '1968', correct: true }
      ]
    },
    {
      question: '10. в якому році був створена компанія AMD?',
      answers: [
        { text: '1969', correct: true },
        { text: '2000', correct: false },
        { text: '2009', correct: false },
        { text: '1993', correct: false }
      ]
    },
    {
      question: '11. в якому році був створений перший комп"ютер?',
      answers: [
        { text: '1993', correct: false },
        { text: '1962', correct: false },
        { text: '1941', correct: true },
        { text: '1945', correct: false }
      ]
    },
    {
      question: '12. яка найдавніша операційна система?',
      answers: [
        { text: 'Windows', correct: false },
        { text: 'Linux', correct: false },
        { text: 'Mac os X', correct: false },
        { text: 'GM-HAA', correct: true }
      ]
    }
  ]