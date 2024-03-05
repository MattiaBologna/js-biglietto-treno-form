// 1. Prendere l'età dell'utente dall'html e salvarla in una variabile 
const inputAgeElement = document.getElementById('age'); //string  
console.log(inputAgeElement);


// 2. Prendere il numero di kilometri dall'html 
const inputDistanceElement = document.getElementById('distance'); //string 
console.log(inputDistanceElement);

// Stampare in console il valore di age e distance al click di submit:
const submitElement = document.getElementById('submit') // Element | null
    // Aggiungere un eventListener al submit
    submitElement.addEventListener('click', function() {
        //stampare in console i valori di age e distance
        console.log(inputAgeElement.value, inputDistanceElement.value)
    })

// 3. Calcolare il prezzo del biglietto 

// 4. Stampare il prezzo 

