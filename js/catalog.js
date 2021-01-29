/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  selectElement.name = "item";
  var optionElement = document.createElement('option')
  optionElement.textContent = "Select Product";
    selectElement.appendChild(optionElement);
  for (var i = 0 ; i < Product.allProducts.length; i++) {
    var optionElement = document.createElement('option')
    optionElement.value = Product.allProducts[i].name;
    optionElement.textContent = Product.allProducts[i].name;
    selectElement.appendChild(optionElement);

  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // X TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart(event);
  cart.saveToLocalStorage(event);
  updateCounter(event);
  updateCartPreview(event);
  event.target.item.value = "";
  event.target.quantity.value = 0;
}
var quantityElement = document.getElementById('quantity');
quantityElement.name = 'quantity';
// X TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // X TODO: suss out the item picked from the select list
  // X TODO: get the quantity
  // X TODO: using those, add one item to the Cart
  var product = event.target.item.value;
  var quantity = event.target.quantity.value;
  var test = new CartItem(event.target.item.value,event.target.quantity.value);
  cart.addItem(product,quantity); 
  console.log(test);
  console.log(typeof(event.target.quantity.value))
}
var itemCounterElement = document.getElementById('itemCount')
var counterNumber = 0;
itemCounterElement.textContent = counterNumber;
// X TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter(event) {
  counterNumber = counterNumber + parseInt(event.target.quantity.value);
  itemCounterElement.textContent = counterNumber;
  console.log(parseInt(event.target.quantity.value));
}

var cartContentsElement = document.getElementById('cartContents');
var ulElement = document.createElement('ul')
cartContentsElement.appendChild(ulElement);
// X  TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview(event) {
  var liElement = document.createElement('li');
  liElement.textContent = event.target.quantity.value + event.target.item.value;
  ulElement.appendChild(liElement);
  // X TODO: Get the item and quantity from the form
  // X TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

var submitButton = document.createElement('input');
submitButton.type = "submit";
submitButton.value = 'Submit Order';
cartContentsElement.appendChild(submitButton);
submitButton.addEventListener('click', function(event){
ulElement.style.display='none';
  
  
  var divElement = document.createElement('div');
  cartContentsElement.appendChild(divElement);
  var spanElement = document.createElement('span');
  divElement.appendChild(spanElement);
  var aElement = document.createElement('a');
  divElement.appendChild(aElement);
  aElement.href = 'cart.html'
  aElement.textContent = 'Click here to view your shopping Cart';
  spanElement.textContent = 'Your order has been submitted!';


});
// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
