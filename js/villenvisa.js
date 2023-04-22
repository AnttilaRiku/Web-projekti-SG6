const data = [
    {
        question: "Mikä on Suomen pääkaupunki?",
        a: "a. Helsinki",
        b: "b. Turku",
        c: "c. Tampere",
        d: "d. Vaasa",
        correct: "a",
        info:"Helsinki on ollut suomen pääkaupunki vuodesta 1812 lähtien. Tätä ennen pääkaupunkina toimi Turku.",
    },
    {
        question: "Mikä on maapallon suurin meri?",
        a: "a. Atlantti",
        b: "b. Näsijärvi",
        c: "c. Tyynimeri",
        d: "d. Laatokka",
        correct: "c",
        info:"Atlantti on maapallon suurin meri. Näsijärvi ja Laatokka ovat järviä. Atlantti on valtameri, mutta kuitenki pienempi kuin Tyynimeri.",
    },
    {
        question: "Mikä on Brasilian virallinen kieli?",
        a: "a. brasilia",
        b: "b. portugali",
        c: "c. espanja",
        d: "d. latina",
        correct: "b",
        info: "Brasilian virallinen kieli on portugali. Tämä johtuu siitä, että Brasilia on ollut portugalin siirtomaa. Portugali on maailman 6. puhutuin kieli.",
    },
    {
        question: "Monta valtiota kuuluu Euroopan Unioniin?",
        a: "a. 40",
        b: "b. 19",
        c: "c. 10",
        d: "d. 27",
        correct: "d",
        info:"Euroopan Unioniin kuuluu 27 jäsentä. Uusin jäsen on Kroatia joka on liittynyt Euroopan Unioniin 2013. Yhdistynyt kuningaskunta erosi EU:sta vuonna 2020.",
    },
    {
        question: "Mikä on Suomen korkein tunturi?",
        a: "a. Korvatunturi",
        b: "b. Halti",
        c: "c. Mustavuori",
        d: "d. Ellivuori",
        correct: "b",
        info:"Suomen korkein tunturi on Halti.",
    },

    
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
 

load();
questionEngine(questionIndex);


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
    document.getElementById("score").innerHTML = "";


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
        verdict = "Vastaus on väärin. Oikea vastaus on " + correctAnswer;
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
    return answer;
}
function publishResult() {
    document.getElementById("score").innerHTML= "Peli loppui. Pistemääräsi on " + score;
    questionIndex = 0;
    score = 0;
}