myDiv = document.getElementById('my-text');
/* myDiv.innerHTML = prezzoFinale */

let chilometri = parseInt(prompt('Quanti chilometri dovrai percorrere?'));
let age = parseInt(prompt('Quanti anni hai?'));
const tariffa = 0.21;
let price = tariffa * chilometri;
let scontoUnder18 = price * 0.2;
let scontoOver65= price * 0.4;

if (isNaN(chilometri) || isNaN(age)){
    myDiv.innerHTML = ('Inserisci correttamente i dati')
    window.location.reload()
};
if (age >= 65){
    price= price - scontoOver65;
} else if (age < 18){
    price= price - scontoUnder18;
}
myDiv.innerHTML= ('Il costo del suo biglietto è ' + price.toFixed(2) + '€')