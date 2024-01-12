const myBtn= document.querySelector(".myBtn button");
const rulesBox= document.querySelector(".rulesBox");
const exitButton= document.querySelector(".buttons .exitButtons");
const continueButton= document.querySelector(".buttons .continueButtons");
const questions= document.querySelector(".questions");
const myOptionsList=document.querySelector('.myOptions');
const timeCount=document.querySelector(".timeCount .seconds");
const timeLine=document.querySelector(".questionsHeader .timeLine");
const resultBox =document.querySelector(".resultBox");
const restartQuiz =document.querySelector(".buttons .restart1");
const quitQuiz =document.querySelector(".buttons .quit");

quitQuiz.onclick = ()=>{
   window.location.reload();
}

restartQuiz.onclick = ()=>{
   questions.classList.add("activeQuiz"); 
   resultBox.classList.remove("activeResult"); 
   let que_count = 0; 
   let timeValue = 15; 

   let widthValue = 0;
   let userScore =0; 
   showQuestions(que_count);
   clearInterval(counter); 
   startTimer(timeValue)
   clearInterval(counterLine); 
   startTimerLine(widthValue); 
   nextBtn.style.display = "none"; 
   timeOff.textContent = "Time Left";

}
 

myBtn.onclick=()=>{
          rulesBox.classList.add("activeInfo");

}

exitButton.onclick=()=>{
      
          rulesBox.classList.remove("activeInfo");

}

continueButton.onclick=()=>{
            
          questions.classList.add("activeInfo");

          
          startTimerLine(0);
        
          startTimer(15);
         // alert("startTimer(15)");
          showQuestions(0);
         
        
             
         

}

const nextBtn=document.querySelector(".nextBtn");
let queCount=0;
let counter;
let counterLine;
let widthValue=0;
let timeValue=15;
let userScore=0;
nextBtn.onclick=()=>{
          if(queCount<questionsArray.length-1){
                    queCount++;
                    clearInterval(counter);
                    startTimer(timeValue);
                    clearInterval(counterLine);
                    startTimerLine(widthValue);
                    
                    nextBtn.style.display="none";
                   
                  
                    showQuestions(queCount);

                   
                   
                  

                   
                   

          }
          else{
            showResultBox();
             console.log("You have completed your task");       
          }

}




function showQuestions(index) {
  // alert("Show Index");

          const que_text = document.querySelector('.text');
         
         
          let optionTag='<div class="options">'+ questionsArray[index].options[0]+'</div>'
                        +'<div class="options">'+ questionsArray[index].options[1]+'</div>'
                        +'<div class="options">'+ questionsArray[index].options[2]+'</div>'
                        +'<div class="options">'+ questionsArray[index].options[3]+'</div>'
         
          let que_tag = "<span>"+questionsArray[index].numb+"."+questionsArray[index].question+"</span>"; 
           
         que_text.innerHTML = que_tag;
         myOptionsList.innerHTML=optionTag;
         const totalQuestion=document.querySelector(".totalQuestion");
         let totalQueTag='<p>'+questionsArray[index].numb +' of 5'+'</p>'
         totalQuestion.innerHTML=totalQueTag;
         let options=myOptionsList.querySelectorAll('.options');
         for(let i=0;options.length;i++){
          options[i].setAttribute("onclick","optionSelected(this)");

         }
          
         }

         let tickIcon='<div class="tick icon"><i class="fas fa-check"></i></div>';
         let crossIcon='<div class="cross icon"><i class="fas fa-times"></i></div>';

         function optionSelected(answer) {
            clearInterval(counter);
            clearInterval(counterLine);
         
          let userAnswer=answer.textContent;
          let correctAnswer=questionsArray[queCount].answer;
          let alloptions = myOptionsList.children.length;  
          //alert("Hi");

          if(userAnswer==correctAnswer){
           // answer.id="correct";
           userScore+=1;
           console.log(userScore);
          
                   answer.classList.add('correct');
                   answer.insertAdjacentHTML("beforeend",tickIcon);
                    //alert(answer)

          }
          else{
            //answer.id="inCorrect";
                   answer.classList.add('inCorrect');
                   answer.insertAdjacentHTML("beforeend",crossIcon);
                   for(let i=0;i<alloptions;i++){
                     if(myOptionsList.children[i].textContent == correctAnswer){
                       myOptionsList.children[i].setAttribute("class","options correct");
                       myOptionsList.children[i].insertAdjacentHTML("beforeend",tickIcon);
                     }
                   }
                            
          }

          for(let i=0;i<alloptions;i++){
            
            myOptionsList.children[i].classList.add("disabled");

          }

          nextBtn.style.display="block";
          
       

         }

function showResultBox(){
   rulesBox.classList.remove("activeInfo");
   questions.classList.remove("activeInfo");
   resultBox.classList.add("activeResult");
   let scoreText=document.querySelector(".scoreText");
   
   if(userScore > 3){
      let scoreTag = '<span>Congratulations You Got <p>'+ userScore +'</p> Out Of <p>'+questionsArray.length +'</p></span>';
       scoreText.innerHTML = scoreTag; 
   }
  else if(userScore > 1){
       let scoreTag = '<span>Carry On 👌 You Got <p>'+ userScore +'</p> Out Of <p>'+questionsArray.length +'</p></span>';
        scoreText.innerHTML = scoreTag; 
    }
    else{
       let scoreTag ='<span> I Am  Sorry You Got <p>'+ userScore +'</p> Out Of <p>'+ questionsArray.length +'</p></span>'; 
   
       scoreText.innerHTML = scoreTag;
   }


}


         function startTimer(time){
           // alert("hi");
           counter=setInterval(timer,1000);
           function timer(){
            timeCount.textContent=time;
            time--;
            if(time<9){
               let addZero=timeCount.textContent;
               timeCount.textContent=0+addZero;
               
            }

            if(time<0){
               clearInterval(counter);
               timeCount.textContent="00";
            }
           }
         }

         function startTimerLine(time){
            counterLine=setInterval(timer,50);
           function timer(){
            time+=1;
            timeLine.style.width=time +"px";
            if(time>319){
               clearInterval(counterLine);

            }

            }
         }
