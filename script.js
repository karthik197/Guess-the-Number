var x=Math.floor(Math.random()*10 + 1);
var guess=1;
document.getElementById("submit").onclick=function(){
    var y=document.getElementById("input").value;
    if(x==y){
        alert("CONGRADULATIONS!!! You Guessed it right in "+guess+" Guess");
        location.reload();
    }
    else if(x<y){
        guess++;
        alert("Try a smaller Number");
    }
    else{
        guess++;
        alert("Try a larger Number");
    }
}
