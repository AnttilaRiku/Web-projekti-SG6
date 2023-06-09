const questionlist = [{
  question: "Mikä suloinen eläin on kuvassa?",
  a: "a. Pussirotta",
  b: "b. Mangusti",
  c: "c. Orava",
  d: "d. Siili",
  correct: "d",
  info: " Siili on piikikäs nisäkäslaji, joka on yöeläin. Täysikäsvuinen siili on noin 20-30 senttimetriä pitkä ja painaa 0,4 - 1,2 kilogrammaa. "
},

{
  question: "Mikä meidän kansallislintunakin tunnettu joutsenlaji on kuvassa?",
  a: "a. Kyhmyjoutsen",
  b: "b. Laulujoutsen",
  c: "c. Pikkujoutsen",
  d: "d. Mustajoutsen",
  correct: "b",
  info: " Laulujoutsen (Cygnus cygnus) on joutsenten sukuun kuuluva suuri, valkea sorsalintulaji. Sen nokka on keltainen, eikä nokan tyvessä ole mustaa kyhmyä toisin kuin kyhmyjoutsenella. Se on leimallisesti pohjoisen lintu, joka pesii Euraasian mantereen pohjoisosissa ja siirtyy talveksi etelämmäs sulan veden perässä."
},
{
  question: "Kuvassa olevan nokkosperhosen latinankielinen nimi on:",
  a: "a. Aglais urticae",
  b: "b. Papilio machaon",
  c: "c. Leptidea alba",
  d: "d. Leptidea ligea",
  correct: "a",
  info: " Nokkosperhonen on täpläperhosten heimoon kuuluva, Euroopassa elävä päiväperhonen. Se on kulttuuriympäristöjen tavallisimpia päiväperhosia. Perhoset talvehtivat aikuisina, minkä vuoksi se on usein myös kevään ensimmäisiä päiväperhosia. "
},

{
  question: "Minkä liiton logossa on kuvassa oleva saimaannorppa? ",
  a: "a. WWF",
  b: "b. Peta",
  c: "c. SLL",
  d: "d. Suomen vapaamuurarit",
  correct: "c",
  info: " Suomen luonnonsuojeluliitto on luonnon monimuotoisuutta, kestävää elämäntapaa, ympäristönsuojelua ja kulttuuriperinnön vaalimista edistävä valtakunnallinen kansalaisjärjestö. "
},

{
  question: "Mihin niskäslahkoon orava kuuluu?",
  a: "a. Petoeläimet",
  b: "b. Jyrsijät",
  c: "c. Kavioeläimet",
  d: "d. Sorkkaeläimet",
  correct: "b",
  info: " Orava on jyrsijöiden lahkoon kuuluva nisäkäslaji. Oravat ovat todella elinvoimainen laji suomessa ja esiintyy Euraasian pohjoisosien metsissä ja suurimmassa osassa Eurooppaa. "
},

{
  question: "Minkä läänin alueella esiintyy poroja eniten?",
  a: "a. Uusimaa",
  b: "b. Satakunta",
  c: "c. Lappi",
  d: "d. Karjala",
  correct: "c",
  info: " Poro on sarvellinen hirvieläin, jolla on lämpöä hyvin eristävä turkki. Sen ansiosta poro kestää pohjoisen kylmät talvet. Turkissa on peitinkarvat, joissa on eristeenä ilmalokeroita. "
},

{
  question: "Millä nimellä kuvassa oleva sinisorsa myös tunnetaan?",
  a: "a. Kukkasorsa",
  b: "b. Hamppusorsa",
  c: "c. Dänkkisorsa",
  d: "d. Heinäsorsa",
  correct: "d",
  info: " Juhlapukuisella koiraalla on vihreä pää ja kaula ja keltainen nokka sekä valkoinen kaularengas. Rinta on ruskea ja vatsa ja selkä ruskeanharmaat. Pyrstö on musta ja pyrstösulista keskimmäiset ovat ylöspäinkiertyneet. Naaras on väriltään ruskeankirjava, mutta päälaki ja silmäkulmajuova ovat muuta ruumista tummemmat. "
},

];

const imageFilenames = [
'1.jpg',
'2.jpg',
'3.jpg',
'4.jpg',
'5.jpg',
'6.jpg',
'7.jpg'
];


const image = document.querySelector('img');
const startBtn = document.getElementById("start");
const quizForm = document.getElementById("quiz-form");
const returnbtn = document.getElementById("returnbtn");
const tarkastabtn = document.getElementById("tarkasta");
const nextbtn = document.getElementById("next");
const questionamount = document.getElementById("questionamount");
const lead = document.getElementById("title");
const home = document.getElementById("homebtn");
const titleimg = document.getElementById("titleimg");

// Start quiz //
function startQuiz() {
startBtn.classList.add("hidden");
returnbtn.classList.add("hidden");
quizForm.classList.remove("hidden");
questionamount.classList.remove("hidden");
lead.classList.add("hidden");
titleimg.classList.add("hidden");
questionamount.innerText = `Kysymys ${currentQuestionIndex + 1} / ${questionlist.length}`;

loadCurrentQuestion();
}

startBtn.addEventListener("click", startQuiz);

const quiz = document.getElementById("quiz-form");
const questionElem = document.getElementById("question");
const optionAElem = document.getElementById("answa");
const optionBElem = document.getElementById("answb");
const optionCElem = document.getElementById("answc");
const optionDElem = document.getElementById("answd");
const infoElem = document.getElementById("info");
const scoreElem = document.getElementById('score');
const correctAnswer = questionlist.correct;

// Initialize the current question index & score to 0
let currentQuestionIndex = 0;
let score = 0;

// Function to load the current question and options into the quiz form
function loadCurrentQuestion() {
nextbtn.classList.add("hidden");
const currentQuestion = questionlist[currentQuestionIndex];
questionElem.innerText = currentQuestion.question;
optionAElem.innerText = currentQuestion.a;
optionBElem.innerText = currentQuestion.b;
optionCElem.innerText = currentQuestion.c;
optionDElem.innerText = currentQuestion.d;
infoElem.innerText = "";
questionamount.innerText = `Kysymys ${currentQuestionIndex + 1} / ${questionlist.length}`;
}

function checkAnswer(event) {
event.preventDefault();
tarkastabtn.classList.add("hidden");
nextbtn.classList.remove("hidden");
const selectedOption = document.querySelector('input[name="option"]:checked');
const answer = selectedOption ? selectedOption.value : '';

if (!selectedOption) { // Check if no option is selected
  infoElem.innerText = "Valitse yksi vaihtoehto vastaukseksi! ";
  tarkastabtn.classList.remove("hidden");
  return;
}

let verdict;
const currentQuestion = questionlist[currentQuestionIndex];
const correctAnswer = currentQuestion.correct;

if (selectedOption && selectedOption.labels[0].id === 'answa' && correctAnswer === 'a') {
  score++;
  verdict = 'Oikea vastaus!';
} else if (selectedOption && selectedOption.labels[0].id === 'answb' && correctAnswer === 'b') {
  score++;
  verdict = 'Oikea vastaus!';
} else if (selectedOption && selectedOption.labels[0].id === 'answc' && correctAnswer === 'c') {
  score++;
  verdict = 'Oikea vastaus!';
} else if (selectedOption && selectedOption.labels[0].id === 'answd' && correctAnswer === 'd') {
  score++;
  verdict = 'Oikea vastaus!';
} else {
  verdict = 'Vastaus on väärin. Oikea vastaus on ' + correctAnswer;
}
if (answer === correctAnswer) {
  score++;
}

document.getElementById("score").innerHTML = verdict;
document.getElementById("info").innerHTML = currentQuestion.info;

}


function loadNextQuestion(event) {
nextbtn.classList.add("hidden");
document.getElementById("info").innerHTML = "";
document.getElementById("score").innerHTML = "";
event.preventDefault();
tarkastabtn.classList.remove("hidden");
const selectedOption = document.querySelector('input[name="option"]:checked');

if (!selectedOption) {
  alert('Vastaa nyt edes jotain!');
  return;
}



document.querySelectorAll('input[type="radio"]').forEach((option) => {
  option.checked = false; // Reset the selected option
});

currentQuestionIndex++; // Move to the next question

// Update the question number and total number of questions
questionamount.innerText = `Kysymys ${currentQuestionIndex + 1} / ${questionlist.length}`;

//Animation Reset
infoElem.style.animation = 'none';
scoreElem.style.animation = 'none';
infoElem.offsetHeight;
scoreElem.offsetHeight;
infoElem.style.animation = null;
scoreElem.style.animation = null;

// Check if all questions have been answered
if (currentQuestionIndex >= questionlist.length) {
  document.getElementById("current-score").innerHTML = `Pistemääräsi lopussa: ${score}/${questionlist.length}`;
  publishResult();
  return;
}

document.getElementById("current-score").innerHTML = `Pistemääräsi: ${score}/7`;

const currentQuestion = questionlist[currentQuestionIndex];
document.getElementById("question").innerHTML = currentQuestion.question;
document.getElementById("answa").innerHTML = currentQuestion.a;
document.getElementById("answb").innerHTML = currentQuestion.b;
document.getElementById("answc").innerHTML = currentQuestion.c;
document.getElementById("answd").innerHTML = currentQuestion.d;
document.getElementById("question-img").src = `../img/RikuA_quizimg/${currentQuestionIndex + 1}.jpg`;
image.src = `question-img\\${imageFilenames[currentQuestionIndex]}`;
}

function publishResult() {

const feedback = document.getElementById("feedback");

if (score === 7) {
  feedback.innerHTML = "Vautsi vau! Olet todella kova luontotieteilijä jo. Jatka samaan malliin! :) Pistemääräsi oli " + score + "/" + questionlist.length + "<br><img src='../img/RikuA_quizimg/Great.png'>";
} else if (score >= 4) {
  feedback.innerHTML = "Hienosti meni! Jatka treenaamista, niin olet pienellä työllä kovakin luonnontieteilijä. Pistemääräsi oli " + score + "/" + questionlist.length + "<br><img src='../img/RikuA_quizimg/Good.png'>";
} else {
  feedback.innerHTML = "Nyt ei kyllä mennyt hyvin. Harjoittele vielä! Pistemääräsi oli: " + score + "/" + questionlist.length + "<br><img src='../img/RikuA_quizimg/fail.jpg'>";
}

currentQuestionIndex = 0;
score = 0;

feedback.classList.remove("hidden");
returnbtn.classList.remove("hidden");
quiz.classList.add("hidden");

}