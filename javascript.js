var playing =false;
var score=0;
var timeRemaining=60;


//if click on the start/reset
document.getElementById("startReset").onclick=function(){
    //if playing
    if (playing ==true){
    	location.reload();//reload the page


    }else{  //if not playing
         playing=true;
         //set score=0
         score=0;
         document.getElementById("score").innerHTML=score;
       
         //show countdown box
         document.getElementById("timeRemaining").style.display='block';

         //reduce time by one second-60sec
         var counter=document.getElementById("remainingvalue");
                
            
                //time left?
                    //yes-continue
                    var countdown=setInterval(function () {
                    	timeRemaining-=1;

                    document.getElementById("remainingvalue").innerHTML=timeRemaining;
                               if (timeRemaining==0)
                               	clearInterval(countdown);
                    
                
	   
                    //no-game over
                    var gameover=setTimeout(function() {document.getElementById("over").style.display='block'; 	
                    },60000);
                    document.getElementById("over").innerHTML="<p>Game Over!</p><p>Your Score is " + score + ".</p>"

                     var tryAgain=setTimeout(function() {document.getElementById("wrongBox").style.display='block'; 	
                    },60000);
                     
                     var reset= setTimeout(function() {document.getElementById("wrongBox").style.display='block'; 	
                    },60000);
                     //document.getElementById("startReset").innerHTML="Start Game";   

                    },1000);
                    
                      
                    
         //chenge button to reset

         document.getElementById("startReset").innerHTML="Reset Game";
      

    }
}
       
QA();//generate Q & A


for(i=1;i<5;i+=1){
   document.getElementById("box" + i).onclick=function(){
 	if (playing==true);
 	 if (this.innerHTML==correctAnswer){//answer is correct
 	     score+=1; 	 
        document.getElementById("scoreBox").innerHTML="score:" + score;
        document.getElementById("correctBox").style.display='block'; 
        setTimeout(function() {
        	document.getElementById("correctBox").style.display='none'; 
        },1000);

        QA();

 	 }else{//answer is wrong
 	   document.getElementById("wrongBox").style.display='block'; 
       setTimeout(function() {
        	document.getElementById("wrongtBox").style.display='none'; 
        },1000);
 	 } 
       

}	


}


function QA() {

//generate firstNumber
 var firstNumber=Math.round(Math.random() * 9) +1;

 //generate secondNumber
 var secondNumber=Math.round(Math.random() * 9) +1; 
 
 correctAnswer=firstNumber*secondNumber;//correct Answer

 document.getElementById("questionBox").innerHTML = firstNumber+ "x" +secondNumber;

 var correctPosition = 1+ Math.round(3*Math.random());
 document.getElementById("box"+correctPosition).innerHTML=correctAnswer;

 //wrong answers for other boxes
 var answers=[correctAnswer];
 for (i=1; i<5;i++ ){
 	if (i != correctPosition){
 	var wronganswer;
 	do{
 		wronganswer=(Math.round(Math.random() * 9) +1)*(Math.round(Math.random() * 9) +1);
 	}while(answers.indexOf(wronganswer)>-1)
 	
    document.getElementById("box"+i).innerHTML=wronganswer;
           answers.push(wronganswer);
 }
 	
 }

	
}

 


 