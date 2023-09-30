
const questionE1 = document.getElementById("question");
const submit = document.getElementById("submit");
const scoreE1 = document.getElementById("score");
const inputE1 = document.getElementById("input");

let score = 0;

let correctAns = 0

const getRandomNumbers = ()=>{
   const num1 = Math.ceil (Math.random()*10) ;
   const num2 = Math.ceil (Math.random()*10) ;
   correctAns = num1*num2;
   questionE1.innerText = `What is ${num1} multiply by ${num2}?`;
   inputE1.value = ""
   
}



getRandomNumbers() 

submit.addEventListener("click",(e)=>{   

   e.preventDefault() 
   const userAns = +inputE1.value;   
   console.log(typeof userAns)
   if(userAns === correctAns){
    score++;
    console.log(score);
    getRandomNumbers() 
    
   }else{
    score--;

    console.log(score);
   }
   scoreE1.innerText = parseInt (score);

});







