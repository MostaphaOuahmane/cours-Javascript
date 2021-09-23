// mon premier fichier.js 

alert('coucou');
let bonjour = document.getElementById ('b1');
let ajouter = document.getElementById('b2');
bonjour.addEventListener('click',poup);
ajouter.addEventListener('click',ajout);
function poup(){
    alert('he patrick vous avrez un chargeur')
}
function ajout(){
    let para = document.createElement('p');
    para.textContent = 'Paragraphe ajouté';
    document.body.appendChild(para);
}