//Task1
const shoppingList = [];
function addItem(item){
    let hasItem;
    for(let product of shoppingList){
        if(product==item){
            hasItem=true;
        }
    }
    if(!hasItem ){
        shoppingList.push(item)
    }
    
}
//original
//const addItem = (item)=>shoppingList.push(item);
//const removeItem= ()=> shoppingList.pop();

addItem('mouse')
addItem('pc')
addItem('monitor')
addItem('keybord')
addItem('pc')
addItem('mac-pc')
addItem('pcpc')
addItem('putaropc')

//removeItem()
function removeItem(){
    shoppingList.pop()
}

function displayList(){
    console.log(shoppingList)
 }
displayList()

//Task2
function filterItems(searchTerm){
    const result = shoppingList.filter((item) => item.includes(searchTerm))
    console.log(result);
}
console.log(shoppingList);
filterItems('pc')

//Task3
// 1.Create an HTML page with an input field, an “Add Item” button, and an unordered list to display the items.
// 2.Write a JavaScript function that adds items to the array and updates the displayed list dynamically when the button is clicked.
// 3.Write another function that removes the last item and updates the displayed list when a “Remove Last Item” button is clicked.


//select or query elements
const input = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const itemsUl = document.getElementById("shopping-list");
const removeBtn = document.getElementById("remove-btn");

console.log(input);
console.log(addButton);
console.log(itemsUl);
console.log(removeBtn);

function addAndDisplayItems() {
   //add the item to the array(input-line 53)
    shoppingList.push(input.value);

    //create a new element
    let li = document.createElement('li');
    
    //update the element with the text
    li.textContent = input.value;
    
    // append the new element to the ul
    itemsUl.appendChild(li);

    //clears the input text
    input.value ="";
    console.log(shoppingList);
}

//when click, add function
function removeLastIteAndUpdate(){
    //remove the last item in the array
    shoppingList.pop();
    //remove the last item from the ul
    itemsUl.lastElementChild.remove();
    console.log(shoppingList);
}

addButton.addEventListener('click', addAndDisplayItems);
removeBtn.addEventListener('click', removeLastIteAndUpdate);


