//creates a function that puts out all the items into the DOM
function showFood(){

    //Dude I'm so fucking tired of putting all these comments down

    //Creates a const that selects the HTML id "foodList"
    const list = document.querySelector('#foodList');
    //Creates a const that reads out all items from the localstorage
    const foods = localStorage.getItem('localStorageFood');

    //Checks if the localstorage has 0 items, if it does...
    if(!foods){
        //Changes the html to display "nothing here yet"
        const emptyList = document.createElement('article');
        emptyList.innerHTML = 'nothing here yet';
        list.appendChild(emptyList);
        //returns so no other code is executed
        return;
    }
        
    //if the localstorage has more than 1 item...
    list.innerHTML = foods
    //executes whatever the fuck this is
    //This piece of shit won't work and I can't figure out why
    .map(f=> `${f.localStorageFood}<br><br>`)
    .join('');
}
//Executes the function "showFood"
showFood();