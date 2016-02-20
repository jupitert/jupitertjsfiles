var player1= 0;
var player2= 0;
var score1 = document.querySelector('.player1');
var score2 = document.querySelector('.player2');
var playbtn1= document.querySelector('#play1');
var playbtn2= document.querySelector('#play2');
var playbtn3= document.querySelector('#play3');

var winCount= document.querySelector('.totalCount');//playing to value
var numInput= document.querySelector('#gamecount') //input value
var gameOver = false;
var count= 5; //by default assigning 5

winCount.textContent= count;

numInput.addEventListener('change', function(){
    reset();
    winCount.textContent= this.value;
    count=Number(this.value);
    console.log(count);
})

playbtn1.addEventListener('click', function(){
    if(!gameOver){
        player1++;
        score1.textContent= player1;
        console.log(player1, count);
        if(player1 === count){
            score1.style.color='green';
            gameOver= true;
            playbtn1.setAttribute('disabled','disabled');
            playbtn2.setAttribute('disabled','disabled');
        }
    }


})

playbtn2.addEventListener('click', function(){
    player2++;
    score2.textContent= player2;
    if(player2 === count){
        score2.style.color='green';
        playbtn1.setAttribute('disabled','disabled');
        playbtn2.setAttribute('disabled','disabled');
    }
})

playbtn3.addEventListener('click', function(){
    reset();

})

function reset(){
    player1=0;
    player2=0;
    score1.textContent= player1;
    score2.textContent= player2;
    playbtn1.removeAttribute('disabled');
    playbtn2.removeAttribute('disabled');
    score1.style.color='black';
    score2.style.color='black';
}


