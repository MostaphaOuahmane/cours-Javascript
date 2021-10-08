// alert('coucou');
let x= 15;
let y=-20 ;
console.log(x,y);
if (x>=10) {
    document.getElementById('p1').innerHTML = 'x contient ' + x +' une valeur strictement supérieure ou égal à 10';
} else {
    document.getElementById('p1').innerHTML = 'x contient ' + x +' une valeur strictement inférieur  à 10';
}
document.getElementById('p2').innerHTML= x>=10 ?   'x est supérieur ou égal à 10 ' : 'x est inféreur à 10';


//  1


 if (y > 10) {
    document.getElementById('p3').innerHTML = 'y contient ' + y +' une valeur strictement supérieure  à 10';
} else {
    document.getElementById('p3').innerHTML = 'y contient ' + y +' une valeur strictement inférieur  à 10 ';
}


// 2


document.getElementById('p4').innerHTML= y>10 ?  ' y'  + y + 'est supérieur à 10 ' :'y est inféreur à 10';