let entreUtilisateur = ""
let nombre1 = ""
let nombre2 = ""
let operateur = ""
let resultat = ""

const zoneAffichage = document.getElementById("zoneAffichage")

//Cette fonction vérifie si le nombre entré est le premier ou non d'une suite de chiffre formant le nombre souhaiter par l'utilisateur

function ajoutNombre1(nombreEntre,entreUtilisateur){
    if (entreUtilisateur === "") {
        entreUtilisateur = nombreEntre.toString()
        return entreUtilisateur
    }else{
        entreUtilisateur = entreUtilisateur + nombreEntre.toString()
        return entreUtilisateur
    }
}

// Cette fonction surveille l'apparition de changement dans la DOM, ici la cible est "zoneAffichage"
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (operateur === "") {
            nombre1 = entreUtilisateur
            console.log(nombre1)
        }
        if (nombre1 !== "" && operateur === ""){
            operateur = entreUtilisateur
            console.log(operateur)
        }
        if (operateur !== "" && nombre1 !== "") {
            nombre2 = entreUtilisateur
            console.log(nombre2)
        }
    });
});

const targetNode = document.getElementById("zoneAffichage");
const config = {CharacterData: true,attributes: true,childList: true};

//regroupement de toutes les fonctions d'appui sur un boutton pour nettoyer le code de la boucle principal
function regroupementFonctionAction(){
    appuiBoutonUn()
    appuiBoutonDeux()
    appuiBoutonTrois()
    appuiBoutonQuatre()
    appuiBoutonCinq()
    appuiBoutonSix()
    appuiBoutonSept()
    appuiBoutonHuit()
    appuiBoutonNeuf()
    appuiBoutonZero()
    appuiBouttonCE()
    operateur = appuiBouttonPlus()
    operateur = appuiBouttonMoins()
    operateur =  appuiBouttonFois()
    operateur = appuiBouttonDiviser()
}

//fonction gérant la boucle principal du programme
function bouclePrincipal(){
regroupementFonctionAction()
observer.observe(targetNode, config);
console.log(nombre1)
console.log(operateur)
console.log(nombre2)
}