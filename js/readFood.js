//creates a function that reads all items from the localstorage
function readFoodList(){
    //returns the "usable" list of items
    return JSON.parse (localStorage.getItem('localStorageFood')) || [];
}

//creates a function that puts out all the items into the DOM
function showFood(){

    //Dude I'm so fucking tired of putting all these comments down
    //Creates a const that just executes the function "readFoodList"
    const foods = readFoodList();
    //Creates a const that selects the HTML id "foodList"
    const list = document.querySelector('#foodList');

    //Checks if the localstorage has 0 items, if it does...
    if(localStorageFood.length === 0){
        //Changes the html to display "no food items yet"
        list.innerHTML = '<p>no food items yet</p>';
        //returns so no other code is executed
        return;
    }
        
    //if the localstorage has more than 1 item...
    list.innerHTML = localStorageFood
    //executes whatever the fuck this is
    .map(b=> `${foodItem}<br><br>`)
    .join('');
}
//Executes the function "showFood"
showFood;