

window.onload=function(){
document.getElementById("myarea").innerHTML="\t\t"+"sample item 1"+"\n"+"\t\t"+"sample item 2"
};


var mycheck=document.getElementById("mychecked");
mycheck.onchange=myfunc5;

function myfunc5(){
    var myback=document.getElementById("hermon");
    myback.style.backgroundImage="url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)";
    
}


function change(e){

    if(e.checked){

     document.getElementById("myarea").style.fontWeight="bold";
     document.getElementById("myarea").style.color="green";
     document.getElementById("myarea").style.textDecoration="underline";
    }
    if(!e.checked){
    
     document.getElementById("myarea").style.fontWeight="normal";
     document.getElementById("myarea").style.color="black";
     document.getElementById("myarea").style.textDecoration="none";
    }
 } 






function myfunc3(){
    alert("hey hermon u did it ");

}

function myfunc2(){
    var mytxt=document.getElementById("myarea");
    mytxt.style.textDecorationLine="underline";

}

var mybut=document.getElementById("click");

mybut.onclick=mytimer;
function mytimer(){
    setInterval(myfunc, 4000)
    }

function myfunc(){

    var mytxt=document.getElementById("myarea");
    mytxt.style.fontSize="40px";
}