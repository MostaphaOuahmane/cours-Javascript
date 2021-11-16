// alert test
// alert('bonjour : ouahmane :)');
let parler= ''; // j'ai declaré un variable (parler) comme un chaîne de caractère
console.log(typeof parler, parler);

let  i = 1;// j'ai declaré un variable (("i") qui commence à partir  de ("1")) ;


while ((parler !== 'oui') && (parler !== 'non')) { //  de but  de boucle while
    parler = prompt(' vous pouvez joue avec mois s\'il vous plait ! :)  oui ou non');
    console.log(parler);
    i++ ;   //     (i++) pour ajouter un étap chaque éxecution

}
//  fin de boucle while
console.log(parler);
document.getElementById('oui-non').classList.add('Hello');  
// .classList.add('Hello') pour ajouter un classe de style qui j'ai déclare dans mon page (style)
document.getElementById('oui-non').innerHTML = 'Vous avez perdu';

