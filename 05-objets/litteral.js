// alert('Hello,objet');

let victor = {
    nom : ['victor','Marie','Hugo'],
    age:2,
    email:'toto@gmail.com',

    bonjour: function(){
        alert('bonjour je suis  '+' '+ this.nom [0]+  '  ' + this.nom [1] + '  ' +this.nom [2] + '  '+' j\'ai' +'  ' + this.age+ ' '+'ans');
    }
}

console.info(typeof victor,victor);

victor.bonjour();
document.getElementById('p1').innerHTML='Nom : '  + victor.nom;
document.getElementById('p2').innerHTML='Age : '  + victor.age + ' ans.';
document.getElementById('p3').innerHTML='Email : '  + victor.email ;

victor.age=80;
console.info(typeof victor,victor);
document.getElementById('p4').innerHTML=' Nouvel Age : '  + victor.age + ' ans.';

victor.metier='écrivain ,dramaturge et poéte' ;
console.info( typeof victor,victor);
victor.metier='écrivain éxilé ,dramaturge et poéte' ;
console.info(  victor.metier);
victor.adresse='en son avenue, à Paris' ;
console.info(  victor.adresse);
victor.bonjour2=function(){
    alert('Bonjour  j\'ai  mantenant '+ ' '+  + this.age +' '+  'ans, je suis ' +' ' +
    this.metier  +  'et je suis célébre dans le monde entier') ;
} 
victor.bonjour2();
document.getElementById('p5').innerHTML= 'Bonjour je suis '+''+victor.nom[0]+' '+victor.nom[2]+'  et je suis  ' +''+victor.metier;
