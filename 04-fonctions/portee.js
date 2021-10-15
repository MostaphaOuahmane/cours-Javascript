// alert('coucou');
function porteNew(){
    let xlet=1;
    var yvar=2;
    if(true) {
        let xlet=500;
        var yvar=200;
        document.getElementById('p1').innerHTML = 'la variable let "XLet" dans le if = '+xlet;
        document.getElementById('p2').innerHTML = 'la variable let "YVar" dans le if = '+yvar;
    } //fin if


    document.getElementById('p3').innerHTML = 'la variable let "xLet" hors de  if = '+ xlet;
    document.getElementById('p4').innerHTML = 'la variable let "Yvar" hors de   if = '+ yvar;


} // fin function 
porteNew() ;


//////////////////////////////////////////////////////////////////////////////////////////////////////

let x = 5;
var y = 10;

function portee1() {
    document.getElementById('p5').innerHTML = 'Depuis la fonction <code>portee1()</code> : x = ' + x + ' et y = ' + y;
}

portee1();

function portee2() {
    let a = 123;
    var b = 456;
    document.getElementById('p6').innerHTML = 'Depuis la fonction <code>portee2()</code> : a = ' + a+ ' et b = ' + b;
}
portee2();
function portee3() {
    let x = 20;
    var y = 444;
    document.getElementById('p7').innerHTML = 'Depuis la fonction <code>portee3()</code> : x = ' + x+ ' et y = ' + y;
}
portee3();

    document.getElementById('p8').innerHTML = 'ce code n\'est pas dans une fonction ! je suis dans l\'espace global et je cherche les contenus de x et y :'+ x+ ' et  y = ' + y;

    document.getElementById('p9').innerHTML = 'Depuis  l\'espace global  a ='+ a + ' et  b = ' + b;

