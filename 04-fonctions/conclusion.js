// alert('Hello');

// function () {
//     alert ('Alert exécutée dans une fonction anonyme ');
// }

//  let monAlert = function () {
//          alert ('Alert exécutée dans une fonction anonyme ');
//      }
//      monAlert ();

//     //  auto-invocation d'une fonction anonnyme

//     // function () {
//     //     alert ('alert dans une seconde fonction') ;
//     // }
//     //  fonction auto-invoquée (fonction tout seul)
//     (function () {
//         alert ('alert dans une seconde fonction') ;
//     })();
let para1 = document.getElementById("p1");
console.log(typeof para1, para1);
para1.addEventListener("click", function () { //Sur cette variable j'ajoute un écouteur d'événement avec, au clique, une fonction anonyme qui s'éxécute à la demande

  alert("ups ! up! lol! tu as click sur notre paragraphe-1");
});

let parat2 = document.getElementById("p2");
parat2.addEventListener("dblclick", function () {
  alert("et là double clique sur la paragarphe .");
});

// Fonctions récursives

function decompte(t) {
  if (t > 10) {
    document.getElementById('p3').innerHTML += t + "- ";
    return decompte(t - 10);
  } else {
    return t;
  }
}
//   fin fonction
decompte(1000);
