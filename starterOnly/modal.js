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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

btnClose.addEventListener("click", closeModal);

function closeModal () {
  modalbg.style.display = "none";
}


const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

/********** Validation du prénom */
  const baliseFirst = document.getElementById("first")
  const valeurFirst = baliseFirst.value.trim();
  if (valeurFirst.length < 2) {
    console.log('Remplir au minimum deux caractères')
    isValid = false
  } else {
    console.log('Le champ est rempli')
    isValid = true
  }

  /**********Validation du nom */
  const baliseLast = document.getElementById("last")
  const valeurLast = baliseLast.value.trim();
  if (valeurLast.length < 2) {
    console.log('Remplir au minimum deux caractères')
    isValid = false
  } else {
    console.log('Le champ est rempli')
    isValid = true
  }

  /**********Validation de l'email */
  const baliseMail = document.getElementById("email")
  const valeurMail = baliseMail.value.trim()
  const regexMail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i

  if (!regexMail.test(valeurMail)) {
    console.log('Adresse email invalide')
    isValid = false
  } else {
    console.log('Adresse email valide')
    isValid = true
  }
/**********Validation de la quantité de tournois */
const baliseQuantity = document.getElementById("quantity")
  const valeurQuantity = baliseQuantity.value.trim()
  
  const regexQuantity = /^\d+$/;

  if (!regexQuantity.test(valeurQuantity)) {
    console.log('La quantité doit être un nombre valide');
    isValid = false
  } else {
    console.log('La quantité est valide');
    isValid = true
  }


  if (isValid) {
    form.submit()
  }
});








