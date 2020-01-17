//------------------regex modal connect--------------------------
let modalConnectValid = document.getElementById('boutonEnvoieConnect');

let emailConnect = document.getElementById('emailConnect');
let forgetEmailConnect = document.getElementById('forgetEmailConnect');

let regexMailConnect = /^[a-zA-Z0-9.-]+@[a-z0-9.-]+.[com|fr]{2,4}$/;

//vérifie le mail---------------------
modalConnectValid.addEventListener('click', validMailConnect);//déclenche la fonction au click

function validMailConnect(event) {

    //Si le champ est vide
    if (emailConnect.validity.valueMissing) {
        event.preventDefault();
        //écrit le msg a la place de la balise span
        forgetEmailConnect.textContent = 'Mail manquant';
    } 
    //si le format est incorrect
    else if (regexMailConnect.test(emailConnect.value) == false) {
    event.preventDefault();
    forgetEmailConnect.textContent = 'Format incorrect';
    }
};

//------------vérifie le mdp--------------------
let mdpConnect = document.getElementById('mdpConnect');
let forgetPasswordConnect = document.getElementById('forgetPasswordConnect');

modalConnectValid.addEventListener('click', validPasswordConnect);

function validPasswordConnect(event) {

    //Si le champ est vide
    if (mdpConnect.validity.valueMissing) {
        event.preventDefault();
        forgetPasswordConnect.textContent = 'Mdp manquant';
    } 
};
//-----------------regex modal Sign--------------------
let modalSignValid = document.getElementById('boutonEnvoieSign');

let nomSign = document.getElementById('nomSign');
let forgetNameSign = document.getElementById('forgetNameSign');
let nameSignValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

let prenomSign = document.getElementById('prenomSign');
let forgetPrenomSign = document.getElementById('forgetPrenomSign');

let emailSign = document.getElementById('emailSign');
let forgetEmailSign = document.getElementById('forgetEmailSign');

let mdpSign = document.getElementById('mdpSign');
let forgetMdpSign = document.getElementById('forgetMdpSign');
let regMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,10}/;

let mdpSignConfirm = document.getElementById('mdpSignConfirm');
let forgetPasswordConfirm = document.getElementById('forgetPasswordConfirm');

let adresseSign = document.getElementById('adresseSign');
let forgetAdress = document.getElementById('forgetAdress');

let telSign = document.getElementById('telSign');
let forgetTelSign = document.getElementById('forgetTelSign');
let regTel = /^((\+)33|0)[1-9](\d{2}){4}$/;

//vérifie le nom--------------------
modalSignValid.addEventListener('click', validNameSign);

function validNameSign(event) {

    //Si le champ est vide
    if (nomSign.validity.valueMissing) {
        event.preventDefault();
        forgetNameSign.textContent = 'nom manquant';
    } 
    else if (nameSignValid.test(nomSign.value) == false) {
    event.preventDefault();
    forgetNameSign.textContent = 'Format incorrect';
    }
};

//vérifie le prenom-------------------
modalSignValid.addEventListener('click', validFirstNameSign);

function validFirstNameSign(event) {

    //Si le champ est vide
    if (prenomSign.validity.valueMissing) {
        event.preventDefault();
        forgetPrenomSign.textContent = 'prenom manquant';
    } 
    else if (nameSignValid.test(prenomSign.value) == false) {
    event.preventDefault();
    forgetPrenomSign.textContent = 'Format incorrect';
    }
};

//vérifie le mail-------------------
modalSignValid.addEventListener('click', validMailSign);

function validMailSign(event) {

    //Si le champ est vide
    if (emailSign.validity.valueMissing) {
        event.preventDefault();
        forgetEmailSign.textContent = 'Mail manquant';
    } 
    else if (regexMailConnect.test(emailSign.value) == false) {
    event.preventDefault();
    forgetEmailSign.textContent = 'Format incorrect';
    }
};
modalSignValid.addEventListener('click', validTelSign);

function validTelSign(event) {

    //Si le champ est vide
    if (telSign.validity.valueMissing) {
        event.preventDefault();
        forgetTelSign.textContent = 'tel manquant';
    } 
    else if (regTel.test(telSign.value) == false) {
        event.preventDefault();
        forgetTelSign.textContent = 'Format incorrect';
    }
};
//vérifie le tel----------------------------
modalSignValid.addEventListener('click', validPasswordSign);

function validPasswordSign(event) {
    
    //Si le champ est vide
    if (mdpSign.validity.valueMissing) {
        event.preventDefault();
        forgetMdpSign.textContent = 'mdp manquant';
    }
    else if (regMdp.test(mdpSign.value) == false) {
        event.preventDefault();
        forgetMdpSign.textContent = 'Format incorrect';
    }
};

//vérifie le mdp confirm--------------
modalSignValid.addEventListener('click', validPasswordConfirm );

function validPasswordConfirm(event){

    if (mdpSignConfirm.validity.valueMissing){
        event.preventDefault();
        forgetPasswordConfirm.textContent = 'mdp manquant';
    }
    else if (regMdp.test(mdpSignConfirm.value) == false) {
        event.preventDefault();
        forgetPasswordConfirm.textContent = 'Format incorrect';
    }
};

//vérifie l'adresse--------------
modalSignValid.addEventListener('click', validAdressSign );

function validAdressSign(event){

    if (adresseSign.validity.valueMissing){      
        forgetAdress.textContent = 'adresse manquante';
    }
};

//vérifie que le mdp et mdpConfirm sont identique--------------------
modalSignValid.addEventListener('click', confirmPassword)

function confirmPassword(event){

    let mdpSignIdentical = document.getElementById("mdpSign").value;
    let mdpSignConfirmIdentical = document.getElementById("mdpSignConfirm").value;

    if (mdpSignIdentical!== mdpSignConfirmIdentical){
        event.preventDefault();
        forgetMdpSign.textContent = 'mdp non identique';
        forgetPasswordConfirm.textContent = 'mdp non identique';
    }
};