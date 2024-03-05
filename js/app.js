// 1. Prendere l'elemento età dell'utente dall'html e salvarla in una variabile 
const inputAgeElement = document.getElementById('age'); //string  


// 2. Prendere l'elemento distanza dall'html 
const inputDistanceElement = document.getElementById('distance'); //string 


// Prendere l'elemento nome dall'html 
const inputNameElement = document.getElementById('name') //string

// Validazione dei dati


// Stampare in console il valore di age e distance al click di submit:
const submitElement = document.getElementById('submit') // Element | null
// Aggiungere un eventListener al submit
submitElement.addEventListener('click', function() {
    //stampare in console i valori di age e distance 
        // Definizione delle variabili età e distanza  (e nome)
    const age = parseInt(inputAgeElement.value) //number | NaN 
    const distance = parseInt(inputDistanceElement.value) //number | NaN 
    console.log(age, distance);
    const name = inputNameElement.value //string
    

    // 3. Calcolare il prezzo del biglietto 
    const price = distance * 0.21 //number | NaN
    console.log('il prezzo è: ', price)

    // Dichiarazione della variabile sconto
    let discount = 0; 
        //sconto minorenni
    // // if (age < 18) {
    // //     discount = price * 0.2;
    // //     console.log(discount);
    // //     //sconto over 65
    // // } else if (age >= 65) {
    // //     discount = price * 0.4;
    // //     console.log(discount);
    // // }

    // discount for select 
    if (inputAgeElement.value === 'minor') {
        discount = price * 0.2;
    } else if (inputAgeElement.value === 'senior') {
        discount = price * 0.4;
    }

    // Calcolare il prezzo finale del biglietto

    const finalPrice = price - discount;  //number | NaN
    console.log(finalPrice)

    //Stampare il nome del passeggero
    const passengerNameDisplay = document.getElementById('passenger_name');
    passengerNameDisplay.innerHTML = name

    // 4. Stampare il prezzo 
    const finalPriceDisplay = document.getElementById('ticket_price') //Element | null
    finalPriceDisplay.innerHTML = finalPrice

    // Stampare il fullprice 
    const fullPriceDisplay = document.getElementById('fullprice'); //Element | null
    fullPriceDisplay.innerHTML = price;

    //Stampare lo sconto in percentuale 
    const discountPercentageDisplay = document.getElementById('ticket_discount'); // Element | null
    if (inputAgeElement.value === 'minor') {
        discountPercentageDisplay.innerHTML = '20%'
    } else if (inputAgeElement.value === 'senior') {
        discountPercentageDisplay.innerHTML = '40%'
    } else {
        discountPercentageDisplay.innerHTML = '0%'
    }
})






