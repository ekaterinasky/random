const form = document.querySelector('.form');
const numberShow = document.querySelector('.show-number');
const minInput = document.querySelector('.field-min');
const maxInput = document.querySelector('.field-max');



function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //[0, 1]
}

//Получаем значения от input
function updateNumberShow() {
    const min = parseInt(minInput.value, 10);
    const max = parseInt(maxInput.value, 10);
    const randomNumber = getRandomNumber(min, max);
    numberShow.textContent = randomNumber;
}

form.addEventListener('submit', () => {
    event.preventDefault();

    setTimeout(() => {
        updateNumberShow();
    }, 100);
})

