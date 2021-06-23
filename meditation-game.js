document.addEventListener("DOMContentLoaded", function() {
	let input = document.getElementsByTagName("input"); 

	for (let button of input) {
		button.addEventListener("click", function() {
			
                    let gameType = this.getAttribute("data-type");   
                    
                    startSession(gameType); 
                     
                    let dataTime = this.getAttribute("data-time"); 
                    timerStart(dataTime);   

            
         
		}); 

     
	}  

}); 
    


function startSession(gameType){
    deleteContent(gameType);  
    setTimeout(giveWelcomeInstructions,  2000 , gameType); 
    setTimeout(giveMainContentFunction,  4000 , gameType);   
   

}   
 








function giveWelcomeInstructions(gameType){   

    
    var instructions = document.querySelector('#instruct');  
    if(gameType){
        alert('Okay , then read instructions and choose time of session. And then push play button to start your meditation with music')
    }
   
    if(gameType === 'mindfulness'){
        instructions.innerHTML = 'WELCOME TO MINDFULNESS MEDITATION' 
    } 
    else if(gameType === 'kindness'){
       instructions.innerHTML  = 'WELCOME TO KINDNESS MEDITATION'
    }  
   else if(gameType === 'transcendental'){
      instructions.innerHTML = 'WELCOME TO TRANSCENDENTAL MEDITATION'; 
    }
  else  if(gameType === 'zen'){
        instructions.innerHTML = 'WELCOME TO ZEN MEDITATION'
    }  

  else if(gameType === 'kundalini'){
       instructions.innerHTML = 'WELCOME TO KUNDALINI MEDITATION'
  } 

  else if(gameType === 'spiritual'){
      instructions.innerHTML = 'WELCOME TO SPIRITUAL MEDITATION'
  } 
  else if(gameType === 'vipassana'){
      instructions.innerHTML = 'WELCOME TO VIPASSANA MEDITATION';
  }

}   

function giveMainContentFunction(gameType){
   let mainInstructions = document.querySelector('#main-instructions'); 

   if(gameType === 'mindfulness'){
       mainInstructions.innerHTML = '1)Set aside some time. You don’t need a meditation cushion or bench, or any sort of special equipment to access your mindfulness skills—but you do need to set aside some time and space.<br>2)Observe the present moment as it is. The aim of mindfulness is not quieting the mind, or attempting to achieve a state of eternal calm. The goal is simple: we’re aiming to pay attention to the present moment, without judgment. Easier said than done, we know., 3) Let your judgments roll by. When we notice judgments arise during our practice, we can make a mental note of them, and let them pass.<br> 4)Return to observing the present moment as it is. Our minds often get carried away in thought. That’s why mindfulness is the practice of returning, again and again, to the present moment. '
   } 
   if(gameType === 'kindness'){
       mainInstructions.innerHTML = '1)Think of kindness as a strength, not as a weakness. Kindness isn’t an ally of foolishness or gullibility, but rather an ally of wisdom and courage., 2)Look for the good in yourself—not as a way to deny your difficulties or problems but as a way to broaden your outlook so it’s more truthful and balanced. Looking for the good in ourselves helps us see the good in others., 3)Remember that everyone wants to be happy. If we look deeply into any kind of behavior, we will see an urge to feel a part of something greater than our own limited sense of self, a desire to feel at home in this body and mind. This urge toward happiness is often twisted and distorted by ignorance, by not knowing where happiness is actually to be found. Remembering what we share inspires us toward kindness., 5) Recollect those who have helped or inspired us. Sometimes even a small act of kindness on someone’s part makes an essential difference for us. Cultivating gratitude is a way of honoring these people, and also a way of lifting our spirits and reminding us of the power of good-heartedness. '
   } 
   if(gameType === 'transcendental'){
       mainInstructions.innerHTML = ''
   }
}



function deleteContent(gameType){  
  
    var element = document.querySelector('.container');  
   if(gameType){
    element.remove();
   }        
}   






let timerInput = document.getElementById("time");
let timerShow = document.getElementById("timer");

function timerStart(dataTime){   
    if(dataTime === "5 min"){  
        timeMinut = 300; 
    }  
    if(dataTime === "10 min"){
        timeMinut = 600;
    } 
    
    if(dataTime === "15 min"){
        timeMinut = 900;
    } 
    if(dataTime === "20 min"){
        timeMinut = 1200; 
    }
    timer = setInterval(function () {
        seconds = timeMinut % 60
        minutes = timeMinut/60
        if (timeMinut <= 0) {
            clearInterval(timer);
            alert("Время закончилось");
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            timerShow.innerHTML = strTimer;
        }
        --timeMinut;
    }, 1000) 
} 

function timerStop(){

} 

  


var btn = document.getElementById('app');

function tooglePlay(){ 
    
    var pause = document.querySelector('.pause');
    var play = document.querySelector('.play'); 
    const audio = document.querySelector("#audio"); 

 
        var radio = new Audio();          
        if( play.classList.contains("active") )
        {
            play.classList.remove("active");
            pause.classList.add("active");
        }
        else
        {
            pause.classList.remove("active");
            play.classList.add("active");
        }  
    
        
        return audio.paused ? audio.play() : audio.pause();  
    
     } 
     
      
   btn.addEventListener('click', tooglePlay);
 

 