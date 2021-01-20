var string="hubham Rana";
var nameit = document.getElementById("name");
 let speed=100;
 var string2="My Hobbies";
 var hobbies=document.getElementById("hobbies");
  
function printName ( i){
  if (i==0 ) nameit.innerHTML="S";
  
  if (i<string.length){
    nameit.innerHTML += string[i];
    i++;
    setTimeout(printName , speed , i);
  }
 
}

 function printHobbies(l){
  if (l==0 ) hobbies.innerHTML="&#128073";
  
  if (l<string2.length){
    hobbies.innerHTML += string2[l];
    l++;
    setTimeout(printHobbies, speed , l);
  }
}
printName(0);
setInterval(printName,5000 , 0);





