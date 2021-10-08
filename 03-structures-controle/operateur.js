let x= 5, y=-20;
console.log(x,y);
//ET noté &&
if(x >= 0 && x <= 10){ //ET noté && dans cet exemple chaque condition doit être vrai
    document.getElementById('p1').innerHTML =
    'x contient ' + x +' une valeur comprise entre 0 et 10';
}

// ou = || //

//OU noté //
if(y < -10 || y > 10){
    document.getElementById('p2').innerHTML =
    'y contient '+ y +' une valeur plus petite que -10 ou plus grande que 10';
}
// ou =! ce n'est pas vrai
if(!(x <= 2)){
    document.getElementById('p3').innerHTML =
    'x contient ' + x +' une valeur strictement supérieure à 2';
}



