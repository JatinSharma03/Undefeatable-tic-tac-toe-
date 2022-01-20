var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

one.onclick = 'none';
two.onclick = 'none';
three.onclick = 'none';
four.onclick = 'none';
five.onclick = 'none';
six.onclick = 'none';
seven.onclick = 'none';
eight.onclick = 'none';
nine.onclick = 'none';

var whoplay = document.getElementById('whoplay');
var whoplaytext = document.getElementById('whoplaytext');
var whoplaynum = 0;
var startgame = document.getElementById('startgame');
var restartgame = document.getElementById('restartgame');
var refreshgame = document.getElementById('refreshgame');
var starterid = document.getElementById('starterid');

var firstuser = 0;

var barrier1 = 0, barrier2 = 0, barrier3 = 0, barrier4 = 0, barrier5 = 0, barrier6 = 0, barrier7 = 0, barrier8 = 0, barrier9 = 0;

var x, y, z;
var num1, num2 = 0, num3;
var odd = 0, even = 0;

var first5move = 0, firstoddmove = 0, firstevenmove = 0, lastmove = 0, startvar = 0;

var filledoddcount = 0, filledevencount = 0;

var countwintriple = 0, countlosetriple = 0;
var a = "0",b = "0",c = "0",d = "0",e = "0",f = "0",g = "0",h = "0",i = "0";
var row1 , row2 , row3 , col1 , col2 , col3 , dia1 , dia2;

var checkwinvar = 0, checklosevar = 0;

var move1 = 0, move2 = 0, move3 = 0, move4 = 0, move5 = 0, move6 = 0, move7 = 0, move8 = 0, move9 = 0;
var begningmove = 0;

var end = 0, finalwin = 0, finallose = 0, finaltie = 0;

var dim1 = 0, dim2 = 0, dim3 = 0, dim4 = 0, dim5 = 0, dim6 = 0, dim7 = 0, dim8 = 0, dim9 = 0; 

function funwhoplay(){ 
    whoplaynum += 1;
    startvar += 1;
    if(whoplaynum === 1){
        whoplay.style.boxShadow = '3px 3px 6px rgb(10, 94, 10)';
        whoplay.innerHTML = 'Guest';
        whoplay.style.color = 'rgb(10, 94, 10)';
        whoplaytext.style.color = 'rgb(10, 94, 10)';
        
        firstuser = 1;
    }
    else if(whoplaynum === 2){
        whoplaynum = 0;
        whoplay.style.boxShadow = '3px 3px 6px rgb(128, 2, 2)';
        whoplay.innerHTML = 'J I N';
        whoplay.style.color = 'rgb(128, 2, 2)';
        whoplaytext.style.color = 'rgb(128, 2, 2)';
        
        firstuser = 0;
    }
    
}

function allowblock(){
setTimeout(function(){ 
if(barrier1 === 0){    one.onclick = function(){fun1()};   }
if(barrier2 === 0){    two.onclick = function(){fun2()};   }
if(barrier3 === 0){    three.onclick = function(){fun3()};   }
if(barrier4 === 0){    four.onclick = function(){fun4()};   }
if(barrier5 === 0){    five.onclick = function(){fun5()};   }
if(barrier6 === 0){    six.onclick = function(){fun6()};   }
if(barrier7 === 0){    seven.onclick = function(){fun7()};   }
if(barrier8 === 0){    eight.onclick = function(){fun8()};   }
if(barrier9 === 0){    nine.onclick = function(){fun9()};   }
}, 800);
}

function blockblock(){
one.onclick = 'none';
two.onclick = 'none';
three.onclick = 'none';
four.onclick = 'none';
five.onclick = 'none';
six.onclick = 'none';
seven.onclick = 'none';
eight.onclick = 'none';
nine.onclick = 'none';

}

function fun1(){
    if(firstuser === 1){
        one.innerHTML = "o";
    }
    else if(firstuser === 0){
        setTimeout(function(){  one.innerHTML = "x"; }, 900);
    }
    
    barrier1 = 1;
    filledoddcount += 1;
    blockblock();

    lastmove = 1;
    if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){
    firstoddmove = 1;
    }

    if(countwintriple === 1){
        a = "1";
    }
    else if(countlosetriple === 1){
        a = "-1";
    }

    if(move1 === 0){
        move1 = 1;
    }
    else if(move2 === 0){
        move2 = 1;
    }
    else if(move3 === 0){
        move3 = 1;
    }
    else if(move4 === 0){
        move4 = 1;
    }
    else if(move5 === 0){
        move5 = 1;
    }
    else if(move6 === 0){
        move6 = 1;
    }
    else if(move7 === 0){
        move7 = 1;
    }
    else if(move8 === 0){
        move8 = 1;
    }
    else if(move9 === 0){
        move9 = 1;
    }

    funstart();
}
function fun2(){
    if(firstuser === 1){
        two.innerHTML = "o";
    }
    else if(firstuser === 0){
        setTimeout(function(){ two.innerHTML = "x"; }, 900);
    }
    
    barrier2 = 1;
    filledevencount += 1;
    blockblock();

    lastmove = 2;
    if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){
    firstenenmove = 1;
    }

    if(countwintriple === 1){
        b = "1";
    }
    else if(countlosetriple === 1){
        b = "-1";
    }

    if(move1 === 0){
        move1 = 2;
    }
    else if(move2 === 0){
        move2 = 2;
    }
    else if(move3 === 0){
        move3 = 2;
    }
    else if(move4 === 0){
        move4 = 2;
    }
    else if(move5 === 0){
        move5 = 2;
    }
    else if(move6 === 0){
        move6 = 2;
    }
    else if(move7 === 0){
        move7 = 2;
    }
    else if(move8 === 0){
        move8 = 2;
    }
    else if(move9 === 0){
        move9 = 2;
    }

    
    funstart();
}
function fun3(){
    if(firstuser === 1){
        three.innerHTML = "o";
    }
    else if(firstuser === 0){
        setTimeout(function(){  three.innerHTML = "x"; }, 900);
    }
    
    barrier3 = 1;
    filledoddcount += 1;
    blockblock();
   
    lastmove = 3;
    if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){
    firstoddmove = 1;
    }

    if(countwintriple === 1){
        c = "1";
    }
    else if(countlosetriple === 1){
        c = "-1";
    }

    if(move1 === 0){
        move1 = 3;
    }
    else if(move2 === 0){
        move2 = 3;
    }
    else if(move3 === 0){
        move3 = 3;
    }
    else if(move4 === 0){
        move4 = 3;
    }
    else if(move5 === 0){
        move5 = 3;
    }
    else if(move6 === 0){
        move6 = 3;
    }
    else if(move7 === 0){
        move7 = 3;
    }
    else if(move8 === 0){
        move8 = 3;
    }
    else if(move9 === 0){
        move9 = 3;
    }

    
    funstart();
}
function fun4(){
    if(firstuser === 1){
        four.innerHTML = "o";
    }
    else if(firstuser === 0){
        setTimeout(function(){  four.innerHTML = "x"; }, 900);
    }

    barrier4 = 1;
    filledevencount += 1;
    blockblock();

    lastmove = 4;
    if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){
    firstevenmove = 1;
    }

    if(countwintriple === 1){
        d = "1";
    }
    else if(countlosetriple === 1){
        d = "-1";
    }

    if(move1 === 0){
        move1 = 4;
    }
    else if(move2 === 0){
        move2 = 4;
    }
    else if(move3 === 0){
        move3 = 4;
    }
    else if(move4 === 0){
        move4 = 4;
    }
    else if(move5 === 0){
        move5 = 4;
    }
    else if(move6 === 0){
        move6 = 4;
    }
    else if(move7 === 0){
        move7 = 4;
    }
    else if(move8 === 0){
        move8 = 4;
    }
    else if(move9 === 0){
        move9 = 4;
    }

    
    funstart();
}
function fun5(){ 
    if(firstuser === 1){
        five.innerHTML = "o";
    }
    else if(firstuser === 0){
        setTimeout(function(){ five.innerHTML = "x"; }, 900);
    }

    barrier5 = 1;
    filledoddcount += 1;
    blockblock();

    lastmove = 5;
    if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){
    first5move = 1;
    }

    if(countwintriple === 1){
        e = "1";
    }
    else if(countlosetriple === 1){
        e = "-1";
    }

    if(move1 === 0){
        move1 = 5;
    }
    else if(move2 === 0){
        move2 = 5;
    }
    else if(move3 === 0){
        move3 = 5;
    }
    else if(move4 === 0){
        move4 = 5;
    }
    else if(move5 === 0){
        move5 = 5;
    }
    else if(move6 === 0){
        move6 = 5;
    }
    else if(move7 === 0){
        move7 = 5;
    }
    else if(move8 === 0){
        move8 = 5;
    }
    else if(move9 === 0){
        move9 = 5;
    }

    
    funstart();
}
function fun6(){ 
    if(firstuser === 1){
        six.innerHTML = "o";
    }
    else if(firstuser === 0){
        setTimeout(function(){ six.innerHTML = "x"; }, 900);
    }

    barrier6 = 1;
    filledevencount += 1;
    blockblock();

    lastmove = 6;
    if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){
    firstevenmove = 1;
    }

    if(countwintriple === 1){
        f = "1";
    }
    else if(countlosetriple === 1){
        f = "-1";
    }

    if(move1 === 0){
        move1 = 6;
    }
    else if(move2 === 0){
        move2 = 6;
    }
    else if(move3 === 0){
        move3 = 6;
    }
    else if(move4 === 0){
        move4 = 6;
    }
    else if(move5 === 0){
        move5 = 6;
    }
    else if(move6 === 0){
        move6 = 6;
    }
    else if(move7 === 0){
        move7 = 6;
    }
    else if(move8 === 0){
        move8 = 6;
    }
    else if(move9 === 0){
        move9 = 6;
    }

    
    funstart();
}
function fun7(){
    if(firstuser === 1){
        seven.innerHTML = "o";
    }
    else if(firstuser === 0){
        setTimeout(function(){ seven.innerHTML = "x"; }, 900);
    }

    barrier7 = 1;
    filledoddcount += 1;
    blockblock();

    lastmove = 7;
    if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){
    firstoddmove = 1;
    }

    if(countwintriple === 1){
        g = "1";
    }
    else if(countlosetriple === 1){
        g = "-1";
    }

    if(move1 === 0){
        move1 = 7;
    }
    else if(move2 === 0){
        move2 = 7;
    }
    else if(move3 === 0){
        move3 = 7;
    }
    else if(move4 === 0){
        move4 = 7;
    }
    else if(move5 === 0){
        move5 = 7;
    }
    else if(move6 === 0){
        move6 = 7;
    }
    else if(move7 === 0){
        move7 = 7;
    }
    else if(move8 === 0){
        move8 = 7;
    }
    else if(move9 === 0){
        move9 = 7;
    }

    
    funstart();
}
function fun8(){
    if(firstuser === 1){
        eight.innerHTML = "o";
    }
    else if(firstuser === 0){
        setTimeout(function(){ eight.innerHTML = "x"; }, 900);
    }

    barrier8 = 1;
    filledevencount += 1;
    blockblock();

    lastmove = 8;
    if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){
    firstevenmove = 1;
    }

    if(countwintriple === 1){
        h = "1";
    }
    else if(countlosetriple === 1){
        h = "-1";
    }

    if(move1 === 0){
        move1 = 8;
    }
    else if(move2 === 0){
        move2 = 8;
    }
    else if(move3 === 0){
        move3 = 8;
    }
    else if(move4 === 0){
        move4 = 8;
    }
    else if(move5 === 0){
        move5 = 8;
    }
    else if(move6 === 0){
        move6 = 8;
    }
    else if(move7 === 0){
        move7 = 8;
    }
    else if(move8 === 0){
        move8 = 8;
    }
    else if(move9 === 0){
        move9 = 8;
    }

    
    funstart();
}
function fun9(){
    if(firstuser === 1){
        nine.innerHTML = "o";
    }
    else if(firstuser === 0){
        setTimeout(function(){ nine.innerHTML = "x"; }, 900);
    }

    barrier9 = 1;
    filledoddcount += 1;
    blockblock();

    lastmove = 9;
    if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){
    firstoddmove = 1;
    }

    if(countwintriple === 1){
        i = "1";
    }
    else if(countlosetriple === 1){
        i = "-1";
    }

    if(move1 === 0){
        move1 = 9;
    }
    else if(move2 === 0){
        move2 = 9;
    }
    else if(move3 === 0){
        move3 = 9;
    }
    else if(move4 === 0){
        move4 = 9;
    }
    else if(move5 === 0){
        move5 = 9;
    }
    else if(move6 === 0){
        move6 = 9;
    }
    else if(move7 === 0){
        move7 = 9;
    }
    else if(move8 === 0){
        move8 = 9;
    }
    else if(move9 === 0){
        move9 = 9;
    }

    
    funstart();
}




function funstart(){
    row1 = a + b + c;
    row2 = d + e + f;
    row3 = g + h + i;
    col1 = a + d + g;
    col2 = b + e + h;
    col3 = c + f + i;
    dia1 = c + e + g;
    dia2 = a + e + i;

    one.style.color = "white";
    two.style.color = "white";
    three.style.color = "white";
    four.style.color = "white";
    five.style.color = "white";
    six.style.color = "white";
    seven.style.color = "white";
    eight.style.color = "white";
    nine.style.color = "white";
    
    whoplay.style.display = "none";
    whoplaytext.style.color = "white";
    whoplaytext.innerHTML = "Halla Bol!";
    startgame.style.display = "none";
    document.body.style.background = "black";
    refreshgame.style.display = "block";

    if(row1 == "111" || row2 == "111" || row3 == "111" || col1 == "111" || col2 == "111" || col3 == "111" || dia1 == "111" || dia2 == "111" ){
        finalwin = 1;
        if(row1 == "111"){
            dim1 = 1;
            dim2 = 1;
            dim3 = 1;
        }
        else if(row2 == "111"){
            dim4 = 1;
            dim5 = 1;
            dim6 = 1;
        }
        else if(row1 == "111"){
            dim7 = 1;
            dim8 = 1;
            dim9 = 1;
        }
        else if(col1 == "111"){
            dim1 = 1;
            dim4 = 1;
            dim7 = 1;
        }
        else if(col2 == "111"){
            dim2 = 1;
            dim5 = 1;
            dim8 = 1;
        }
        else if(col3 == "111"){
            dim3 = 1;
            dim6 = 1;
            dim9 = 1;
        }
        else if(dia1 == "111"){
            dim3 = 1;
            dim5 = 1;
            dim7 = 1;
        }
        else if(dia2 == "111"){
            dim1 = 1;
            dim5 = 1;
            dim9 = 1;
        }
        restartfun();
    }
    if(row1 == "-1-1-1" || row2 == "-1-1-1" || row3 == "-1-1-1" || col1 == "-1-1-1" || col2 == "-1-1-1" || col3 == "-1-1-1" || dia1 == "-1-1-1" || dia2 == "-1-1-1" ){
        finallose = 1;
        if(row1 == "-1-1-1"){
            dim1 = 1;
            dim2 = 1;
            dim3 = 1;
        }
        else if(row2 == "-1-1-1"){
            dim4 = 1;
            dim5 = 1;
            dim6 = 1;
        }
        else if(row1 == "-1-1-1"){
            dim7 = 1;
            dim8 = 1;
            dim9 = 1;
        }
        else if(col1 == "-1-1-1"){
            dim1 = 1;
            dim4 = 1;
            dim7 = 1;
        }
        else if(col2 == "-1-1-1"){
            dim2 = 1;
            dim5 = 1;
            dim8 = 1;
        }
        else if(col3 == "-1-1-1"){
            dim3 = 1;
            dim6 = 1;
            dim9 = 1;
        }
        else if(dia1 == "-1-1-1"){
            dim3 = 1;
            dim5 = 1;
            dim7 = 1;
        }
        else if(dia2 == "-1-1-1"){
            dim1 = 1;
            dim5 = 1;
            dim9 = 1;
        }
        restartfun();
    }
    if(filledevencount === 4 && filledoddcount === 5){
        finaltie = 1;
        restartfun();
    }
    


startvar += 1;
if(startvar >= 3){
    startvar = 1;
} 

    if(end === 1){

    }
    else if(startvar === 2){  
        if(begningmove === 0){
            begningmove = -1;
            starterid.style.display = "block";
            starterid.innerHTML = "Guest Startd";
            starterid.style.color = "rgb(10, 94, 10)";
        }
        firstuser = 1;
        countwintriple = 0;
        countlosetriple = 1;
        allowblock();
    }
    
    else if(first5move === 0 && firstevenmove === 0 && firstoddmove === 0){ 
        if(startvar === 1){  
            if(begningmove === 0){
                begningmove = 1;
                starterid.style.display = "block";
                starterid.innerHTML = "J I N  Startd";
                starterid.style.color = "rgb(128, 2, 2)"
            }
            firstuser = 0;
            countwintriple = 1;
            countlosetriple = 0;
            odd = 1;
            randomnumber();
            odd = 0;
        }
    }
    else if(first5move === 1){ 
        
            firstuser = 0;
            countwintriple = 1;
            countlosetriple = 0;
            checkwin(); 
            if(checkwinvar === 1){ 
                checklose();
                checkwinvar = 0;
                if(checklosevar === 1){ 
                    checklosevar = 0;
                    funstart5();
                }
            }
    }
    else if(firstoddmove === 1){ 
        
        firstuser = 0;
        countwintriple = 1;
        countlosetriple = 0;
        checkwin(); 
        if(checkwinvar === 1){ 
            checklose();
            checkwinvar = 0;
            if(checklosevar === 1){
                checklosevar = 0;
                funstartodd();
            }
        }
        
    }
    else if(firstevenmove === 1){ 
        
        firstuser = 0;
        countwintriple = 1;
        countlosetriple = 0;
        checkwin(); 
        if(checkwinvar === 1){ 
            checklose();
            checkwinvar = 0;
            if(checklosevar === 1){
                checklosevar = 0;
                funstarteven();
            }
        }
        
    }
}



function randomnumber(){ 
    for(x = 0;x >= 0; x++){ 
        num1 = Math.floor(Math.random()*10);
        if(odd === 1){ 
            if(num1 % 2 === 1){
                callfun();
                return 0;
            }
        }
        else if(even === 1){
            if(num1 % 2 === 0){
                callfun();
                return 0;
            }
        }
    }

}


function callfun(){
    
    if(num1 === 0){ randomnumber(); }
    else if(num1 === 1){ if(barrier1 === 0){ fun1(); } else{ randomnumber();} }
    else if(num1 === 2){ if(barrier2 === 0){ fun2(); } else{ randomnumber();} }
    else if(num1 === 3){ if(barrier3 === 0){ fun3(); } else{ randomnumber();} }
    else if(num1 === 4){ if(barrier4 === 0){ fun4(); } else{ randomnumber();} }
    else if(num1 === 5){ if(barrier5 === 0){ fun5(); } else{ randomnumber();} }
    else if(num1 === 6){ if(barrier6 === 0){ fun6(); } else{ randomnumber();} }
    else if(num1 === 7){ if(barrier7 === 0){ fun7(); } else{ randomnumber();} }
    else if(num1 === 8){ if(barrier8 === 0){ fun8(); } else{ randomnumber();} }
    else if(num1 === 9){ if(barrier9 === 0){ fun9(); } else{ randomnumber();} }
}

function funstart5(){ 
    row2 = d + e + f;
    col2 = b + e + h;

    if(filledoddcount === 4){ 
        if(filledevencount < 4){
            even = 1;
            randomnumber();
            even = 0;  
        }     
    }
    else if( move2 === 2 || move2 === 4 || move2 === 6 || move2 === 8 ){
        if(row2 == "-110"){
            fun3();
        }
        else if(row2 == "01-1"){
            fun1();
        }
        else if(col2 == "-110"){
            fun7();
        }
        else if(col2 == "01-1"){
            fun1();
        }
        else{
            if(filledoddcount < 5){
                odd = 1;
                randomnumber();
                odd = 0;
            }
            else{
                even = 1;
                randomnumber();
                even = 0;
            }
            
        }
    }
    else{
        if(filledoddcount < 5){
            odd = 1;
            randomnumber();
            odd = 0;
        }
        else{
            even = 1;
            randomnumber();
            even = 0;
        }
        
    }
}

function funstartodd(){
    
    row1 = a + b + c;
    row2 = d + e + f;
    row3 = g + h + i;
    col1 = a + d + g;
    col2 = b + e + h;
    col3 = c + f + i;
    dia1 = c + e + g;
    dia2 = a + e + i;

if(begningmove === 1){
    if(move2 === 5){
        if(dia1 == "0-11"){
            fun3();
        }
        else if(dia1 == "1-10"){
            fun7();
        }
        else if(dia2 == "0-11"){
            fun1();
        }
        else if(dia2 == "1-10"){
            fun9();
        }
        else{
            if(filledoddcount < 5){
                odd = 1;
                randomnumber();
                odd = 0;
            }
            else{
                even = 1;
                randomnumber();
                even = 0;
            }
        }
    }
    else{
        if(row1 == "001" || col1 == "001"){
            fun1();
        }
        else if(row1 == "100" || col3 == "001"){
            fun3();
        }
        else if(row3 == "001" || col1 == "100"){
            fun7();
        }
        else if(row3 == "100" || col3 == "100"){
            fun9();
        }
        else{
            if(filledevencount < 4){
                even = 1;
                randomnumber();
                even = 0;  
            } 
            else{
                odd = 1;
                randomnumber();
                odd = 0;
            }
        }
    }
}



if(begningmove === -1){
    if(move2 === 0){
        fun5()
    }
    else if(move4 === 0){
        if(row2 == "-110" || col2 == "-110"){
            if(row1 == "00-1" || row3 == "00-1" || col1 == "00-1" || col3 == "00-1"){
                if(row1 == "000"){
                    fun2();
                }
                else if(row3 == "000"){
                    fun8();
                }
                else if(col1 == "000"){
                    fun4();
                }
                else if(col3 = "000"){
                    fun6();
                }
            }
       }
       
    
       else if(row2 == "01-1" || col2 == "01-1"){
         if(row1 == "-100" || row3 == "-100" || col1 == "-100" || col3 == "-100"){
            if(row1 == "000"){
                fun2();
            }
            else if(row3 == "000"){
                fun8();
            }
            else if(col1 == "000"){
                fun4();
            }
            else if(col3 = "000"){
                fun6();
            }
         }
       } 
         else{
            if(filledevencount < 4){
                even = 1;
                randomnumber();
                even = 0;  
            } 
            else{
                odd = 1;
                randomnumber();
                odd = 0;
            }
        }
       
    }
    else{
        if(filledevencount < 4){
            even = 1;
            randomnumber();
            even = 0;  
        } 
        else{
            odd = 1;
            randomnumber();
            odd = 0;
        }
    }
}

}

function funstarteven(){
    row1 = a + b + c;
    row2 = d + e + f;
    row3 = g + h + i;
    col1 = a + d + g;
    col2 = b + e + h;
    col3 = c + f + i;
    dia1 = c + e + g;
    dia2 = a + e + i;

    if(move2 === 0){
        fun5()
    }
    else{
        if((row1 == "0-10" || row1 == "00-1") && (col1 == "0-10" || col1 == "00-1")){
            fun1();
        }
        else if((row1 == "0-10" || row1 == "-100") && (col3 == "0-10" || col3 == "00-1")){
            fun3();
        }
        else if((row3 == "0-10" || row3 == "00-1") && (col1 == "0-10" || col1 == "-100")){
            fun7();
        }
        else if((row3 == "0-10" || row3 == "-100") && (col3 == "0-10" || col3 == "-100")){
            fun9();
        }
        else{
            if(filledoddcount < 5){
                odd = 1;
                randomnumber();
                odd = 0;
            }
            else{
                even = 1;
                randomnumber();
                even = 0;
            }
        }
    }
}

function checkwin(){ 

    row1 = a + b + c;
    row2 = d + e + f;
    row3 = g + h + i;
    col1 = a + d + g;
    col2 = b + e + h;
    col3 = c + f + i;
    dia1 = c + e + g;
    dia2 = a + e + i;

    if(row1 == "011" || row1 == "101" || row1 == "110"){ 
        if(row1 == "011"){
            num1 = 1;
            callfun();
        }
        else if(row1 == "101"){ 
            num1 = 2; 
            callfun();
        }
        else if(row1 == "110"){
            num1 = 3;
            callfun();
        }
    }
    else if(row2 == "011" || row2 == "101" || row2 == "110"){
        if(row2 == "011"){
            num1 = 4;
            callfun();
        }
        else if(row2 == "101"){
            num1 = 5;
            callfun();
        }
        else if(row2 == "110"){
            num1 = 6;
            callfun();
        }
    }
    else if(row3 == "011" || row3 == "101" || row3 == "110"){ 
        if(row3 == "011"){
            num1 = 7;
            callfun();
        }
        else if(row3 == "101"){
            num1 = 8;
            callfun();
        }
        else if(row3 == "110"){
            num1 = 9; 
            callfun();
        }
    }
    else if(col1 == "011" || col1 == "101" || col1 == "110"){ 
        if(col1 == "011"){
            num1 = 1;
            callfun();
        }
        else if(col1 == "101"){
            num1 = 4; 
            callfun();
        }
        else if(col1 == "110"){
            num1 = 7;
            callfun();
        }
    }
    else if(col2 == "011" || col2 == "101" || col2 == "110"){
        if(col2 == "011"){
            num1 = 2;
            callfun();
        }
        else if(col2 == "101"){
            num1 = 5;
            callfun();
        }
        else if(col2 == "110"){
            num1 = 8;
            callfun();
        }
    }
    else if(col3 == "011" || col3 == "101" || col3 == "110"){ 
        if(col3 == "011"){
            num1 = 3;
            callfun();
        }
        else if(col3 == "101"){
            num1 = 6;   
            callfun();
        }
        else if(col3 == "110"){
            num1 = 9;
            callfun();
        }
    }
    else if(dia1 == "011" || dia1 == "101" || dia1 == "110"){
        if(dia1 == "011"){
            num1 = 3;
            callfun();
        }
        else if(dia1 == "101"){
            num1 = 5;
            callfun();
        }
        else if(dia1 == "110"){
            num1 = 7;
            callfun();
        }
    }
    else if(dia2 == "011" || dia2 == "101" || dia2 == "110"){
        if(dia2 == "011"){
            num1 = 1;
            callfun();
        }
        else if(dia2 == "101"){
            num1 = 5;
            callfun();
        }
        else if(dia2 == "110"){
            num1 = 9;
            callfun();
        }
    }
    else{
        checkwinvar = 1;
    }
}

function checklose(){ 

    row1 = a + b + c;
    row2 = d + e + f;
    row3 = g + h + i;
    col1 = a + d + g;
    col2 = b + e + h;
    col3 = c + f + i;
    dia1 = c + e + g;
    dia2 = a + e + i;

    if(row1 == "0-1-1" || row1 == "-10-1" || row1 == "-1-10"){ 
        if(row1 == "0-1-1"){
            num1 = 1;
            callfun();
        }
        else if(row1 == "-10-1"){ 
            num1 = 2; 
            callfun();
        }
        else if(row1 == "-1-10"){
            num1 = 3;
            callfun();
        }
    }
    else if(row2 == "0-1-1" || row2 == "-10-1" || row2 == "-1-10"){
        if(row2 == "0-1-1"){
            num1 = 4;
            callfun();
        }
        else if(row2 == "-10-1"){
            num1 = 5;
            callfun();
        }
        else if(row2 == "-1-10"){
            num1 = 6;
            callfun();
        }
    }
    else if(row3 == "0-1-1" || row3 == "-10-1" || row3 == "-1-10"){ 
        if(row3 == "0-1-1"){
            num1 = 7;
            callfun();
        }
        else if(row3 == "-10-1"){
            num1 = 8;
            callfun();
        }
        else if(row3 == "-1-10"){
            num1 = 9; 
            callfun();
        }
    }
    else if(col1 == "0-1-1" || col1 == "-10-1" || col1 == "-1-10"){ 
        if(col1 == "0-1-1"){
            num1 = 1;
            callfun();
        }
        else if(col1 == "-10-1"){
            num1 = 4; 
            callfun();
        }
        else if(col1 == "-1-10"){
            num1 = 7;
            callfun();
        }
    }
    else if(col2 == "0-1-1" || col2 == "-10-1" || col2 == "-1-10"){
        if(col2 == "0-1-1"){
            num1 = 2;
            callfun();
        }
        else if(col2 == "-10-1"){
            num1 = 5;
            callfun();
        }
        else if(col2 == "-1-10"){
            num1 = 8;
            callfun();
        }
    }
    else if(col3 == "0-1-1" || col3 == "-10-1" || col3 == "-1-10"){ 
        if(col3 == "0-1-1"){
            num1 = 3;
            callfun();
        }
        else if(col3 == "-10-1"){
            num1 = 6;   
            callfun();
        }
        else if(col3 == "-1-10"){
            num1 = 9;
            callfun();
        }
    }
    else if(dia1 == "0-1-1" || dia1 == "-10-1" || dia1 == "-1-10"){
        if(dia1 == "0-1-1"){
            num1 = 3;
            callfun();
        }
        else if(dia1 == "-10-1"){
            num1 = 5;
            callfun();
        }
        else if(dia1 == "-1-10"){
            num1 = 7;
            callfun();
        }
    }
    else if(dia2 == "0-1-1" || dia2 == "-10-1" || dia2 == "-1-10"){
        if(dia2 == "0-1-1"){
            num1 = 1;
            callfun();
        }
        else if(dia2 == "-10-1"){
            num1 = 5;
            callfun();
        }
        else if(dia2 == "-1-10"){
            num1 = 9;
            callfun();
        }
    }
    else{
        checklosevar = 1;
    }
}



function restartfun(){
    end = 1;

if(dim1 === 0){    one.style.color = "rgb(61, 55, 55)";    }
if(dim2 === 0){    two.style.color = "rgb(61, 55, 55)";    }
if(dim3 === 0){    three.style.color = "rgb(61, 55, 55)";    }
if(dim4 === 0){    four.style.color = "rgb(61, 55, 55)";    }
if(dim5 === 0){    five.style.color = "rgb(61, 55, 55)";    }
if(dim6 === 0){    six.style.color = "rgb(61, 55, 55)";    }
if(dim7 === 0){    seven.style.color = "rgb(61, 55, 55)";    }
if(dim8 === 0){    eight.style.color = "rgb(61, 55, 55)";    }
if(dim9 === 0){    nine.style.color = "rgb(61, 55, 55)";    }

    starterid.style.display = 'none';
    restartgame.style.display = "block";

    if(finalwin === 1){
        whoplaytext.innerHTML = "J I N  Win";
        whoplaytext.style.color = "rgb(128, 2, 2)";
        
    }
    if(finallose === 1){
        whoplaytext.innerHTML = "Guest Win";
        whoplaytext.style.color = "rgb(10, 94, 10)";
        
    }
    if(finaltie === 1){
        whoplaytext.innerHTML = "T I E";
        whoplaytext.style.color = "white";
        
    }
}


function funrestart(){

    one.innerHTML = "";
    one.style.backgroundColor = "transparent";
    two.innerHTML = "";
    two.style.backgroundColor = "transparent";
    three.innerHTML = "";
    three.style.backgroundColor = "transparent";
    four.innerHTML = "";
    four.style.backgroundColor = "transparent";
    five.innerHTML = "";
    five.style.backgroundColor = "transparent";
    six.innerHTML = "";
    six.style.backgroundColor = "transparent";
    seven.innerHTML = "";
    seven.style.backgroundColor = "transparent";
    eight.innerHTML = "";
    eight.style.backgroundColor = "transparent";
    nine.innerHTML = "";
    nine.style.backgroundColor = "transparent";

    if(begningmove === -1){
        startvar = 2;
    }
    else if(begningmove === 1){
        startvar = 1;
    }

    end = 0;
    a = "0"; b = "0"; c = "0"; d = "0"; e = "0"; f = "0"; g = "0"; h = "0"; i = "0";
    begningmove = 0;
    countwintriple = 0;
    countlosetriple = 0;
    firstuser = 0;
    odd = 0; even = 0;
    checkwinvar = 0;  checklosevar = 0;
    first5move = 0; firstoddmove = 0; firstevenmove = 0;
    x = 0; num1 = 0; num2 = 0;
    barrier1 = 0; barrier2 = 0; barrier3 = 0; barrier4 = 0; barrier5 = 0; barrier6 = 0; barrier7 = 0; barrier8 = 0; barrier9 = 0;
    filledoddcount = 0; filledevencount = 0;
    move1 = 0; move2 = 0; move3 = 0; move4 = 0; move5 = 0; move6 = 0; move7 = 0; move8 = 0; move9 = 0;
    lasrmove = 0; 
    finallose = 0; finaltie = 0; finalwin = 0;
    dim1 = 0; dim2 = 0; dim3 = 0; dim4 = 0; dim5 = 0; dim6 = 0; dim7 = 0; dim8 = 0; dim9 = 0; 

    restartgame.style.display = "none";
    
    funstart()
}

function funrefresh(){
    window.open('ttt.html','_self');
}

