// Toggle Ingredients List
const toggleIngredients = document.getElementById('toggleIngredients');
const ingredientsList = document.getElementById('ingredientsList');
toggleIngredients.addEventListener('click', () => {
  ingredientsList.style.display = ingredientsList.style.display === 'none' || ingredientsList.style.display === '' ? 'block' : 'none';
});

// Toggle Steps List
const toggleSteps = document.getElementById('toggleSteps');
const stepsList = document.getElementById('stepsList');
toggleSteps.addEventListener('click', () => {
  stepsList.style.display = stepsList.style.display === 'none' || stepsList.style.display === '' ? 'block' : 'none';
});

// Start Cooking Functionality
let currentStep = 0;
const steps = document.querySelectorAll('.steps li');
const startCookingBtn = document.getElementById('startCooking');
let timerStarted = false; // To prevent multiple timer starts
let time = 0;
let timerInterval;
const timerDisplay = document.getElementById('timerDisplay');

startCookingBtn.addEventListener('click', () => {
  if (!timerStarted) {
    startTimer(); // Start the timer once the "Start Cooking" button is clicked
    timerStarted = true;
  }
  
  if (currentStep < steps.length) {
    steps[currentStep].classList.add('active');
    currentStep++;
  }
});

// Timer (Bonus Feature)
function startTimer() {
  timerInterval = setInterval(() => {
    time++;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `Time: ${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }, 1000);
}
