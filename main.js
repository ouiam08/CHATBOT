//constantes qui capte la voix
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//instancier un objet de la constante declarée
const recognition = new SpeechRecognition();

let tracks=[];
tracks[0]= new Audio('./tracks/badRomance.mp4');
tracks[1]= new Audio('./tracks/backToBlack.mp4');
tracks[2]= new Audio('./tracks/believe.mp4');
tracks[3]= new Audio('./tracks/dancingOnMyOwn.mp4');
tracks[4]= new Audio('./tracks/dustInTheWind.mp4');
tracks[5]= new Audio('./tracks/girlsJustWantToHaveFun.mp4');
tracks[6]= new Audio('./tracks/help.mp4');
tracks[7]= new Audio('./tracks/inTheEnd.mp4');
tracks[8]= new Audio('./tracks/iWaMadEForLovingYou.mp4');
tracks[9]= new Audio('./tracks/iWantToBreakFree.mp4');
tracks[10]= new Audio('./tracks/knockingOnHeavensDoor.mp4');
tracks[11]= new Audio('./tracks/legoHouse.mp4');
tracks[12]= new Audio('./tracks/loveStory.mp4');
tracks[13]= new Audio('./tracks/myImmortal.mp4');
tracks[14]= new Audio('./tracks/oceanEyes.mp4');
tracks[15]= new Audio('./tracks/rude.mp4');
tracks[16]= new Audio('./tracks/takeOnMe.mp4');
tracks[17]= new Audio('./tracks/thriller.mp4');
tracks[18]= new Audio('./tracks/Thunderstruck.mp4');
tracks[19]= new Audio('./tracks/unconditionally.mp4');
tracks[20]= new Audio('./tracks/whatsUp.mp4');
tracks[21]= new Audio('./tracks/whenYoureGone.mp4');
tracks[22]= new Audio('./tracks/windOFChange.mp4');
tracks[23]= new Audio('./tracks/withoutMe.mp4');
      

let index = [];
let qst =0;
let score =0;
let song;
let gameSongs = [];
let rightAnswer;
let modeGame = 0;
let answers = [];


//si on clique sur le mic la recignisation de la voix est demarer
let mic = document.getElementById("mic");
mic.addEventListener("click", function(){
    mic.style.background='rgb(95, 140, 173)';
    recognition.start();
    console.log("Activated");
})

//traitement pour recevoir le text saisie en input
document.getElementById("inp_text").focus();
          document.getElementsByTagName("body")[0].addEventListener("keypress" , function (e){
              if(e.key == "Enter"){
                  send();
              }
          });
          document.getElementById("send").addEventListener("click" , send);

          //fonction qui affiche le msg saisie par utilisateur en input et affiche la reponse
          function send(){
            //cette constante va lire le resultat a la fin du traitement
            const speech = new SpeechSynthesisUtterance();
              var text = document.getElementById("inp_text").value;
              

              if(text == ""){

              }
              else{
                

                var request = document.createElement("div");
                request.className = "request";
                request.innerText = text;
                document.getElementsByClassName("main")[0].appendChild(request);
                document.getElementById("inp_text").value = "";
                var response = document.createElement("div");
                  data.forEach(element => {
                    element.patterns.forEach(el => {
                    if( el.toLowerCase()==text.toLowerCase()){
                    response.className = "response";
                    response.innerText = element.responses[Math.floor(Math.random() * element.responses.length)];
                    speech.text = response.innerText;
                    setTimeout(function (){
                        document.getElementsByClassName("main")[0].appendChild(response);
                        var a = document.getElementsByClassName("main")[0].scrollHeight;
                        document.getElementsByClassName("main")[0].scrollTop = a+100;
                    } , 1000)
                }
               })});
               if (text.includes("time") ) {
                response.className = "response";
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date+' '+time;
                response.innerText = "It is:  "+ time;
                speech.text = response.innerText;
                setTimeout(function (){
                  document.getElementsByClassName("main")[0].appendChild(response);
                  var a = document.getElementsByClassName("main")[0].scrollHeight;
                  document.getElementsByClassName("main")[0].scrollTop = a+100;
              } , 1000)
              }
              if (text.includes("temps") ) {
                response.className = "response";
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = date+' '+time;
                response.innerText = "C'est:  "+ time;
                speech.text = response.innerText;
                setTimeout(function (){
                  document.getElementsByClassName("main")[0].appendChild(response);
                  var a = document.getElementsByClassName("main")[0].scrollHeight;
                  document.getElementsByClassName("main")[0].scrollTop = a+100;
              } , 1000)
              }
  
                //code that oppen new browsers if asked
               if (text.split(" ")[0].trim().toLowerCase() === "open"||text.split(" ")[0].trim().toLowerCase() === "ouvrir") {
              response.className = "response";
              response.innerText = "Openning ...";
              speech.text = response.innerText;
              setTimeout(function (){
                document.getElementsByClassName("main")[0].appendChild(response);
                var a = document.getElementsByClassName("main")[0].scrollHeight;
                document.getElementsByClassName("main")[0].scrollTop = a+100;
            } , 1000)
                window.open(`https://www.${text.split(" ")[1].trim().toLowerCase()}.com`, "_blank");
            }
         
            dataGame.forEach(element => {
              element.patterns.forEach(el => {
              if( el.toLowerCase()==text.toLowerCase()){
                 
             modeGame = 1;
  
              response.className = "response";
              response.innerText = element.responses[Math.floor(Math.random() * element.responses.length)];
              speech.text = response.innerText;
              setTimeout(function (){
                  document.getElementsByClassName("main")[0].appendChild(response);
                  var a = document.getElementsByClassName("main")[0].scrollHeight;
                  document.getElementsByClassName("main")[0].scrollTop = a+100;
              } , 1000)
              }      
         })});
          if(modeGame == 1){
         
           startGame.forEach(element => {

          element.patterns.forEach(el => {
          if( el.toLowerCase()==text.toLowerCase()){
             
            
          
            for (let i = 0; 6 > gameSongs.length; i++) {
              random = Math.floor(Math.random() * 23) + 1;
        
              if(gameSongs.includes(random)) {
              } else {
                  gameSongs.push(random)
                  index[i]=random;
                 
  
              }
             } 
             
            console.log(gameSongs);   
               
            song = index[qst];
            
           
              
            prepareAnswers();
            console.log(rightAnswer);
            console.log(song);
            if(tracks[song] == undefined){
              song =Math.floor(Math.random() * 23) + 1;
              tracks[song].play()
             }else{
              tracks[song].play()
             }
              response.className = "response";        
              response.innerText =  "SONG NUMBER: "+(qst+1) +"\n"+ 
              "The song name is: \n -"+answers[0]+"\n -"+answers[1]+"\n -"+answers[2]+"\n -"+answers[3]+"\n";
            //  speech.text = response.innerText; 
                setTimeout(function (){
                    document.getElementsByClassName("main")[0].appendChild(response);
                    var a = document.getElementsByClassName("main")[0].scrollHeight;
                    document.getElementsByClassName("main")[0].scrollTop = a+100;
                } , 1000) 
                qst=(qst+1);
                console.log("qst"+qst);
                modeGame=2;
                 
     } }
     )});}

         
      nextGame.forEach(element => {
            
     element.patterns.forEach(el => {
     if( el.toLowerCase()==text.toLowerCase()){
      if(qst<=5){
       
     
       for (let i = 0; 5 > gameSongs.length; i++) {
         random = Math.floor(Math.random() * 23) + 1;
   
         if(gameSongs.includes(random)) {
         } else {
             gameSongs.push(random)
             index[i]=random;
            

         }
        } 
        
       console.log(gameSongs);       
       song = index[qst];
     
         
       prepareAnswers();
       console.log(rightAnswer);
       if(tracks[song] == undefined){
        song =Math.floor(Math.random() * 23) + 1;
        tracks[song].play()
       }else{
        tracks[song].play()
       }
           
         response.className = "response";        
         response.innerText =  "SONG NUMBER: "+(qst+1) +"\n"+ 
         "The song name is: \n -"+answers[0]+"\n -"+answers[1]+"\n -"+answers[2]+"\n -"+answers[3]+"\n";
        // speech.text = response.innerText; 
           setTimeout(function (){
               document.getElementsByClassName("main")[0].appendChild(response);
               var a = document.getElementsByClassName("main")[0].scrollHeight;
               document.getElementsByClassName("main")[0].scrollTop = a+100;
           } , 1000) 
           qst=(qst+1);
           console.log("qst"+qst);
           modeGame=2;
          
} }}
)});
if(qst==6){
  if(score>3){
    response.className = "response";
    response.innerText = "good jooooob you succeed here is your score"+score;
    speech.text = response.innerText;
    setTimeout(function (){
      document.getElementsByClassName("main")[0].appendChild(response);
      var a = document.getElementsByClassName("main")[0].scrollHeight;
      document.getElementsByClassName("main")[0].scrollTop = a+100;
  } , 1000)
  }else{
    response.className = "response";
    response.innerText = "You didn't win, maybe next time!";
    speech.text = response.innerText;
    setTimeout(function (){
      document.getElementsByClassName("main")[0].appendChild(response);
      var a = document.getElementsByClassName("main")[0].scrollHeight;
      document.getElementsByClassName("main")[0].scrollTop = a+100;
  } , 1000)
  }

  modeGame=0;
  score = 0;
  qst=0;
  song = 0;
}

     }

      


                    
               
               if(response.innerText== ""){
                //search google
                if (text.split(" ")[0].trim().toLowerCase() === "what") {
                  response.className = "response";
                  response.innerText = "searching outside the system for you";
                  speech.text = response.innerText;
                  setTimeout(function (){
                    document.getElementsByClassName("main")[0].appendChild(response);
                    var a = document.getElementsByClassName("main")[0].scrollHeight;
                    document.getElementsByClassName("main")[0].scrollTop = a+100;
                } , 1000)
                  var searchquery=text.split(" ").join("+")
                  window.open(`https://www.google.com/search?q=${searchquery.trim().toLowerCase()}`, "_blank");
                }//fetching a json object to get a picture
                else if(text.includes("image")||text.includes("img")||text.includes("picture")||text.includes("pic")||text.includes("photo")){
                  var response = document.createElement("div");
                  response.className = "response";
                  response.innerText = "please specify what picture do you want : a picture of family, friends, nature, stars, human, dog, cat, etc...";
                  var txt=text.toLowerCase();
                  img_data.forEach(element => {
                    element.id.forEach(el => {
                    if(txt.includes(el.toLowerCase())){
                      response.className = "response";
                      var elem = document.createElement("img");
                      elem.className="img_data";
                      elem.src = element.img[Math.floor(Math.random() * element.img.length)];
                      response.innerText = "this is the requested image: ";
                      response.appendChild(elem);
                     
                    }})})
                  //game



                }else if(modeGame==2){
                 
                  if(text.toLowerCase() == rightAnswer.toLowerCase()){
                    score = score +1;
                    console.log(text);
                    response.className = "response";
                  response.innerText =  "good job! \n your score:"+(score);
                    //  speech.text = response.innerText;
                        setTimeout(function (){
                            document.getElementsByClassName("main")[0].appendChild(response);
                            var a = document.getElementsByClassName("main")[0].scrollHeight;
                            document.getElementsByClassName("main")[0].scrollTop = a+100;
                        } , 1000)
                        
                }else{
                  response.className = "response";
                  response.innerText =  "Ops! It's wrong.\n your score:"+score;
                  // speech.text = response.innerText;
                     setTimeout(function (){
                         document.getElementsByClassName("main")[0].appendChild(response);
                         var a = document.getElementsByClassName("main")[0].scrollHeight;
                         document.getElementsByClassName("main")[0].scrollTop = a+100;
                     } , 1000)   
            } 
            modeGame = 0;
          } 
                else{
                  var response = document.createElement("div");
                  response.className = "response";
                  response.innerText = "Sorry! i can't get you";

                }

                //mettre le resultat dans la constante speech
                speech.text = response.innerText;
                
                setTimeout(function (){
                    document.getElementsByClassName("main")[0].appendChild(response);
                    var a = document.getElementsByClassName("main")[0].scrollHeight;
                    document.getElementsByClassName("main")[0].scrollTop = a+100;
                } , 1000)
               }
              var a = document.getElementsByClassName("main")[0].scrollHeight;
              document.getElementsByClassName("main")[0].scrollTop = a ;
              //lire le resultat avec la voie
              window.speechSynthesis.speak(speech);
          };

          //le resultat de mesage dit par utilisateur
          recognition.onresult=function(e){
            let resultIndex = e.resultIndex;
            let transcript = e.results[resultIndex][0].transcript;

            //cette constante va lire le resultat a afficher
            const speech = new SpeechSynthesisUtterance();
            
            
            //meme traitement fait avaec le text de input 
            if(transcript == ""){

            }
            else{
              
              var request = document.createElement("div");
              request.className = "request";
              request.innerText = transcript;
              document.getElementsByClassName("main")[0].appendChild(request);
              document.getElementById("inp_text").value = "";
              var response = document.createElement("div");
                data.forEach(element => {
                  element.patterns.forEach(el => {
                  if(el.toLowerCase()==transcript.toLowerCase()){
                     
           
      
                  response.className = "response";
                  response.innerText = element.responses[Math.floor(Math.random() * element.responses.length)];

                  speech.text = response.innerText;
                  setTimeout(function (){
                      document.getElementsByClassName("main")[0].appendChild(response);
                      var a = document.getElementsByClassName("main")[0].scrollHeight;
                      document.getElementsByClassName("main")[0].scrollTop = a+100;
                  } , 1000)
              }
             })});
                //code that oppen new browsers if asked
                if (transcript.split(" ")[0].trim().toLowerCase() === "open"||transcript.split(" ")[0].trim().toLowerCase() === "ouvrir") {
                  response.className = "response";
                  response.innerText = "Openning ...";
                  speech.text = response.innerText;
                  setTimeout(function (){
                    document.getElementsByClassName("main")[0].appendChild(response);
                    var a = document.getElementsByClassName("main")[0].scrollHeight;
                    document.getElementsByClassName("main")[0].scrollTop = a+100;
                } , 1000)
                  window.open(`https://www.${transcript.split(" ")[1].trim().toLowerCase()}.com`, "_blank");
                }    if (transcript.includes("time") ) {
                  response.className = "response";
                  var today = new Date();
                  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                  var dateTime = date+' '+time;
                  response.innerText = "It is:  "+ time;
                  speech.transcript = response.innerText;
                  setTimeout(function (){
                    document.getElementsByClassName("main")[0].appendChild(response);
                    var a = document.getElementsByClassName("main")[0].scrollHeight;
                    document.getElementsByClassName("main")[0].scrollTop = a+100;
                } , 1000)
                }
                if (transcript.includes("temps") ) {
                  response.className = "response";
                  var today = new Date();
                  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                  var dateTime = date+' '+time;
                  response.innerText = "C'est:  "+ time;
                  speech.transcript = response.innerText;
                  setTimeout(function (){
                    document.getElementsByClassName("main")[0].appendChild(response);
                    var a = document.getElementsByClassName("main")[0].scrollHeight;
                    document.getElementsByClassName("main")[0].scrollTop = a+100;
                } , 1000)
                }
                dataGame.forEach(element => {
                  element.patterns.forEach(el => {
                  if( el.toLowerCase()==transcript.toLowerCase()){
                     
                 modeGame = 1;
      
                  response.className = "response";
                  response.innerText = element.responses[Math.floor(Math.random() * element.responses.length)];
                  speech.text = response.innerText;
                  setTimeout(function (){
                      document.getElementsByClassName("main")[0].appendChild(response);
                      var a = document.getElementsByClassName("main")[0].scrollHeight;
                      document.getElementsByClassName("main")[0].scrollTop = a+100;
                  } , 1000)
                  }      
             })});
              if(modeGame == 1){
             
               startGame.forEach(element => {
    
              element.patterns.forEach(el => {
              if( el.toLowerCase()==transcript.toLowerCase()){
                 
                
              
                for (let i = 0; 6 > gameSongs.length; i++) {
                  random = Math.floor(Math.random() * 23) + 1;
            
                  if(gameSongs.includes(random)) {
                  } else {
                      gameSongs.push(random)
                      index[i]=random;
                     
      
                  }
                 } 
                 
                console.log(gameSongs);   
                  
                song = index[qst];
               
                  
                prepareAnswers();
                console.log(rightAnswer);
                console.log(song);
                if(tracks[song] == undefined){
                  song =Math.floor(Math.random() * 23) + 1;
                  tracks[song].play()
                 }else{
                  tracks[song].play()
                 }
                  response.className = "response";        
                  response.innerText =  "SONG NUMBER: "+(qst+1) +"\n"+ 
                  "The song name is: \n -"+answers[0]+"\n -"+answers[1]+"\n -"+answers[2]+"\n -"+answers[3]+"\n";
                //  speech.transcript = response.innerText; 
                    setTimeout(function (){
                        document.getElementsByClassName("main")[0].appendChild(response);
                        var a = document.getElementsByClassName("main")[0].scrollHeight;
                        document.getElementsByClassName("main")[0].scrollTop = a+100;
                    } , 1000) 
                    qst=(qst+1);
                    console.log("qst"+qst);
                    modeGame=2;
                     
         } }
         )});}
    
             
          nextGame.forEach(element => {
                
         element.patterns.forEach(el => {
         if( el.toLowerCase()==transcript.toLowerCase()){
          if(qst<=5){
           
         
           for (let i = 0; 5 > gameSongs.length; i++) {
             random = Math.floor(Math.random() * 23) + 1;
       
             if(gameSongs.includes(random)) {
             } else {
                 gameSongs.push(random)
                 index[i]=random;
                
    
             }
            } 
            
           console.log(gameSongs);       
           song = index[qst];
         
             
           prepareAnswers();
           console.log(rightAnswer);
           if(tracks[song] == undefined){
            song =Math.floor(Math.random() * 23) + 1;
            tracks[song].play()
           }else{
            tracks[song].play()
           }
               
             response.className = "response";        
             response.innerText =  "SONG NUMBER: "+(qst+1) +"\n"+ 
             "The song name is: \n -"+answers[0]+"\n -"+answers[1]+"\n -"+answers[2]+"\n -"+answers[3]+"\n";
            // speech.transcript = response.innerText; 
               setTimeout(function (){
                   document.getElementsByClassName("main")[0].appendChild(response);
                   var a = document.getElementsByClassName("main")[0].scrollHeight;
                   document.getElementsByClassName("main")[0].scrollTop = a+100;
               } , 1000) 
               qst=(qst+1);
               console.log("qst"+qst);
               modeGame=2;
              
    } }}
    )});
    if(qst==6){
      if(score>3){
        response.className = "response";
        response.innerText = "good jooooob you succeed here is your score"+score;
        speech.transcript = response.innerText;
        setTimeout(function (){
          document.getElementsByClassName("main")[0].appendChild(response);
          var a = document.getElementsByClassName("main")[0].scrollHeight;
          document.getElementsByClassName("main")[0].scrollTop = a+100;
      } , 1000)
      }else{
        response.className = "response";
        response.innerText = "You didn't win, maybe next time!";
        speech.transcript = response.innerText;
        setTimeout(function (){
          document.getElementsByClassName("main")[0].appendChild(response);
          var a = document.getElementsByClassName("main")[0].scrollHeight;
          document.getElementsByClassName("main")[0].scrollTop = a+100;
      } , 1000)
      }
    
      modeGame=0;
      score = 0;
      qst=0;
      song = 0;
    }
             }
              



             if(response.innerText== ""){
                //search google
                if (transcript.split(" ")[0].trim().toLowerCase() === "what"||transcript.split(" ")[0].trim().toLowerCase() === "what's"||transcript.split(" ")[0].trim().toLowerCase() === "what"||transcript.split(" ")[0].trim().toLowerCase() === "whats") {
                  response.className = "response";
                  response.innerText = "searching outside the system for you";
                  speech.transcript = response.innerText;
                  setTimeout(function (){
                    document.getElementsByClassName("main")[0].appendChild(response);
                    var a = document.getElementsByClassName("main")[0].scrollHeight;
                    document.getElementsByClassName("main")[0].scrollTop = a+100;
                } , 1000)
                  var searchquery=transcript.split(" ").join("+")
                  window.open(`https://www.google.com/search?q=${searchquery.trim().toLowerCase()}`, "_blank");
                }//fetching a json object to get a picture
                else if(transcript.includes("image")||transcript.includes("img")||transcript.includes("picture")||transcript.includes("pic")||transcript.includes("photo")){
                  var response = document.createElement("div");
                  response.className = "response";
                  response.innerText = "please specify what picture do you want : a picture of family, friends, nature, stars, human, dog, cat, etc...";
                  var txt=transcript.toLowerCase();
                  img_data.forEach(element => {
                    element.id.forEach(el => {
                    if(txt.includes(el.toLowerCase())){
                      response.className = "response";
                      var elem = document.createElement("img");
                      elem.className="img_data";
                      elem.src = element.img[Math.floor(Math.random() * element.img.length)];
                      response.innerText = "this is the requested image: ";
                      response.appendChild(elem);
                      
                    }})})
                }else if(modeGame==2){
                 
                  if(transcript.toLowerCase() == rightAnswer.toLowerCase()){
                    score = score +1;
                    console.log(transcript);
                    response.className = "response";
                  response.innerText =  "good job! \n your score:"+(score);
                    //  speech.transcript = response.innerText;
                        setTimeout(function (){
                            document.getElementsByClassName("main")[0].appendChild(response);
                            var a = document.getElementsByClassName("main")[0].scrollHeight;
                            document.getElementsByClassName("main")[0].scrollTop = a+100;
                        } , 1000)
                        
                }else{
                  response.className = "response";
                  response.innerText =  "Ops! It's wrong.\n your score:"+score;
                  // speech.transcript = response.innerText;
                     setTimeout(function (){
                         document.getElementsByClassName("main")[0].appendChild(response);
                         var a = document.getElementsByClassName("main")[0].scrollHeight;
                         document.getElementsByClassName("main")[0].scrollTop = a+100;
                     } , 1000)   
            } 
            modeGame = 0;
          } else{
                  var response = document.createElement("div");
                  response.className = "response";
                  response.innerText = "Sorry! i can't get you";

                }

                //mettre le resultat dans la constante speech
              speech.transcript = response.innerText;
              
              setTimeout(function (){
                  document.getElementsByClassName("main")[0].appendChild(response);
                  var a = document.getElementsByClassName("main")[0].scrollHeight;
                  document.getElementsByClassName("main")[0].scrollTop = a+100;
              } , 1000)
             }
            var a = document.getElementsByClassName("main")[0].scrollHeight;
            document.getElementsByClassName("main")[0].scrollTop = a ;
            //lecture de resultat
            window.speechSynthesis.speak(speech);
            console.log(transcript);
        }

        //pour savoir que le mic est ouvert on change sa couleur
        recognition.onend=function(){
            mic.style.background="rgb(33, 143, 194)";
        }


        //robot
        /*var switchBtn=document.getElementById("switch-button");
        switchBtn.addEventListener("click" ,function(){
          var response = document.createElement("div");
            response.className = "response";
            response.innerText = "welcome to your virtual assistant : Ribot !";
        });*/
             
       
        

     const prepareAnswers = () => {
    if (song === 0) {
        answers[0] = 'Bad romance'
        answers[1] = 'Alejandro'
        answers[2] = 'Smile'
        answers[3] = 'La isla bonita'
        rightAnswer = 'Bad romance'
    } else if (song === 1) {
        answers[0] = 'Rehab'
        answers[1] = 'Lonely'
        answers[2] = 'Love love love'
        answers[3] = 'Back to black'
        rightAnswer = 'Back to black'
    } else if (song === 2) {
        answers[0] = 'Your song'
        answers[1] = 'Believe'
        answers[2] = 'Need you now'
        answers[3] = 'Them'
        rightAnswer = 'Believe'
    } else if (song === 3) {
        answers[0] = 'One'
        answers[1] = 'Angels'
        answers[2] = 'Spirits'
        answers[3] = 'Dancing on my own'
        rightAnswer = 'Dancing on my own'
    } else if (song === 4) {
        answers[0] = 'Dust in the wind'
        answers[1] = '1973'
        answers[2] = 'The power of love'
        answers[3] = 'Brave'
        rightAnswer = 'Dust in the wind'
    } else if (song === 5) {
        answers[0] = 'Emily'
        answers[1] = 'Here with me'
        answers[2] = 'Girls just wanna have fun'
        answers[3] = 'Strong enough'
        rightAnswer = 'Girls just wanna have fun'
    } else if (song === 6) {
        answers[0] = 'Help'
        answers[1] = 'Imagine'
        answers[2] = 'Never ending story'
        answers[3] = 'Angie'
        rightAnswer = 'Help'
    }  else if (song === 7) {
        answers[0] = 'Numb'
        answers[1] = 'Riders on the storm'
        answers[2] = 'Karma police'
        answers[3] = 'In the end'
        rightAnswer = 'In the end'
    }  else if (song === 8) {
        answers[0] = 'I was made for loving you'
        answers[1] = 'Kiss me'
        answers[2] = 'Love song'
        answers[3] = 'Gimme more'
        rightAnswer = 'I was made for loving you'
    }  else if (song === 9) {
        answers[0] = 'I want to break free'
        answers[1] = 'Lover'
        answers[2] = 'Freedom'
        answers[3] = 'I need'
        rightAnswer = 'I want to break free'
    }  else if (song === 10) {
        answers[0] = 'True'
        answers[1] = 'Sweet child of mine'
        answers[2] = 'Fear of the dark'
        answers[3] = "Knocking on heaven's door"
        rightAnswer = "Knocking on heaven's door"
    }  else if (song === 11) {
        answers[0] = 'Your call'
        answers[1] = 'Lego house'
        answers[2] = 'Ring of fire'
        answers[3] = 'Hero'
        rightAnswer = 'Lego house'
    }  else if (song === 12) {
        answers[0] = 'Love story'
        answers[1] = 'Love me'
        answers[2] = 'You need to calm down'
        answers[3] = 'Shallow'
        rightAnswer = 'Love story'
    }  else if (song === 13) {
        answers[0] = 'Rise'
        answers[1] = 'Time to dance'
        answers[2] = 'My immortal'
        answers[3] = 'Brother'
        rightAnswer = 'My immortal'
    }  else if (song === 14) {
        answers[0] = 'Lullaby'
        answers[1] = 'Ocean eyes'
        answers[2] = 'Dear God'
        answers[3] = 'Wonderful life'
        rightAnswer = 'Ocean eyes'
    }  else if (song === 15) {
        answers[0] = 'Rude'
        answers[1] = 'Numbers'
        answers[2] = 'Ghost towns'
        answers[3] = 'I know'
        rightAnswer = 'Rude'
    }  else if (song === 16) {
        answers[0] = 'I miss you'
        answers[1] = 'Here with me'
        answers[2] = 'Take on me'
        answers[3] = 'Sleeping sun'
        rightAnswer = 'Take on me'
    }  else if (song === 17) {
        answers[0] = 'Let her go'
        answers[1] = 'Heaven'
        answers[2] = 'I will wait'
        answers[3] = 'Thriller'
        rightAnswer = 'Thriller'
    }  else if (song === 18) {
        answers[0] = 'Born this way'
        answers[1] = 'Paint it black'
        answers[2] = 'Fear of the dark'
        answers[3] = 'Thunderstruck'
        rightAnswer = 'Thunderstruck'
    }  else if (song === 19) {
        answers[0] = 'Applause'
        answers[1] = 'You and I'
        answers[2] = 'Unconditionally'
        answers[3] = 'Judas'
        rightAnswer = 'Unconditionally'
    }  else if (song === 20) {
        answers[0] = 'Always'
        answers[1] = 'Zombies'
        answers[2] = "What's up"
        answers[3] = 'Sexy boy'
        rightAnswer = "What's up"
    }  else if (song === 21) {
        answers[0] = 'Cancer'
        answers[1] = 'Nothing to lose'
        answers[2] = 'One day'
        answers[3] = 'When you are gone'
        rightAnswer = 'When you are gone'
    }  else if (song === 22) {
        answers[0] = 'Crash'
        answers[1] = 'Wind of change'
        answers[2] = 'Hurt'
        answers[3] = 'November rain'
        rightAnswer = 'Wind of change'
    }  else if (song === 23) {
        answers[0] = 'Without me'
        answers[1] = 'Do you really want to hurt me'
        answers[2] = 'Attack'
        answers[3] = 'Oblivion'
        rightAnswer = 'Without me'
    }
}