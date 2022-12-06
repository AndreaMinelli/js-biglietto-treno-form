/* 
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
*/

//Targhettizzo gli elementi nella pagina

const km = document.getElementById('km');
const age = document.getElementById('age');
const button = document.getElementById('button');
const buttonReset = document.getElementById('button-reset');
const targetUserName = document.getElementById('user-name');


//Targettizzo gli elementi del biglietto
const ticketName = document.getElementById('ticket-name');
const offerType = document.getElementById('offer-type');
const cabNumber = document.getElementById('cab-number');
const cpCode = document.getElementById('cp-code');
const ticketPrice = document.getElementById('ticket-price');




//Variabili fisse

const price = 0.21;
const minorAgeDiscount = 0.20;
const overAgeDiscount = 0.40;
let finalPrice;

//Eventi logici

//Button calcolo prezzo e eventuali sconti
button.addEventListener('click', function () {
    const userKm = parseInt(km.value.trim());
    const userAge = age.value;
    const userName = targetUserName.value.trim();
    const routPrice = price * userKm;

    let valid = true;

    if (!isNaN(userName) || !(userName)) {
        valid = false;
        alert('Hai inserito credenziali non valide, prego inserire Nome e Cognome.');
    } else if (isNaN(userKm) || userKm <= 0) {
        valid = false;
        alert('Hai inserito km non validi, prego reinserire dati.');
    };

    if (valid) {
        finalPrice = routPrice;
        offerType.innerText = 'Biglietto Standard'
        ticketName.innerText = userName;

        if (userAge === 'minor') {
            const discountPrice = routPrice * minorAgeDiscount;
            finalPrice = routPrice - discountPrice;
            offerType.innerText = 'Sconto Minorenni'
        } else if (userAge === 'over') {
            const discountPrice = routPrice * overAgeDiscount;
            finalPrice = routPrice - discountPrice;
            offerType.innerText = 'Sconto Over 65'
        }

        const finalPriceDisplayed = finalPrice.toFixed(2);

        //Calcolo numero carrozza
        const randomCab = Math.floor(Math.random() * 8) + 1;
        cabNumber.innerText = randomCab;

        //Calcolo Codice CP
        const randomCp = Math.floor(Math.random() * (100000 - 10000) + 10000);
        cpCode.innerText = randomCp;

        ticketPrice.innerText = finalPriceDisplayed + '€';
    };
});

//Button reset dei campi
buttonReset.addEventListener('click', function () {
    targetUserName.value = '';
    km.value = '';
    age.value = 'adult';
});