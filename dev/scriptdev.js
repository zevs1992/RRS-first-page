const newPerson = document.querySelector('#newPerson');
const mainElem = document.querySelector('#mainElem');
const button = document.getElementsByTagName('button')[0]

button.addEventListener('click', function () {
   const copy = newPerson.cloneNode(true);
   mainElem.appendChild(copy);
})