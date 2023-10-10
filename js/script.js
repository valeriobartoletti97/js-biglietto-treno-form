myDiv = document.getElementById('my-text');
/* myDiv.innerHTML = prezzoFinale */

let chilometri = parseInt(prompt('Quanti chilometri dovrai percorrere?'));
/* console.log(chilometri); */
let age = parseInt(prompt('Quanti anni hai?'));
/* console.log(age); */
const tariffa = 0.21;
let prezzoIntero = tariffa * chilometri;
/* console.log(prezzoIntero); */
let sconto = 0;

if (isNaN(chilometri) || isNaN(age)){
    myDiv.innerHTML = ('Inserisci correttamente i dati')
    window.location.reload()
};
if (age >= 65){
    let sconto = (prezzoIntero * 0.4);
    let prezzoFinale= prezzoIntero - sconto;
    myDiv.innerHTML= ('Il costo del suo biglietto è ' + prezzoFinale.toFixed(2) + '€')
} else if (age < 18){
    let sconto = (prezzoIntero * 0.2);
    let prezzoFinale= prezzoIntero - sconto;
    myDiv.innerHTML= ('Il costo del suo biglietto è ' + prezzoFinale.toFixed(2) + '€')
} else {
    myDiv.innerHTML= ('Il costo del suo biglietto è ' + prezzoIntero.toFixed(2) + '€')
};