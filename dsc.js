var string="hubham Rana";
var nameit = document.getElementById("name");
 let speed=100;
 var string2="My Hobbies";
 var hobbies=document.getElementById("hobbies");
  
 var string3="My Skills";
 var skills=document.getElementById("skills");


 

 
function home(){
  function printName ( i){
    if (i==0 ) nameit.innerHTML="S";
    
    if (i<string.length){
      nameit.innerHTML += string[i];
      i++;
      setTimeout(printName , speed , i);
    }
   
  }
  clearInterval();
  printName(0);
  setInterval(printName,5000,0);
 
}
 function f(){
  function printHobbies(l){
    if (l==0 ) hobbies.innerHTML="&#128073";
    
    if (l<string2.length){
      hobbies.innerHTML += string2[l];
      l++;
      setTimeout(printHobbies, speed , l);
    }
  }
  clearInterval(); 
  printHobbies(0);
  setInterval(printHobbies,5000,0);
  
 }

function f2(){
  function printSkills(l){
    if (l==0) skills.innerHTML = "&#128073";
    if( l<string3.length ) 
    skills.innerHTML += string3[l];
    l++;
    setTimeout(printSkills , speed , l);
  }
  clearInterval();
  printSkills(0);
  setInterval(printSkills,5000 , 0);
}




