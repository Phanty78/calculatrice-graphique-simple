//function d'attente d'événements

function appuiBoutonUn(){
    const bouttonUn = document.getElementById("un")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(1,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBoutonDeux(){
    const bouttonUn = document.getElementById("deux")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(2,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBoutonTrois(){
    const bouttonUn = document.getElementById("trois")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(3,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBoutonQuatre(){
    const bouttonUn = document.getElementById("quatre")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(4,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBoutonCinq(){
    const bouttonUn = document.getElementById("cinq")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(5,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBoutonSix(){
    const bouttonUn = document.getElementById("six")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(6,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBoutonSept(){
    const bouttonUn = document.getElementById("sept")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(7,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBoutonHuit(){
    const bouttonUn = document.getElementById("huit")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(8,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBoutonNeuf(){
    const bouttonUn = document.getElementById("neuf")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(9,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBoutonZero(){
    const bouttonUn = document.getElementById("zero")
    bouttonUn.addEventListener("click", () =>{
        entreUtilisateur = ajoutNombre1(0,entreUtilisateur)
        zoneAffichage.innerHTML = entreUtilisateur
    })
}

function appuiBouttonCE(){
    const bouttonCE = document.getElementById("remiseAZero")
    bouttonCE.addEventListener("click", () =>{
        entreUtilisateur = ""
        nombre1 = ""
        nombre2 = ""
        operateur = ""
        resultat = ""
        zoneAffichage.innerHTML = ""
    })

}

function appuiBouttonPlus(){
    const bouttonPlus = document.getElementById("plus")
    bouttonPlus.addEventListener("click", () =>{
        zoneAffichage.innerHTML = "+"
        return "+"
    })
}

function appuiBouttonMoins(){
    const bouttonPlus = document.getElementById("moins")
    bouttonPlus.addEventListener("click", () =>{
        zoneAffichage.innerHTML = "-"
        return "-"
    })
}

function appuiBouttonFois(){
    const bouttonPlus = document.getElementById("fois")
    bouttonPlus.addEventListener("click", () =>{
        zoneAffichage.innerHTML = "X"
        return "*"
    })
}

function appuiBouttonDiviser(){
    const bouttonPlus = document.getElementById("diviser")
    bouttonPlus.addEventListener("click", () =>{
        zoneAffichage.innerHTML = "/"
        return "/"
    })
}