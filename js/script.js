/*
let price = tariffa * km;


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
const sendButton = document.querySelector('.btn-success')
const resetButton = document.querySelector('.btn-warning')
let discountUnder18 = 0.2;
let discountOver65= 0.4;
let ticket = document.querySelector('.ticket')

sendButton.addEventListener('click', function(){
   let name = document.getElementById('name-surname').value;
   let km = parseInt(document.getElementById('km').value);
   let age = document.getElementById('age').value;
   if (isNaN(km) || name === '' || age === ''){
    alert('Devi compilare i campi in modo corretto !')
   } else {
    console.log(name, km, age);
     
    ticket.classList.remove('d-none');
    /* let namePassenger = */
   }
});
