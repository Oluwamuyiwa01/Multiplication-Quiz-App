const num1 =Math.ceil( Math.random()*10);

const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const formEl = document.getElementById('form');

const inputEl = document.getElementById('input');

const scoreEl = document.getElementById("score")

const errorEl = document.getElementById('error');

const attemptEl = document.getElementById('attempt');

const missEl = document.getElementById('miss');

let attempt =JSON.parse(localStorage.getItem("attempt"));

let miss =JSON.parse(localStorage.getItem("miss"));

let score = JSON.parse(localStorage.getItem("score")); 

if(!score){
    score = 0;
}

if(!attempt){
    attempt = 0;
}

if(!miss){
    miss = 0;
}

questionEl.innerText = `What is ${num1} multiply by ${num2}?`

attemptEl.innerHTML = `Attempt: ${attempt}`;
scoreEl.innerHTML = `Score: ${score}`;
missEl.innerHTML = `Missed: ${miss}`

const correctAns = num1 * num2;

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    // console.log(userAns , typeof userAns);
    if(!userAns){
        // alert("Enter your answer")
       setTimeout( () =>{
        errorEl.style.display ="block";
       }, 10);
    }
    else{
        if(userAns === correctAns){
            score += 1;
            attempt += 1;
            // console.log(score)
            // console.log(attempt)
            updateAttempt();
           updateLocalStorage();
        }else{
            miss += 1;
            attempt += 1;
            updateAttempt();
            updatemiss();
            // console.log(score)
        // console.log(miss)

        }
    }

});


function updateAttempt(){
    localStorage.setItem("attempt" , JSON.stringify(attempt));
}

function updateLocalStorage(){
    localStorage.setItem("score" , JSON.stringify(score));
}

function updatemiss(){
    localStorage.setItem('miss', JSON.stringify(miss));
}



