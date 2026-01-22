//
const quotes = [
  "honesty is the best policy",
  "practice makes perfect",
  "knowledge is power",
  "time is money",
  "actions speak louder than words",
  "patience is a virtue",
  "hard work pays off",
  "simplicity is the ultimate sophistication",
  "prevention is better than cure",
  "unity is strength",
  "health is wealth",
  "experience is the best teacher",
  "well begun is half done",
  "silence is golden",
  "truth will always prevail",
  "learning never exhausts the mind",
  "confidence is key to success",
  "discipline is the bridge to goals",
  "consistency creates results",
  "kindness costs nothing",
  "focus leads to achievement",
  "failure is the stepping stone to success",
  "dreams drive ambition",
  "wisdom comes with reflection",
  "success favors the prepared"
];


const button = document.querySelector('button');
const Quote = document.querySelector('h1');
button.addEventListener('click', () => {
   const index = Math.floor(Math.random()*20);

   Quote.textContent = quotes[index];
})





































