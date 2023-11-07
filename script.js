const quizDB = [
    {
        question: "Q1 : What is the full form of HTML ?",
        a: "Hello To MY Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Langugae",
        d: "Hypertext Markup Language",
        ans: "option4",
    },
    {
        question: "Q2 : What is the full form of AIML ?",
        a: "All Machine Learning",
        b: "All Mechanical Lerning",
        c: "Artificial Intelligence And Machine Learning",
        d: "All I/O Machine Language",
        ans: "option3",
    },
    {
        question: "Q3 : 1. Who is the father of Computers?",
        a: "James Gosling ",
        b: "Charles Babbage",
        c: "Dennis Ritchie",
        d: "Bjarne Stroustrup",
        ans: "option2",
    },
    {
        question: "What is the full form of CPU?",
        a: "Computer Processing Unit",
        b: "Computer Principle Unit",
        c: "Central Processing Unit",
        d: "Control Processing Unit",
        ans: "option3",
    }]

const questions=document.querySelector('.questions')
const label_option1=document.querySelector('#label_option1')
const label_option2=document.querySelector('#label_option2')
const label_option3=document.querySelector('#label_option3')
const label_option4=document.querySelector('#label_option4')
const submit=document.querySelector('#submit')

const answers = document.querySelectorAll('.answer')

const showscore = document.querySelector('#scoreid');


let questionCount = 0;
let score =0;
const loadQuestion = ()=>{
    const questionlist = quizDB[questionCount];
    questions.innerText = questionlist.question;
    label_option1.innerText =questionlist.a;
    label_option2.innerText =questionlist.b;
    label_option3.innerText =questionlist.c;
    label_option4.innerText =questionlist.d;
}




loadQuestion();

const getCheckAnswer = () => {
    let answer ;

    answers.forEach((curAnsElem )=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;


};
const deselectAll = ()=>{
    answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}
submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer===quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
        showscore.innerHTML =`
        <h3> Your Score : ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;
        showscore.classList.remove('scoreground');
        
    }
})

