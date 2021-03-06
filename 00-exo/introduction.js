// evenement// page 07/01 intro 

1// Evenement avec une fonction
let event1 = document.querySelector('#rouge');
console.log(event1);
console.log(event1.innerHTML);
//on va utiliser addEventListener (ecouteurs d'evenements)

event1.addEventListener('click',fonctionDivRouge);

function fonctionDivRouge(){
    alert('Vous avez cliquer sur la div rouge !');
    this.style.backgroundColor = 'pink';
}

//création de la fonction 
// si je veux débugger la fonction je peux passer e comme event dans les paramètres et faire un console.log(e) dans la fonction 
// function fonctionDivRouge(e) {
//     console.log(e);
//     alert('Vous avez cliqué sur la div #rouge !');
// }

// second exemple avec une fonction anonyme
let event2 = document.querySelector('#p1');
console.log(event2);

event2.addEventListener('click',function(){
    alert('Vous avez cliquer sur le paragraphe id p1 !');
    this.style.backgroundColor = 'pink';
    this.style.color = 'black';
});

//2 nouveau mot-clef "mouseover"

document.getElementById('orange').addEventListener('mouseover',fonctionDivOrange);

function fonctionDivOrange(e){
    // console.log(e);
    alert('Vous avez survoler  la div orange !');
    this.style.backgroundColor = 'pink';
    this.innerHTML = 'coucou';
    this.style.fontSize = '1.5em';
    this.style.display = 'none';
}

