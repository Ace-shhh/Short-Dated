const addButton = document.querySelector('.add-button');
const addItemForm = document.getElementById('addItemForm');
const closeForm = document.getElementById('closeForm');

addButton.addEventListener('click', () => {
    addItemForm.style.display = 'block';
})

closeForm.addEventListener('click', () => {
    addItemForm.style.display = 'none';
})