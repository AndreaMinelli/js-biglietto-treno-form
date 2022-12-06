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

//Variabili fisse

const price = 0.21;
const minorAgeDiscount = 0.20;
const overAgeDiscount = 0.40;
let finalPrice;

//Eventi logici

button.addEventListener('click', function () {
    const userKm = parseInt(km.value.trim());
    const userAge = age.value;
    const routPrice = price * userKm;

    finalPrice = routPrice;

    if (userAge < 18) {
        const discountPrice = routPrice * minorAgeDiscount;
        finalPrice = routPrice - discountPrice;
    } else if (userAge >= 65) {
        const discountPrice = routPrice * overAgeDiscount;
        finalPrice = routPrice - discountPrice;
    }

    const finalPriceDisplayed = finalPrice.toFixed(2);

    console.log(finalPriceDisplayed + '€');
});