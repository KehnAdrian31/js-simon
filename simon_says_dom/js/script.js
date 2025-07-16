// recuperare gli elementi del dom che ci servono
const numbersList = document.getElementById('numbers-list');
const form = document.getElementById('answers-form');
const inputs = document.querySelectorAll('input');
const countdown = document.getElementById('countdown');
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

//devo mostrare i numeri a video
//ciclo l' array numbers
for(let i=0; i<numbers.length; i++){
  numbersList.innerHTML += `<li class="list-item">${numbers[i]}</li>`;
}