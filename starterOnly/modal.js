function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.querySelector(".close")
const form = document.querySelector("form")
const modalBody = document.querySelector(".content")
const confirmationMessage =document.getElementById("confirmationMessage")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
btnClose.addEventListener("click", closeModal);

// close modal form
function closeModal () {
  modalbg.style.display = "none";
}

// submit form event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = true;

  

/********** Validation du prénom */


  const baliseFirst = document.getElementById("first")
  const valeurFirst = baliseFirst.value.trim();
  const errorElementFirst = document.getElementById("error-element-first")
  errorElementFirst.style.display ="none"
  
  function verifierChamp(champ, valeur, errorElement) {
    if (valeur.length <2) {
      errorElement.style.display ="block"
  } else {
    errorElement.style.display = "none"; // Cache l'erreur si le champ est valide
  }
}

baliseFirst.addEventListener("input",() => {
  const valeurFirst = baliseFirst.value.trim()
  verifierChamp(baliseFirst, valeurFirst, errorElementFirst)
})

verifierChamp(baliseFirst, valeurFirst, errorElementFirst);




  /**********Validation du nom */
  const baliseLast = document.getElementById("last")
  const valeurLast = baliseLast.value.trim();
  const errorElementLast = document.getElementById("error-element-last")
  errorElementLast.style.display ="none"

  baliseLast.addEventListener("input",() => {
    const valeurLast = baliseLast.value.trim()
    verifierChamp(baliseLast, valeurLast, errorElementLast)
  })

verifierChamp(baliseLast, valeurLast, errorElementLast)


  /**********Validation de l'email */
  const baliseMail = document.getElementById("email")
  const valeurMail = baliseMail.value.trim()
  const regexMail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i

  if (!regexMail.test(valeurMail)) {
    console.log('Adresse email invalide')
    isValid = false
  } 

/************Validation de la date de naissance */
const birthdateInput = document.getElementById("birthdate");
const valeurBirthdate = birthdateInput.value.trim();
const errorElementBirthdate = document.getElementById("error-element-birthdate");

function verifierBirthdate(champ, valeur, errorElement) {
  console.log("Vérification de la date de naissance");  // Vérifie si la fonction est appelée
  if (!birthdateInput.value) {
    console.log("La date est vide");  // Vérifie si la condition est vraie
    errorElementBirthdate.style.display = "block";  // Affiche le message d'erreur
  } else {
    console.log("La date est remplie");
    errorElementBirthdate.style.display = "none";  // Cache le message d'erreur
  }
}

verifierBirthdate(birthdateInput,valeurBirthdate, errorElementBirthdate)

birthdateInput.addEventListener("input", verifierBirthdate);

/**********Validation de la quantité de tournois */
  const baliseQuantity = document.getElementById("quantity")
  const valeurQuantity = baliseQuantity.value.trim()
  const regexQuantity = /^\d+$/;

  if (!regexQuantity.test(valeurQuantity)) {
    console.log('La quantité doit être un nombre valide');
    isValid = false
  } 


  /***Validation tournoi */
const baliseCheck = document.querySelectorAll("input[name='location']");
const errorElementTournoi = document.getElementById("error-element-tournoi")

let isBaliseChecked = false 
baliseCheck.forEach((radio) => {
  if (radio.checked) {
    isBaliseChecked = true;
  }
})

  function verifierTournoi(isBaliseChecked, errorElement){
    if (isBaliseChecked) {
      errorElement.style.display ="none"
  } else {
    errorElement.style.display = "block"; // Affiche l'erreur si le champ est non valide
  }
  }

  verifierTournoi(isBaliseChecked, errorElementTournoi)


/*** Validation conditions générales */
const baliseCondGen = document.getElementById("checkbox1")
const errorElementConditions = document.getElementById("error-element-conditions")
let isBaliseCondGenChecked = false
if (baliseCondGen.checked) {
  isBaliseCondGenChecked = true
}
if (!isBaliseCondGenChecked) {
  console.log('Veuiller sélectionner la case')
  isValid = false
}

function verifierConditions(isBaliseCondGenChecked, errorElement) {
  if (isBaliseCondGenChecked) {
    errorElement.style.display ="none"
  } else {
    errorElement.style.display="block"
  }
}

verifierConditions(isBaliseCondGenChecked, errorElementConditions)


if (isValid) {
  modalBody.style.display="none"
  modalbg.style.display="none"
  confirmationMessage.style.display = "block"
  
  form.reset()


}
})











