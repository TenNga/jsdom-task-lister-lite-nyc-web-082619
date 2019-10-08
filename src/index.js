let form = document.querySelector('#create-task-form');
let list = document.querySelector('#tasks');
let input = document.querySelector('#new-task-description');

let deleteButton = document.querySelector('#delete');

addList = (event) => {
  event.preventDefault();
  list.insertAdjacentHTML('beforeend',`<li> ${input.value}</li>`)
}

deleteList = () => {
  list.childNodes[list.childNodes.length-1].remove();
}
form.addEventListener("submit", addList);

deleteButton.addEventListener('click',deleteList);