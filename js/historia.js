const data = [
    {
        question: "Kuka oli Urho Kekkonen?",
        a: "a. kelloseppä",
        b: "b. merivartija",
        c: "c. presidentti",
        d: "d. ohjelmoija",
        correct: "c",
        info:"Urho Kekkonen oli kahdeksas Suomen tasavallan presidentti ja suomalainen poliitikko. Hän oli tasavallan istuva presidentti yhtäjaksoisesti vuodesta 1956 alkuvuoteen 1982, yli 25 vuoden ajan. Viimeinen presidenttikausi jäi kesken sairauden takia.",
    },
    {
        question: "Milloin Suomesta tuli itsenäinen?",
        a: "a. vuonna 2000",
        b: "b. vuonna 1523",
        c: "c. vuonna 1917",
        d: "d. vuonna 1900",
        correct: "c",
        info:"Suomen itsenäistyminen oli tapahtumasarja, jonka tuloksena Venäjän keisarikuntaan vuodesta 1809 lähtien kuulunut autonominen suuriruhtinaskunta vuonna 1917 muuttui itsenäiseksi valtioksi. Itsenäistymismahdollisuuden käsittely Suomessa alkoi keväällä 1917. Itsenäisyysjulistus hyväksyttiin Suomen eduskunnassa 6. joulukuuta samana vuonna. Ennen Suomen itsenäistymistä maahan olivat vaikuttaneet sortovuodet, joiden aikana suomalaiset vähitellen menettivät luottamuksensa Venäjän keisariin Suomen erityisaseman turvaajana.",
    },
    {
        question: "Milloin euro tuli maksuvälineenä käyttöön Suomessa?",
        a: "a. vuonna 1600",
        b: "b. vuonna 1850",
        c: "c. vuonna 1998",
        d: "d. vuonna 2001",
        correct: "d",
        info: "Euro on Euroopan unionin yhteinen valuutta, joka otettiin käyttöön tilivaluuttana 1. tammikuuta 1999 ja käteisvaluuttana kahdessatoista EU-maassa 1. tammikuuta 2002.",
    },
    {
        question: "Mikä oli suomen pääkaupunki ennen Helsinkiä?",
        a: "a. Lahti",
        b: "b. vaasa",
        c: "c. Turku",
        d: "d. Lapua",
        correct: "c",
        info:"Helsinki on ollut Suomen pääkaupunki vuodesta 1812 alkaen. Sitä ennen pääkaupunkina oli Turku.",
    },
    {
        question: "Mikä oli valuuttana ennen euroa?",
        a: "a. frangi",
        b: "b. dollari",
        c: "c. kruunu",
        d: "d. markka",
        correct: "d",
        info:"Markka oli Suomen rahayksikkö vuoteen 2002, jolloin otettiin käyttöön Euroopan unionin yhteisvaluutta euro.",
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
const testChecked = document.getElementById("testi");
testChecked.innerHTML = "tarkista";


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
    //document.getElementById("info2").innerHTML= questionIndex;
    clearSelection();
    const question = data[index];
    correctAnswer = question.correct;
    questionInput.innerText = question.question;
    a_option.innerText = question.a;
    b_option.innerText = question.b;
    c_option.innerText = question.c;
    d_option.innerText = question.d;
    info = question.info;
}
function changeButton() {
    let buttonText =testChecked.innerText;
    if(buttonText == "tarkista"){
        checkAns();
        testChecked.innerHTML = "seuraava";
    } else{
        load();
        testChecked.innerHTML = "tarkista";
    }
    //document.getElementById("info2").innerText= "arvo" + buttonText;
}

function checkAns() {
   let answer = getAnswered();
   document.getElementById("info2").innerHTML ="";
   if(answer == undefined) {
    document.getElementById("info2").innerHTML = "1 vaihtoehto täytyy olla valittuna jatkaaksesi!";
    return;
   }
    let verdict;
 
   

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
  
    return answer;
}

function publishResult() {
    document.getElementById("score").innerHTML= "Peli loppui. Pistemääräsi on " + score;
    questionIndex = 0;
    score = 0;
}
/*const data = [
    {
        question: "Kuka oli Urho Kekkonen",
        a: "a. pappi",
        b: "b. maanviljelijä",
        c: "c. presidentti",
        d: "d. orja",
        correct: "c",
        info:"Urho Kekkonen oli kahdeksas Suomen tasavallan presidentti ja suomalainen poliitikko. Hän oli tasavallan istuva presidentti yhtäjaksoisesti vuodesta 1956 alkuvuoteen 1982, yli 25 vuoden ajan. Viimeinen presidenttikausi jäi kesken sairauden takia. Lähde: Wikibedia",
    },
    {
        question: "Milloin Suomesta tuli itsenäinen?",
        a: "a. vuonna 2000",
        b: "b. vuonna 1523",
        c: "c. vuonna 1917",
        d: "d. vuonna 1900",
        correct: "c",
        info:"Suomen itsenäistyminen oli tapahtumasarja, jonka tuloksena Venäjän keisarikuntaan vuodesta 1809 lähtien kuulunut autonominen suuriruhtinaskunta vuonna 1917 muuttui itsenäiseksi valtioksi. Itsenäistymismahdollisuuden käsittely Suomessa alkoi keväällä 1917. Itsenäisyysjulistus hyväksyttiin Suomen eduskunnassa 6. joulukuuta samana vuonna. Ennen Suomen itsenäistymistä maahan olivat vaikuttaneet sortovuodet, joiden aikana suomalaiset vähitellen menettivät luottamuksensa Venäjän keisariin Suomen erityisaseman turvaajana. Lähde: Wikibedia",
    },
    {
        question: "Milloin euro tuli maksuvälineenä käyttöön Suomessa?",
        a: "a. vuonna 1600",
        b: "b. vuonna 1850",
        c: "c. vuonna 1998",
        d: "d. vuonna 2001",
        correct: "d",
        info: "Euro on Euroopan unionin yhteinen valuutta, joka otettiin käyttöön tilivaluuttana 1. tammikuuta 1999 ja käteisvaluuttana kahdessatoista EU-maassa 1. tammikuuta 2002. Lähde: Wikibedia",
    },
    {
        question: "Mikä oli suomen pääkaupunki ennen Helsinkiä?",
        a: "a.Oulu",
        b: "b.Tampere",
        c: "c. Turku",
        d: "d. Jyväskylä",
        correct: "c",
        info:"Helsinki on ollut Suomen pääkaupunki vuodesta 1812 alkaen. Sitä ennen pääkaupunkina oli Turku. Lähde: peda.net",
    },
    {
        question: "Mikä oli valuuttana ennen euroa?",
        a: "a. euro",
        b: "b. jeni",
        c: "c. kruunu",
        d: "d. markka",
        correct: "d",
        info:"Markka oli Suomen rahayksikkö vuoteen 2002, jolloin otettiin käyttöön Euroopan unionin yhteisvaluutta euro. Lähde: itsenäisyys100.fi",
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
const formi = document.getElementById("formi");
const check = document.getElementById("check");
check.innerHTML= "testi";

const startquiz= document.getElementById("start");
localStorage.setItem("sukunimi", "Pitkänen");
let test = localStorage.getItem("sukunimi");
document.getElementById("testi").innerHTML= "plaa";
//load(); 

//document.getElementById("formi").style.display = 'none';

function startquiz(){
//startquiz.classList.add("hidden");
 //document.getElementById("formi").style.display = 'block';  


    load();
}


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
    event.preventDefault();
    document.getElementById("info").innerHTML = "asw";
    document.getElementById("testi").innerHTML= "jbpgejbjofv";
    
    

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
    document.getElementById("info").innerHTML= info ;
}

function getAnswered() {
    let answer;
    answerInputs.forEach(answerInput => {
        if(answerInput.checked) {
            answer = answerInput.id;
        }
    })
   document.getElementById("info2").innerHTML= answer;
    return answer;
}

function publishResult() {
    document.getElementById("score").innerHTML= "Peli loppui. Pistemääräsi on " + score;
    questionIndex = 0;
    score = 0;
}*/