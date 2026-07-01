//Creates const that points towards the html element with id "jsButtonAdd"
const removeFood = document.querySelector('#delete');

//Adds a function that gets activated upon being clicked on
removeFood.addEventListener('click', () =>{
    //Clears everything from the localstorage
    localStorage.clear();
});