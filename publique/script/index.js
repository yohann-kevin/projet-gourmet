let slide = ["publique/image/slider-index/patate.jpg", "publique/image/slider-index/poulet.jpg",
    "publique/image/slider-index/sandwich.jpg", "publique/image/slider-index/saucisse.jpg",
    "publique/image/slider-index/pizza.jpg", "publique/image/slider-index/plat.jpg"
];

let i = 0;

setInterval(function () {
    document.getElementById('slide2').src = slide[i];
    i++;
    if (i == 6) i = 0;
}, 3000);

function ChangeSlide(sens) {
    i = i + sens;
    if (i < 0)
        i = slide.length - 1;
    else if (i > slide.length - 1)
        i = 0;
    document.getElementById('slide2').src = slide[i];
}
//---------------------regex/validation/contact-----------------------------------------
let formValid = document.getElementById('boutonEnvoie');

let mail = document.getElementById('emailContact');
let forgetEmail = document.getElementById('forgetEmail');
let regexMail = /^[a-zA-Z0-9.-]+@[a-z0-9.-]+.[com|fr]{2,4}$/;


let prenom = document.getElementById('prenomContact');
let forgetFirstName = document.getElementById('forgetFirstName');
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

let nom = document.getElementById('nomContact');
let forgetLastName = document.getElementById('forgetLastName');

let message = document.getElementById('messageContact');
let forgetMessage = document.getElementById('forgetMessage');

formValid.addEventListener('click', validFirstName);

function validFirstName(event) {

    //Si le champ est vide
    if (prenom.validity.valueMissing) {
        event.preventDefault();
        forgetFirstName.textContent = 'Prénom manquant';

        //Si le format de données est incorrect
    } else if (prenomValid.test(prenom.value) == false) {
        event.preventDefault();
        forgetFirstName.textContent = 'Format incorrect';
    }
};

formValid.addEventListener('click', validMail);

function validMail(event) {

    if (mail.validity.valueMissing) {
        event.preventDefault();
        forgetEmail.textContent = 'mail manquant';
    } else if (regexMail.test(mail.value) == false) {
        event.preventDefault();
        forgetEmail.textContent = 'Format incorrect';
    }

};
formValid.addEventListener('click', validName);

function validName(event) {

    if (nom.validity.valueMissing) {
        event.preventDefault();
        forgetLastName.textContent = 'Nom manquant';
    } else if (prenomValid.test(nom.value) == false) {
        event.preventDefault();
        forgetLastName.textContent = 'Format incorrect';
    }
};
formValid.addEventListener('click', validMessage);

function validMessage(event) {

    if (message.validity.valueMissing) {
        event.preventDefault();
        forgetMessage.textContent = 'Message manquant';
    }
};
//-----------------------cookie------------------------------------------
function masqueCookie() {
    let cookie = document.getElementById('cookie');
    cookie.style.display = "none";
}
//---------class active --------------------------------------------
function menuActive(indexActive) {
    let menu = document.getElementById('menu');
    let element = menu.getElementsByClassName('nav-item');

    element[indexActive].className += " active";
};
//---api adresse--------
function search() {

    document.getElementById("wrapper").innerHTML = "";
    let adresse = document.getElementById("adresseSign").value;

    fetch('https://api-adresse.data.gouv.fr/search/?q=%27' + adresse)
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            for (let i = 0; i < 5; i++) {
                let p = document.createElement("p");
                p.classList.add('list');
                p.innerText = json.features[i].properties.label;
                document.getElementById("wrapper").appendChild(p);
                p.addEventListener('click', function () {
                    let add = document.getElementById("adresseSign");
                    add.value = p.textContent;
                    p.innerHTML = "";
                });
            }
        })
}
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log("ID: " + profile.getId()); 
//   console.log('Full Name: ' + profile.getName());
//   console.log('Given Name: ' + profile.getGivenName());
//   console.log('Family Name: ' + profile.getFamilyName());
//   console.log("Image URL: " + profile.getImageUrl());
//   console.log("Email: " + profile.getEmail());

//   var id_token = googleUser.getAuthResponse().id_token;
//   console.log("ID Token: " + id_token);
// }