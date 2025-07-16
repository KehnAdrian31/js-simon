// recuperare gli elementi del dom che ci servono
const numbersList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const inputs = document.querySelectorAll('input');
const countdownElement = document.getElementById('countdown');
const message = document.getElementById('message');
const instructions = document.getElementById('instructions');
const button = document.querySelector('button');

//definizione della funzione che genera i numeri random
const generateRandomNumbers = (min, max) => {
  //definisco un array vuoto in cui mettere i numeri generati
  const random = [];

  //ciclo fino a che l' array random non abbia lunghezza di 5
  while(random.length < 5){
    //genero il numero random
    const number = Math.floor(Math.random() * (max - min +1)) + min;
    //verifico se l' array random ha il numero
    if(random.includes(number) === false){
      // inserisco il numero generato nell' array
      random.push(number);
    }
  }

  return random;
}

//genero i numeri random
const numbers = generateRandomNumbers(1,10);


//definisco la variabile che mi contiene i secondi
let time = 10;
//devo mostrare i numeri a video
//ciclo l' array numbers
for(let i=0; i<numbers.length; i++){
  numbersList.innerHTML += `<li class="list-item">${numbers[i]}</li>`;
}

//mostro il valore time dentro l' elemento countdown
countdownElement.innerText = time;

//definisco il setInterval che mi scale i secondi e mi nasconde i numeri per farmi apparire la form
const countdown = setInterval(() =>{
  //vado a decremenare il valore di time per mostrarlo sempre a video
  time--;
  countdownElement.innerText = time;

  //mostro i campi output quandi time scende a 0, nascondo i numeri e cancellare l' intervallo
  if(time === 0){
    //cancello l'intervallo ( fa si che time non scenda sotto lo zero)
    clearInterval(countdown);
    //rimuovo la classe d-none a form
    form.classList.remove('d-none');
    //aggiungo la classe d-none a numbers-list
    numbersList.classList.add('d-none');
    instructions.innerText = `Digita i numeri che ricordi e visualizza il risultato`;


  }
}, 1000);

//definisco la funzione che al click del pulsante mi recupera i numeri che l' utente ha inserito e controlla quali sono presenti nell' array di quelli generati random
const confirm = (e) => {
  
  // definisco l' array che mi contiene i numeri inseriti dall' utente
  const userNumbers = [];

  //definisco un nuovo array, in cui vado ad inserire solo i numeri che l' utente ha indovinato
  const correctAnswers = [];

  // ciclo inputs per recuperare i valori inseriti dall' utente e metterli nell' array userNumbers
  for(let i=0; i<inputs.length; i++){
    userNumbers.push(parseInt(inputs[i].value));
  }

  // ciclo l' array userNumbers e confronto l' elemento attualmente ciclato con quelli presenti nell' array dei generati casualmente
  for(let i=0; i<userNumbers.length; i++){
    if(numbers.includes(userNumbers[i])){
      correctAnswers.push(userNumbers[i]);
    }
  }
  //mostro il messaggio all' utente
  message.classList.remove(`text-danger`);
  message.innerText = `Hai indovinato ${correctAnswers.length} (${correctAnswers})`;
  
}

//dimostro il risultato
button.addEventListener(`click`, (e) =>{
  e.preventDefault();
  confirm();
})