
const ul = document.querySelector('ul');
const inp = document.querySelector('input');
document.body.style.background = 'orange';
let divContainer = document.createElement('div');
divContainer.classList.add('d-flex', 'flex-column'); 
ul.appendChild(divContainer);

function toCreat() {
    let li = document.createElement('li');
    let input = document.createElement('input');
    let div = document.createElement('div'); 
    div.classList.add('d-flex');
    input.type = 'checkbox';
    input.classList.add('mx-2');
    li.textContent = inp.value;
    li.classList.add('list-group-item');
    li.style.border = '1px solid green';
    li.classList.add('my-3');
    input.setAttribute('onclick', 'removeListItem(this)');
    div.appendChild(li);
    div.appendChild(input);
    divContainer.appendChild(div);
    
    inp.value = '';
}

function removeListItem(checkbox) {
    if (checkbox.checked) {
        checkbox.parentNode.remove();
    }
}