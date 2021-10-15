//JS pour la page 04 01 intro.html

// alert('coucou');

console.log(Math.random());
document.getElementById('p1').innerHTML = Math.random();//ici on exécute le code "caché" derriére la fonction, on appelle ou on l'invoque

//replace
let discours1 = 'Bonjour, je suis Donald Trump et j\'ai gagné';
console.log(discours1);

let discours2 = discours1.replace('Donald Trump', 'Joe Biden');
console.log(discours2);

document.getElementById('p2').innerHTML = discours2;

//création de fonctions
//1- multiplier le résultat de random() par 100

function randomFois100() {
    return Math.random() * 100;
}
//console.log(randomFois100);
document.getElementById('p3').innerHTML = randomFois100();

//2nd exemple une multiplication 

function multiplier(nbr1,nbr2) {
    // return (nbr1*nbr2);
    return(' Multiplication de ' +nbr1+  ' x ' +  nbr2 + ' = ' + (nbr1*nbr2)); 
}
// ici on appelle la fonction 
console.log(multiplier(2,56));
document.getElementById('p4').innerHTML = multiplier(56,9);

//  EXO faites une fonction pour soustraire un nombre d'un autre 
// saustraction 
function soustraire(nbr1,nbr2) {
    // return (nbr1-nbr2);
    return(' Soustraction :' +nbr1+  ' - ' +  nbr2 + ' = ' + (nbr1-nbr2)); 
}
console.log(soustraire(10,54));
document.getElementById('p5').innerHTML = soustraire(56,9);

// division
function division(nbr1,nbr2) {
    // return (nbr1/nbr2);
    return(' division  :' +nbr1+  ' / ' +  nbr2 + ' = ' + (nbr1-nbr2)); 
}
console.log(division(10,54));
document.getElementById('p6').innerHTML =  division(56,9);
//Addition
function addittion(nbr1, nbr2) {
    //return (nbr1 * nbr2);
    return ('addition : '+ nbr1 + ' + '+ nbr2 +' = ' + (nbr1 + nbr2));
}
console.log(addittion(5,40));
document.getElementById('p7').innerHTML = addittion(56,9);

//Le modulo%
function lemodulo(nbr1, nbr2) {
    //return (nbr1 % nbr2);
    return ('Le modulo : '+ nbr1 + ' / '+ nbr2 +' = ' + (nbr1 % nbr2));
}
console.log(lemodulo(10,54));
document.getElementById('p8').innerHTML = lemodulo(10,54);