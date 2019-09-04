var products;
var globalFilteredProducts;
fetch("./public/products.json")
  .then(response => response.json())
  .then(data => {
    products = data.products;
    globalFilteredProducts = [...products];
    updateFilters(data.products);
    updateProductsHtml(data.products);
    updateShowingText(globalFilteredProducts.length, products.length);
  });

function logout() {
  var confirmLogout = confirm("Do you want to logout");
  if (confirmLogout) {
    localStorage.removeItem("LoggedInUser");
    window.location = "./index.html";
  }
}

(function() {
  var user = localStorage.getItem("LoggedInUser");
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (user) {
    document.getElementById("user").innerHTML = user;
    if (cart) {
      if (!cart[user]) {
        cart[user] = 0;
      }
    } else {
      cart = {};
      cart[user] = 0;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    window.location = "./index.html";
  }
  updateCart();
  toggleFilters();
})();
