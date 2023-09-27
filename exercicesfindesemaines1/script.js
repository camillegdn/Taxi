"Use a strict"

let personnage = "John" //nom du personnages 
let santeMentale=10 //initialiser la santé d'arthus
let nbrTaxi=0 // initialiser le compteur de taxis
let changementTaxi=0; //unitialiser le compteur de changement

console.log(personnage+", boulanger à ses jours perdus veut rentrer chez lui, il a 1h de trajet et décide de prendre un taxi");

function entrerTaxi() {
    nbrTaxi++ ; // +1 dans le compteur 

    //chosir un nombre aléatoire entre 1&5 (pour le nombre de chansons)
    const radio = Math.floor(Math.random() * 5) +1;

    // simulation dans chacuns des choix de musiques

    if (radio == 1){
        santeMentale--
        console.log(personnage +" entend le titre Anissa de Wejdene à la radio");
        console.log("La santé mentale de"+personnage+" se détériore et passe à " + santeMentale + ", il décide de changer de taxi");
        changementTaxi++
    }else if (radio == 2){
        console.log(personnage+" entend le titre Canada de 1PLIKÉ140")
        console.log(personnage+ " dit : Quel bon choix de musique");
        console.log("Sa santé mentale reste à " + santeMentale)
    }else if (radio == 3){
        console.log(personnage+" entend le titre Copine de PLK")
        console.log(personnage+" dit : Quel bon choix de musique");
        console.log("Sa santé mentale reste à " + santeMentale)
    }else if (radio == 4){
        console.log(personnage+ " entend le titre Système de Luidji")
        console.log(personnage + " dit : Quel bon choix de musique");
        console.log("Sa santé mentale reste à " + santeMentale)
    }else if (radio == 5){
        console.log(personnage +" entend le titre Malpolis de Kalash et Damso")
        console.log(personnage + " dit : Quel bon choix de musique");
        console.log("Sa santé mentale reste à " + santeMentale)
    }

}

while (santeMentale>0 && nbrTaxi<30) {
    const taxi = entrerTaxi()
    console.log("Il reste " + (30-nbrTaxi) + " avant que " + personnage + " ne soit rentré chez lui");
}
if (santeMentale <= 0) {
    console.log("EXPLOSION");
    console.log("La santé mentale de " +personnage + " ne lui a pas permis de finir sa course, après avoir écouté une daube 10 fois, il décidera de rentrer à pied pour une durée de 3h");
}else{
    console.log(personnage + " est bien rentré chez lui sain et sauf avec une santé mentale de " + santeMentale)
}

console.log("Il a changé " + changementTaxi + " fois de taxi avant de rentrer chez lui");