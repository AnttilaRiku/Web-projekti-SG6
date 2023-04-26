const data = [
    {
        question: "Mikä on maailman suurin valtameri?",
        a: "a. Atlantin valtameri",
        b: "b. Intian valtameri",
        c: "c. Tyynenmeri",
        d: "d. Pohjoinen jäämeri",
        correct: "c",
        info: "Tyyni valtameri on maailman suurin valtameri. Se sijaitsee Tyynenmeren tulirenkaalla, joka on yksi maailman aktiivisimmista tulivuorivyöhykkeistä. Lähde: Wikipedia",
    },
    {
        question: "Mikä on maailman korkein vuori?",
        a: "a. K2",
        b: "b. Mount Everest",
        c: "c. Kilimanjaro",
        d: "d. Matterhorn",
        correct: "b",
        info: "Mount Everest on maailman korkein vuori, joka sijaitsee Himalajalla Nepalissa ja Kiinassa. Se on 8 848 metriä korkea. Lähde: Wikipedia",
    },
    {
        question: "Mikä on maailman suurin manner?",
        a: "a. Australia",
        b: "b. Etelä-Amerikka",
        c: "c. Pohjois-Amerikka",
        d: "d. Aasia",
        correct: "d",
        info: "Aasia on maailman suurin manner, joka kattaa noin 44,58 miljoonaa neliökilometriä. Se sijaitsee Euroopan ja Tyynenmeren välissä ja se rajoittuu pohjoisessa Arktiseen valtamereen, lännessä Eurooppaan ja Itä-Aasiaan sekä etelässä Intian valtamereen. Lähde: Wikipedia",
    },
    {
        question: "Mikä on maailman suurin järvijärjestelmä?",
        a: "a. Suurten järvien järjestelmä",
        b: "b. Baikaljärvi",
        c: "c. Jäämeren ja Itämeren välissä olevat järvet",
        d: "d. Araljärvi",
        correct: "a",
        info: "Suurten järvien järjestelmä on Pohjois-Amerikassa sijaitseva järvijärjestelmä, johon kuuluu viisi suurta makean veden järveä: Ylimmäinenjärvi, Huronjärvi, Michiganjärvi, Eriejärvi ja Ontariojärvi. Se on maailman suurin makean veden järvijärjestelmä. Lähde: Wikipedia",
    },
    {
        question: "Mikä on maailman suurin saari?",
        a: "a. Grönlanti",
        b: "b. Borneo",
        c: "c. Australia",
        d: "d. Madagaskar",
        correct: "a",
        info: "Grönlanti on Tanskalle kuuluva itsehallintoalue ja maailman suurin saari Pohjois-Atlantin ja Pohjoisen jäämeren välissä, Grönlannin pinta-ala on noin 2,17 miljoonaa neliökilometriä. Lähde: Wikipedia",

    }
];

let questionIndex = 0;
let correctAnswer;
let score = 0;
let questionCount = data.length;
let finalResult = document.getElementById("score");
let info;
const  questionInput = document.getElementById("question");
const  a_option = document.getElementById("opt1");
const  b_option = document.getElementById("opt2");
const  c_option = document.getElementById("opt3");
const  d_option = document.getElementById("opt4");
const answerInputs = document.querySelectorAll(".option");
const info1 = document.getElementById("info");

load();

function load() {
    document.getElementById("info").innerHTML ="";
   if(questionIndex < questionCount) {
        questionEngine(questionIndex);
        document.getElementById("quiz_info").innerHTML = "Kysymys " + (questionIndex + 1) + "/" + questionCount;
    } else {
        publishResult();
    }
}

function clearSelection() {
answerInputs.forEach(answerInput => answerInput.checked = false);
document.getElementById("score").innerHTML="" ;
}

function questionEngine (index) {

    clearSelection();
    const question = data[index]
    correctAnswer = question.correct;
    questionInput.innerText = question.question;
    a_option.innerText = question.a;
    b_option.innerText = question.b;
    c_option.innerText = question.c;
    d_option.innerText = question.d;
    info = question.info;
}

function checkAns() {
    let answer = getAnswered();
    let verdict;
    document.getElementById("info").innerHTML = "asw";

    questionIndex++;

    if (answer == "option1" && correctAnswer == "a") {
        score++;
        verdict = "Oikea vastaus";
    } else if (answer == "option2" && correctAnswer == "b") {
        score++;
        verdict = "Oikea vastaus";
    }else if (answer == "option3" && correctAnswer == "c") {
        score++;
        verdict = "Oikea vastaus";
    }else if (answer == "option4" && correctAnswer == "d") {
        score++;
        verdict = "Oikea vastaus";
    } else {
        verdict = "vastaus on väärin. Oikea vastaus on " + correctAnswer;
    }
    document.getElementById("score").innerHTML= verdict;
    document.getElementById("info").innerHTML= info;
}

function getAnswered() {
    let answer;
    answerInputs.forEach(answerInput => {
        if(answerInput.checked) {
            answer = answerInput.id;
        }
    })
   // document.getElementById("info2").innerHTML= answer;
    return answer;
}

function publishResult() {
    document.getElementById("score").innerHTML= "Peli loppui. Pistemääräsi on " + score;
    questionIndex = 0;
    score = 0;
}