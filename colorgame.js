/**
 * Created by shankarveerakandhan on 2/19/16.
 */
var numSquare= 6;
var colors=generateRandom(numSquare);
var newGame= document.querySelector('.refresh');
var squares= document.querySelectorAll('.square');
var pickedColor= randomColor();
console.log('to find '+pickedColor);
var colorsDisplay= document.getElementById('colorDisplay');
colorsDisplay.textContent= pickedColor;
var headers= document.querySelector('#backgroundChanger');
var result=document.querySelector('#result');
var modeButtons= document.querySelectorAll('.mode');

init();


function init(){

    //mode buttons
    for (var i=0; i< modeButtons.length;i++){
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent === 'Easy' ? numSquare=3 : numSquare=6;
            reset();
        })
    }

    for(var i=0; i< colors.length;i++){
        squares[i].style.background= colors[i];

        squares[i].addEventListener('click', function(){
            var selected=this.style.background.replace(/ /g, "");
            if(selected === pickedColor){
                headers.style.background= selected;
                result.textContent='Correct';
                changeColor(squares,selected);
                newGame.textContent='Play Again?';
            }
            else{
                this.style.background='#232323'
                result.textContent='Wrong';
            }
        })
    }


    reset();
}



//easy.addEventListener('click', function(){
//    this.classList.add('selected');
//    hard.classList.remove('selected');
//    numSquare =3;
//    colors=generateRandom(numSquare);
//    pickedColor= randomColor();
//    colorsDisplay.textContent= pickedColor;
//    for (var i=0;i<squares.length;i++){
//        console.log(colors[i])
//        if(colors[i]){
//            squares[i].style.background=colors[i];
//        }else
//        {
//            squares[i].style.display='none';
//        }
//    }
//
//})
//
//hard.addEventListener('click', function(){
//    this.classList.add('selected');
//    easy.classList.remove('selected');
//    numSquare =6;
//    colors=generateRandom(numSquare);
//    pickedColor= randomColor();
//    colorsDisplay.textContent= pickedColor;
//    for (var i=0;i<squares.length;i++){
//        console.log(colors[i])
//            squares[i].style.background=colors[i];
//            squares[i].style.display='block';
//    }
//})

function reset(){
    colors=generateRandom(numSquare);
    pickedColor= randomColor();
    colorsDisplay.textContent= pickedColor;
    headers.style.background='steelblue';
    for(var i=0; i<colors.length;i++){
        squares[i].style.background= colors[i];
    }
    result.textContent='';
    newGame.textContent='New Colors';

    for (var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display='block';
            squares[i].style.background=colors[i];
        }else
        {
            squares[i].style.display='none';
        }
    }

}



function changeColor(target,color){
    for (var i=0; i<target.length;i++){
        target[i].style.background=color;
    }
}

function randomColor(){
    var random=Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandom(num){
    var colorArray=[];
    for (var i=0; i<num;i++){
        colorArray.push(randomise());
    }
    return colorArray;
}

function randomise(){
    var r= Math.floor(Math.random()* 265);
    var g= Math.floor(Math.random()* 256);
    var b= Math.floor(Math.random()* 256);
    return 'rgb'+'('+r+','+g+','+b+')';
}

newGame.addEventListener('click',function(){
    reset();
});



