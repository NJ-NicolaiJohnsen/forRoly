
const listDiv = document.querySelector('.list-items-div');
const inputText = document.querySelector('#foo');
inputText.value = '';
const form = document.querySelector('form');
const submit = document.getElementById('foo-submit');
let deleteItem;
let item;
let itemComplete;




function createListItem(){

    let items = inputText.value;

    item = document.createElement('LI')
    item.innerHTML = items;
    listDiv.appendChild(item);

    if (inputText.value === ""){
        item.parentNode.removeChild(item);
    }
    
}

document.addEventListener('keyup', event => {
    if (event.keyCode === 13){
        createListItem();
        form.reset();
    }
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    createListItem();
    form.reset();
})

let listElements = document.querySelectorAll("LI");
for (i=0; i<listElements.length; i++){
    deleteItem = document.createElement('p');
    let deleteItemTxt = document.createTextNode("Delete");
    deleteItem.classList.add('delete');
    deleteItem.appendChild(deleteItemTxt);
    listElements[i].appendChild(deleteItem);
}