const options = document.querySelector('.options');
const question = document.querySelector('.question');
const nextButton = document.querySelector('.next');
const answers = document.querySelectorAll('.options button');
const container = document.querySelector(".container");
const quiz = document.querySelector(".quiz");
const result = document.querySelector(".result");


const questionList = [

{
    "type": "multiple",
    "difficulty": "medium",
    "category": "Science: Computers",
    "question": "How many cores does the Intel i7-6950X have?",
    "correct_answer": "10",
    "incorrect_answers": [
    "12",
    "8",
    "4"
]
},
{
    "type": "multiple",
    "difficulty": "medium",
    "category": "Science: Computers",
    "question": "Which of the following is a personal computer made by the Japanese company Fujitsu?",
    "correct_answer": "FM-7",
    "incorrect_answers": [
    "PC-9801",
    "Xmillennium ",
    "MSX"
    ]
  },
{
    "type": "multiple",
    "difficulty": "medium",
    "category": "Science: Computers",
    "question": "What is the name of the default theme that is installed with Windows XP?",
    "correct_answer": "Luna",
    "incorrect_answers": [
    "Neptune",
    "Whistler",
    "Bliss"
    ]
}
] 

let no_of_questions = questionList.length;
let question_number = 0;
let score = 0;

// Generates a new question
function choice(question_number){
    console.log(`Question number : ${question_number}`);
     answers.forEach((optionBtn)=>{
        optionBtn.disabled = false;
        optionBtn.style.backgroundColor = '#ffff';
        optionBtn.style.color = 'Black'
    })
    question.innerText = `${question_number+1}. ${questionList[question_number]['question']}`;
    let option = [];
    let wrongAnswers = questionList[question_number]['incorrect_answers']
    for (opt of wrongAnswers){
        option.push(opt);
    }
    let correctAnswer = questionList[question_number]['correct_answer'];
    option.push(correctAnswer);
    count = 0;
    answers.forEach((element)=>{
        element.innerText = option[count]
        count++;
    })
    }

choice(question_number);

// Checks answer 
function check_answer(user_choice){
    console.log(`${question_number}`);
    ans = questionList[question_number]['correct_answer'];
    console.log(`${ans}`);
    if (element.innerText === ans){
            score += 1;
            element.style.backgroundColor = 'green';
            element.style.color = 'white'; 
            answers.forEach((el)=>{
                el.disabled = true;
            })
        }
    else{
            element.style.backgroundColor = 'red';
            element.style.color = 'white';
            answers.forEach((el)=>{
                if (el.innerText === ans){
                    el.style.backgroundColor = "green";
                    el.style.color = "white";    
                }
                el.disabled = true;
            })
        }
        nextButton.hidden = false;

}

options.addEventListener('click', (e)=>{
    if(e.target.tagName === 'BUTTON'){
        element = e.target;
        check_answer(element.innerText);
    }
})

function nextQuestion(){
   
    if (question_number < questionList.length-1){
        question_number += 1;
        choice(question_number);
        nextButton.hidden = true;
    }
    else{
        quiz.hidden = true;
        result_text =document.createElement('p');
        result_text.innerText = `Your score is ${score}`;
        result.hidden = false;
        result.appendChild(result_text);
        nextButton.innerText = "Play Again";
    }
}

function playAgain(){
    question_number = 0;
    score = 0;
    result.innerText = '';
    result.hidden = true;
    nextButton.innerText = 'Next';
    choice(question_number);
    quiz.hidden = false;

}

nextButton.addEventListener('click', (e)=>{
    if (e.target.innerText === 'Next'){
        nextQuestion();
    }
    else if (e.target.innerText === 'Play Again'){
        playAgain();
    }
});
