const zodiacSigns = [ "Capricorn" , " Aquarius", " Pisces", "Aries", "Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"];

// based on date , 
const compliments = [
  "You are amazing",
  "You learn very fast",
  "Your discipline is inspiring",
  "You have great focus",
  "You are improving every day",
  "Your mindset is strong",
  "You don’t give up easily",
  "You are मेहनती (hardworking)",
  "Your consistency will pay off",
  "You think clearly",
  "You are becoming skilled",
  "You handle challenges well",
  "You are self-driven",
  "You respect your goals",
  "You are building a strong future",
  "You take responsibility",
  "You are focused on growth",
  "You are smart and practical",
  "You stay calm under pressure",
  "You are learning from mistakes",
  "You have good problem-solving skills",
  "You are becoming confident",
  "You are disciplined with time",
  "You believe in self-improvement",
  "You are developing strong habits",
  "You are mentally tough",
  "You are committed to success",
  "You are creating your own path",
  "You don’t depend on luck",
  "You work silently",
  "You will achieve big goals"
];

const victimCardCompliments = [
  "You care deeply, even when others don’t reciprocate",
  "You feel emotions more strongly than most people",
  "You give your best even when unappreciated",
  "You stay kind despite being hurt",
  "You carry pain silently",
  "You often put others before yourself",
  "You expect sincerity because you are sincere",
  "You try to understand everyone",
  "You forgive more than you should",
  "You hold on even when it’s difficult",
  "You invest emotionally without guarantees",
  "You stay loyal even when ignored",
  "You hope for fairness in unfair situations",
  "You feel responsible for others’ feelings",
  "You blame yourself more than necessary",
  "You stay soft in a hard world",
  "You keep trying even after disappointment",
  "You feel deeply and that’s your strength",
  "You struggle silently but keep going",
  "You deserve the care you give to others"
];


const recommendation = [
  "Take a short break and reset your mind",
  "Focus on one task at a time",
  "Write down your goals clearly",
  "Avoid comparing your journey with others",
  "Practice discipline, not motivation",
  "Sleep on time and wake up early",
  "Reduce screen time before bed",
  "Read at least 10 pages daily",
  "Practice gratitude every morning",
  "Exercise even if it’s just walking",
  "Stop overthinking and start doing",
  "Learn to say no when needed",
  "Protect your mental energy",
  "Be consistent, not perfect",
  "Spend time improving one skill",
  "Avoid distractions during work hours",
  "Review your progress weekly",
  "Eat healthy and stay hydrated",
  "Accept mistakes and move forward",
  "Limit social media usage",
  "Build habits that support your goals",
  "Focus on what you can control",
  "Trust the process",
  "Take responsibility for your actions",
  "Choose growth over comfort",
  "Practice self-discipline daily",
  "Don’t wait for the perfect moment",
  "Keep learning, even slowly",
  "Surround yourself with positive people",
  "Stay patient and persistent"
];


const prediction = [
  "You will earn money through skills, not luck",
  "You will stop depending on others financially",
  "You will build multiple income sources",
  "You will understand the value of money",
  "You will stop wasting money impulsively",
  "You will start saving consistently",
  "You will learn how money works",
  "You will increase your income year by year",
  "You will turn knowledge into income",
  "You will become financially disciplined",
  "You will invest wisely, not emotionally",
  "You will escape paycheck-to-paycheck life",
  "You will create value and get paid for it",
  "You will attract better financial opportunities",
  "You will respect money and time equally",
  "You will build long-term wealth",
  "You will stop fearing money conversations",
  "You will earn with confidence",
  "You will control money instead of money controlling you",
  "You will secure your future financially"
];



const form = document.getElementById('astroform')

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    
    const surname = document.getElementById('surname').value;
    
    const day = parseInt( document.getElementById('day').value);
    
    const month = parseInt( document.getElementById('month').value);
    
    const year = parseInt ( document.getElementById('year').value);


    const text = ` hi ${name} ${surname} , your Zodiac Sign is ${zodiacSigns[month-1]}
    ${compliments[day - 1]}. ${victimCardCompliments[year%20]}. ${recommendation[(day*month)%30]}. ${prediction[(name.length*surname.length)%20]}`;

    document.getElementById('result').textContent = text;
})

































