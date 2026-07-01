//Creates const that points towards the html element with id "jsButtonAdd"
const addFood = document.querySelector('#jsButtonAdd');

//Adds a function that gets activated upon being clicked on
addFood.addEventListener('click', () =>{
    //Prevents the form from refreshing
    event.preventDefault();

    //creates a new const containing whatever you filled in the html input
    const foodItem = document.querySelector('#food').value;

    //logs the console, for debugging purposes
    //console.log(foodItem);
    //console.log("OMG!!!!! YOU CLICKED IT!!!!");
    
    //stops the code if foodItem is empty
    if (!foodItem) return

    //creates a new html <article> element
    const newElement = document.createElement('article');
    newElement.className = 'popup';

    //creates a DOM element
    newElement.innerHTML = `<article class="button hoverlessEffect">${foodItem} added.</article>`;

    //adds the item to the list of DOM
    const list = document.querySelector('#popupAdd');
    list.appendChild(newElement);
});