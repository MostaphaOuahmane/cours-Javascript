// alert('Hello,objet');
let auteur = 'victor Hugo';
let utilisateur = {
    nom : ['victor','Marie','Hugo'],
    age:2,
    emai:'toto@gmail.com',
    adresse:'tagmout/taghjijt/geulmim',
    bonjour: function(){
        alert('bonjour j\ai '  + this.age +  ' ans et mon nom est ' + this.nom[0] +' '+this.nom[1] +' '+this.nom[2]);
    }
}

console.info(typeof utilisateur,utilisateur);

utilisateur.bonjour();