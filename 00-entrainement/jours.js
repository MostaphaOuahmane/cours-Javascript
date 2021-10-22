let jours = parseInt(prompt('saisir le nombre de mois '));
console.log( typeof jours,jours);
if(jours == 1) {
    document.getElementById('P1').innerHTML = 'On est au janvier il y a 31 jours '
}else if (jours == 2) {
    document.getElementById('P1').innerHTML = 'On est au février il y a  entre 28 et 29 jours '
}else if (jours == 3) {
    document.getElementById('P1').innerHTML = 'On est au mars il y a 31 jours '
}else if (jours == 4) {
    document.getElementById('P1').innerHTML = 'On est au avril il y a 30 jours  ';
}else if (jours == 5) {
    document.getElementById('P1').innerHTML = 'On est au mai il y a 31 jours ';
}else if (jours == 6) {
    document.getElementById('P1').innerHTML = 'On est au juin il y a 30 jours ';
}else if (jours == 7) {
    document.getElementById('P1').innerHTML = 'On est au juillet il y a 31 jours ';
}else if (jours == 8) {
    document.getElementById('P1').innerHTML = 'On est au août il y a 31 jours ';
}else if (jours == 9) {
    document.getElementById('P1').innerHTML = 'On est au septembre il y a 30 jours ';
}else if (jours == 10) {
    document.getElementById('P1').innerHTML = 'On est au octobre il y a 31 jours ';
}else if (jours == 11) {
    document.getElementById('P1').innerHTML = 'On est au novembre il y a 30 jours ';
}else if (jours ==12) {
    document.getElementById('P1').innerHTML = 'On est au décembre il y a 31 jours ';
}else{
    
    document.getElementById('P1').innerHTML = 'UPS UPS mon ami On n\'est sur terre  il ya que 12 mois :-) ';
}