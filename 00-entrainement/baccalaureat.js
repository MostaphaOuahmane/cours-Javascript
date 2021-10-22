let bac = parseFloat(prompt('saisir votre moyenne de bac '));
console.log( typeof bac,bac);

if(!isNaN(bac )){
    if(bac >= 0 && bac < 10) {
        document.getElementById('P1').innerHTML = 'votre moyenne est : ' + bac + '  '+ '  alors vous avez Recalé  car le moyenne  de bac inférieure à 10 ';
    
    } else if (bac >= 10 && bac < 12) {
        document.getElementById('P1').innerHTML = 'votre moyenne est : ' + bac +' '+ ' vous avez reçu  votre bac sans mention moyenne entre 10 et 12 ';
    }else if (bac >= 12 && bac <= 20) {
        document.getElementById('P1').innerHTML = 'votre moyenne est : ' + bac +'  ' + '  alors vous avez reçu Reçu votre bac  avec mention par-ce-que votre  moyenne supérieure ou égale à 12 ';
    }else{
     document.getElementById('P1').innerHTML=('la moiyenne doit être comprise entre 0 et 20 !:)')
    }

}else {
    document.getElementById('P1').innerHTML = 'Vous n\'avez pas saisi de nombre ';

}

