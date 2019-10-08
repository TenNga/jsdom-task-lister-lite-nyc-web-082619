let form = document.querySelector('#create-task-form');
let list = document.querySelector('#tasks');
let input = document.querySelector('#new-task-description');

let deleteButton = document.querySelector('#delete');



addList = (event) => {
  let priority = document.querySelector('#prio').value
  event.preventDefault();
  list.insertAdjacentHTML('beforeend',`<li style="background-color: ${priority}"> ${input.value}</li><button>x</button>`)
}

deleteList = () => {
  list.childNodes[list.childNodes.length-1].remove();
}
form.addEventListener("submit", addList);

deleteButton.addEventListener('click',deleteList);