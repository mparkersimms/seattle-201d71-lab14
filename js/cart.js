/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
console.log(table);
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
  
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
var removeButton;
var tableBodyElement = table.getElementsByTagName('TBODY')[0];
console.log(Product.allProducts);

function showCart() {
  
  // TODO: Find the table body
  
  
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < cart.items.length; i++){
    var tableRow = document.createElement('tr');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    removeButton = document.createElement('button');
    removeButton.name = cart.items[i].product;
    removeButton.textContent = "x";
    tableBodyElement.appendChild(tableRow);
    tableRow.appendChild(removeButton);
    tableRow.appendChild(td2);
    tableRow.appendChild(td3);
    td2.textContent = cart.items[i].quantity;
    td3.textContent = cart.items[i].product;
    
    for (var j = 0; j < Product.allProducts.length; j++){
      console.log(cart.items[i].product);
      console.log(Product.allProducts[j].name);

      if(cart.items[i].product === Product.allProducts[j].name){
        console.log(Product.allProducts[j].filePath);
        var td4 = document.createElement('td');
        td4.textContent = "test";
        var imgElement = document.createElement('img');
        console.log(Product.allProducts[j].filePath);
        imgElement.src = Product.allProducts[j].filePath;
        tableRow.appendChild(imgElement);
      }
    }
    

  }
  // x TODO: Create a TR
  // x TODO: Create a TD for the delete link, quantity,  and the item
  // x TODO: Add the TR to the TBODY and each of the TD's to the TR

}
table.addEventListener('click', removeItemFromCart);

 function removeItemFromCart(event) {
  cart.removeItem(event.target.name);
  cart.saveToLocalStorage();
  tableBodyElement.textContent = '';
  showCart();
  }
    
  
  // x TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // x TODO: Save the cart back to local storage
  // x TODO: Re-draw the cart table



// This will initialize the page and draw the cart on screen
renderCart();
