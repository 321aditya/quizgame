const quizData=[
    {
        question: "what is the age of alia",
        a : "20",
        b : "30",
        c : "34",
        d : "32",
        correct : "a",
    },{
        question: "who is our current CM",
        a : "modi",
        b : "yogi",
        c : "akhilesh",
        d : "kejrival",
        correct : "b",
    },
    {
        question: "what is the campus of iit k",
        a : "1100",
        b : "1000",
        c : "1050",
        d : "1150",
        correct : "c",
    },
    {
        question: "father of physics",
        a : "20",
        b : "30",
        c : "34",
        d : "32",
        correct : "a",
    },
    {
        question: "childrens day celebrated on which november",
        a : "20",
        b : "14",
        c : "15",
        d : "10",
        correct : "b",
    }
];
const quiz = document.getElementById("quiz");
const answerElems = document.querySelectorAll(".answer");
const question1 = document.getElementById("question");
const a_choice = document.getElementById("a-choice");
const b_choice = document.getElementById("b-choice");
const c_choice = document.getElementById("c-choice");
const d_choice = document.getElementById("d-choice");
const submbtn = document.getElementById("submit");

let currentQuiz=0;
let score=0;

loadquiz();
function loadquiz(){
    deselectChoices();
    const currentQuizData = quizData[currentQuiz];
    question1.innerText = currentQuizData.question;
    a_choice.innerText = currentQuizData.a;
    b_choice.innerText = currentQuizData.b;
    c_choice.innerText = currentQuizData.c;
    d_choice.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerElems.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;

        }
        
    });
    return answer;
}

function deselectChoices(){
    answerElems.forEach((answerEl)=>{
        answerEl.checked = false;
    });

}

submbtn.addEventListener("click",() =>{
    const answer = getSelected();
    console.log(answer);
    if(answer){
        if(answer===quizData[currentQuiz].correct){
            score++;
        }
       currentQuiz++;

       if(currentQuiz < quizData.length){
        loadquiz();
       }else{
        quiz.innerHTML= `<h2>
            you answered ${score} questions out of ${quizData.length}
        </h2> <button onclick = "location.reload()"> Reload </button>`;
        }
    }

});