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
const confirmationMessage =document.querySelector(".confirmationMessage")

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

  // Réinitialisation des messages d'erreur
  const errorMessages = document.querySelectorAll(".formData .error-message");
  errorMessages.forEach((errorElement) => {
    if (errorElement) {
      errorElement.style.display = "none";
    }
  });

  /********** Validation du prénom */
  const baliseFirst = document.getElementById("first");
  let valeurFirst = baliseFirst.value.trim();
  const errorElementFirst = document.getElementById("error-element-first");

  function verifierChampPrenom(champ, valeurFirst, errorElement) {
    if (valeurFirst.length < 2) {
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none"; // Cache l'erreur si le champ est valide
      return true 
    }
  }
  // Vérifier en temps réel pendant l'entrée dans le champ prénom
  baliseFirst.addEventListener("input", () => {
    valeurFirst = baliseFirst.value.trim();
    verifierChampPrenom(baliseFirst, valeurFirst, errorElementFirst);
  });

  // Vérification du prénom à la soumission
  if (!verifierChampPrenom(baliseFirst, valeurFirst, errorElementFirst)) {
    isValid = false
  };


  /********** Validation du nom */
  const baliseLast = document.getElementById("last");
  const errorElementLast = document.getElementById("error-element-last");

  // Fonction de validation du champ nom
  function verifierChampNom(champ, errorElement) {
    let valeur = champ.value.trim();
    console.log("Valeur du champ nom :", valeur);
    if (valeur.length < 2) {
      console.log("Nom invalide, affichage du message d'erreur");
      errorElement.style.display = "block";
      return false;
    } else {
      console.log("Nom valide, suppression du message d'erreur");
      errorElement.style.display = "none"; // Cache l'erreur si le champ est valide
      return true;
    }
  }
  // Vérifier en temps réel pendant l'entrée dans le champ nom
  baliseLast.addEventListener("input", () => {
    verifierChampNom(baliseLast, errorElementLast);
  });

  // Vérification du nom à la soumission
  if (!verifierChampNom(baliseLast, errorElementLast)) {
    isValid = false;
  }


  /********** Validation de l'email */
  const baliseMail = document.getElementById("email");
  let valeurMail = baliseMail.value.trim();
  const errorElementMail = document.getElementById("error-element-mail");
  const regexMail = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

  function verifierMail(baliseMail, valeurMail, errorElement) {
    if (!regexMail.test(valeurMail)) {
      errorElement.style.display = "block";
      return false
    } else {
      errorElement.style.display = "none"; // Cache l'erreur si le champ est valide
      return true
    }
  }
  // Vérifier en temps réel pendant l'entrée dans le champ email
  baliseMail.addEventListener("input", () => {
    valeurMail = baliseMail.value.trim();
    verifierMail(baliseMail, valeurMail, errorElementMail);
  });

  // Vérification de l'email à la soumission
  if (!verifierMail(baliseMail, valeurMail, errorElementMail)) {
    isValid = false
  };

  /************ Validation de la date de naissance */
  const birthdateInput = document.getElementById("birthdate");
  const errorElementBirthdate = document.getElementById("error-element-birthdate");

  function verifierBirthdate(champ, errorElement) {
    if (!birthdateInput.value) {
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true
    }
  }

  // Vérification de la date de naissance à la soumission
  if (!verifierBirthdate(birthdateInput, errorElementBirthdate)) {
    isValid = false
  };

  /********** Validation de la quantité de tournois */
  const baliseQuantity = document.getElementById("quantity");
  const valeurQuantity = baliseQuantity.value.trim();
  const regexQuantity = /^\d+$/;

  if (!regexQuantity.test(valeurQuantity)) {
    isValid = false;
  }

  /********** Validation du tournoi */
  const baliseCheck = document.querySelectorAll("input[name='location']");
  const errorElementTournoi = document.getElementById("error-element-tournoi");
  let isBaliseChecked = false;
  baliseCheck.forEach((radio) => {
    if (radio.checked) {
      isBaliseChecked = true;
    }
  });

  function verifierTournoi(isBaliseChecked, errorElement) {
    if (isBaliseChecked) {
      errorElement.style.display = "none";
      return true 
    } else {
      errorElement.style.display = "block";
      return false
    }
  }

  if (!verifierTournoi(isBaliseChecked, errorElementTournoi)) {
    isValid = false
  };

  /********** Validation des conditions générales */
  const baliseCondGen = document.getElementById("checkbox1");
  const errorElementConditions = document.getElementById("error-element-conditions");
  let isBaliseCondGenChecked = baliseCondGen.checked;

  function verifierConditions(isBaliseCondGenChecked, errorElement) {
    if (isBaliseCondGenChecked) {
      errorElement.style.display = "none";
      return true
    } else {
      errorElement.style.display = "block";
      return false
    }
  }

  if (!verifierConditions(isBaliseCondGenChecked, errorElementConditions)) {
    isValid = false
  };

  // Si toutes les validations sont passées, soumettre le formulaire
  if (isValid) {
    form.style.display = "none";
    confirmationMessage.style.display = "block";
    form.reset();
  }
});












