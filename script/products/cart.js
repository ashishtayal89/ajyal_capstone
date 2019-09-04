function updateCart() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var user = localStorage.getItem("LoggedInUser");
  document.getElementById("cart").innerHTML = `${cart[user]} Items`;
}

function emptyCart() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var user = localStorage.getItem("LoggedInUser");
  var confirmToEmpty = confirm("Are you sure you want to empty cart");
  cart[user] = confirmToEmpty ? 0 : cart[user];
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart").innerHTML = `${
    JSON.parse(localStorage.getItem("cart"))[user]
  } Items`;
}

function addToCart() {
  addItemToCart();
  var user = localStorage.getItem("LoggedInUser");
  document.getElementById("cart").innerHTML = `${
    JSON.parse(localStorage.getItem("cart"))[user]
  } Items`;
}

function addItemToCart() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  var user = localStorage.getItem("LoggedInUser");
  if (cart[user]) {
    cart[user] = parseInt(cart[user]) + 1;
  } else {
    cart[user] = 1;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
}
