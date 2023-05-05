//questions and answers
let questions = [

    {
        id: 1,
        question: "Mikä aine saa pullataikinan kohoamaan ?" ,
        answer:"Hiiva",
        options: [
            "Suola",
            "Jauhot",
            "Vesi",
            "Hiiva"
        ]
    },
    {
        id: 2,
        question: "Mikä leivonnainen kuuluu vappuun ?",
        answer: "Munkki",
        options: [
          "Keksi",
          "Munkki",
          "Piirakka",
          "Kääretorttu"
        ]
      },
      {
        id: 3,
        question: "Paljonko 1 litra on desilitroina (dl) ?",
        answer: "10dl",
        options: [
          "1dl",
          "50dl",
          "10dl",
          "1000dl"
        ]
      },
      {
        id: 4,
        question: "Kuinka usein lakanat olisi hyvä vaihtaa ?",
        answer: "Kahden viikon välein",
        options: [
          "Ei koskaan",
          "Kahden viikon välein",
          "Vuoden välein",
          "Päivittäin"
        ]
      },
      {
        id: 5,
        question: "Mikä ihmeaine toimii siivousaineena, pyykinhuuhteluaineena, hajunpoistajana, ruuuanlaitossa, säilönnässä jne. ?",
        answer: "Etikka",
        options: [
          "Vesi",
          "Suola",
          "Jauhot",
          "Etikka"
        ]
      },
];

//Start the questions and scoring from zero
let question_count = 0;
let points = 0;

// Wait for the webpage to finish loading before calling the show() function
window.onload = function(){
    show(question_count);
};

// Define the show() function, which takes a count parameter (the question number)
function show(count){
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

// Update the HTML of the question div to display the question and its options using HTML markup.
    question.innerHTML = `<h2>${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();
}

// the toggleActive() function adds click event listeners to the answer options
function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

// the next() function is called when the user clicks the "Next" button
function next(){

    if(question_count == questions.length -1){
        location.href = "pointsAnuV.html"; // redirect the user to a page displaying their final score if there are no more questions.
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML; // get the text content of the selected answer option

if(user_answer == questions[question_count].answer){
    points += 1;  // increment the points variable if the user's answer is correct
    sessionStorage.setItem("points",points); // store the updated points value in the browser's sessionStorage object
}
console.log(points);

question_count++; // increment the question_count variable
show(question_count); // call the show() function with the updated question_count variable as an argument
}

const yksi = "Vaatii vielä harjoittelua"
const kolme = "Hyvin suoriuduttu"
const neljä = "Melkein kaikki oikein, hienoa !"
const viisi = "Erinomaista, kaikki oikein !"


//get points
let user_points = sessionStorage.getItem("points");

//output
if(user_points <= 2 ){
    document.querySelector("span.points").innerHTML = user_points + '<br>' + yksi;
}

else if(user_points <= 3){
    document.querySelector("span.points").innerHTML = user_points + '<br>' +kolme;

}

else if(user_points = 4){
    document.querySelector("span.points").innerHTML = user_points + '<br>' + neljä;

}

else if(user_points = 5){
    document.querySelector("span.points").innerHTML = user_points + '<br>' +viisi;
}


