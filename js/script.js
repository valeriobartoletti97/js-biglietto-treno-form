/* let age,km
let price = tariffa * km;
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
} */

const tariffa = 0.21;
const button = document.querySelector('.btn-success')

button.addEventListener('click', function(){
   let km = document.getElementById('km').value;
   if (value = isNaN){
    
   }
});
