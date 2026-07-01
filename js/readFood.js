//creates a function that puts out all the items into the DOM
function showFood(){

    //Dude I'm so fucking tired of putting all these comments down
    //Creates a const that reads out all items from the localstorage
    const foods = localStorage.getItem('localStorageFood');
    //Creates a const that selects the HTML id "foodList"
    const list = document.querySelector('#foodList');

    //Checks if the localstorage has 0 items, if it does...
    if(foods.length === 0){
        const list = document.querySelector('#foodList');
        //Changes the html to display "nothing here yet"
        const emptyList = document.createElement('article');
        emptyList.innerHTML = '<article class="button hoverlessEffect">nothing here yet</article>';
        list.appendChild(emptyList);
        //returns so no other code is executed
        return;
    }
        
    //if the localstorage has more than 1 item...
    list.innerHTML = foods
    //executes whatever the fuck this is
    .map(f=> `${localStorageFood}<br><br>`)
    .join('');
}
//Executes the function "showFood"
showFood();