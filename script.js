let audio1= new Audio('music1.mp3');
let audio2= new Audio('music2.mp3');
let audio3= new Audio('music3.mp3');
let audio4= new Audio('music4.mp3');
let audio5= new Audio('music5.mp3');

var b1=document.getElementById("btn1");
var b2=document.getElementById("btn2");
var b3=document.getElementById("btn3");
var text1=document.getElementById("l1");
var text2=document.getElementById("l2");
var rotat=document.getElementById(".c1");
var cmage=document.getElementById("k1");



let arr = new Array();
arr[0]=audio1;
arr[1]=audio2;
arr[2]=audio3;
arr[3]=audio4;
arr[4]=audio5;




var a=0;
var b=0;


function playee(){

  setTimeout(()=>{
    if(b==0){
      b2.innerHTML='<i class="fas fa-pause" >';
      arr[a].play();
      var rotat=document.querySelector(".c1");
      rotat.classList.add("animat");
      b=1;

    }
    else if(b==1){
      b2.innerHTML='<i class="fas fa-play" >';
      arr[a].pause();
      var rotat=document.querySelector(".c1");
      rotat.classList.remove("animat");
      b=0;
    }
  },1000)

}



function forward(){  
  setTimeout(()=>{
    if(a<4){
      a++;
      arr[a-1].pause();
      arr[a-1].currentTime=0;
      arr[a].play();
      b2.innerHTML='<i class="fas fa-pause" >';
      fours();     
      
   }
  else if(a==4){
    a=0;
    arr[4].pause();
    arr[4].currentTime=0;
    arr[a].play();
    b2.innerHTML='<i class="fas fa-pause" >';
    fours();

  }

  },1000)
}








function backward(){

  
  setTimeout(()=>{
    if(a>0){
      a--;
      arr[a+1].pause();
      arr[a+1].currentTime=0;
      arr[a].play();
      b2.innerHTML='<i class="fas fa-pause" >';
      fours();     
      
   }
  else if(a==0){
    a=4;
    arr[0].pause();
    arr[0].currentTime=0;
    arr[a].play();
    b2.innerHTML='<i class="fas fa-pause" >';
    fours();

  }

  },1000)
}








function fours(){
  if(a==0){
    setInterval(()=>{
    arr[a].play();
    },205000)
    text1.innerText='Blinding Lights';
    text2.innerText='weekend';
    cmage.innerHTML='<img src="/bling.jpg" alt="" width="140px" class="c1" >';
    var rotat=document.querySelector(".c1");
    rotat.classList.add("animat");
    b=1;

  }
  else if(a==1){
    setInterval(()=>{
      arr[a].play();
      },358000)
    text1.innerText="God's Plan";
    text2.innerText='drake';
    cmage.innerHTML='<img src="/filenamerake.jpg" alt="" width="140px" class="c1" >';
    var rotat=document.querySelector(".c1");
    rotat.classList.add("animat");
    b=1;


  }
  else if(a==2){
    setInterval(()=>{
      arr[a].play();
      },226000)
    text1.innerText='Watermelon Sugar';
    text2.innerText='harry styles';
    cmage.innerHTML='<img src="/harry.jpg" alt="" width="140px" class="c1" >';
    var rotat=document.querySelector(".c1");
    rotat.classList.add("animat");
    b=1;

  }
  else if(a==3){
    setInterval(()=>{
      arr[a].play();
      },323000)
    text1.innerText="I'm The One";
    text2.innerText='dj khaled ft.justin bieber';
    cmage.innerHTML='<img src="/filename (1).jpg" alt="" width="140px" class="c1" >';
    var rotat=document.querySelector(".c1");
    rotat.classList.add("animat");
    b=1;

  }
  else if(a==4){
    setInterval(()=>{
      arr[a].play();
      },302000)
    text1.innerText='Leon On';
    text2.innerText='dj snake';
    cmage.innerHTML='<img src="/filename.jpg" alt="" width="140px" class="c1" >';
    var rotat=document.querySelector(".c1");
    rotat.classList.add("animat");
    b=1;
  } 


}