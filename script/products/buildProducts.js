function updateProductsHtml(products) {
  var productsHtml = document.getElementById("products");
  productsHtml.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    productsHtml.appendChild(createProductHtml(products[i], i));
  }
}

function createProductHtml(product, index) {
  var productHtml = document.createElement("div");
  productHtml.className = "product";
  productHtml.appendChild(
    createProductImage(product.image, "Product " + index)
  );
  productHtml.appendChild(createProductInformation(product));
  return productHtml;
}

function createProductImage(imageUrl, altValue) {
  var imageDiv = document.createElement("div");
  imageDiv.className = "pImage";
  var image = document.createElement("img");
  image.setAttribute("src", imageUrl);
  image.setAttribute("alt", altValue);
  imageDiv.appendChild(image);
  return imageDiv;
}

function createProductInformation(product) {
  var infoDiv = document.createElement("div");
  infoDiv.className = "pInfo";
  var infoItems = [];
  for (let prop in product) {
    switch (prop) {
      case "title":
        infoItems[0] = createInfoItem(product[prop], "pName");
        break;
      case "brand":
        infoItems[2] = createInfoItem("Brand : " + product[prop], "pBrand");
        break;
      case "colour":
        infoItems[1] = createInfoItem(
          "Color : " + product[prop].title,
          "pColor"
        );
        break;
      case "price":
        infoItems[3] = createInfoItem(
          "Price : " + product[prop].final_price,
          "pPrice"
        );
        break;
      default:
        break;
    }
  }
  for (let item of infoItems) {
    infoDiv.appendChild(item);
  }
  var addToCartButton = createInfoItem("Add to cart", "addToCart");
  addToCartButton.onclick = addToCart;
  infoDiv.appendChild(addToCartButton);
  return infoDiv;
}

function createInfoItem(info, className) {
  var infoItemDiv = document.createElement("div");
  infoItemDiv.className = className;
  var infoItemSpan = document.createElement("span");
  infoItemSpan.innerHTML = info;
  infoItemDiv.appendChild(infoItemSpan);
  return infoItemDiv;
}

function getUniqueList(list) {
  var uniqueList = [];
  for (let item of list) {
    if (!uniqueList.includes(item)) {
      uniqueList.push(item);
    }
  }
  return uniqueList;
}

function getCheckboxes(checkboxValues, name) {
  var checkboxes = [];
  for (let checkboxValue of checkboxValues) {
    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", name);
    checkbox.setAttribute("value", checkboxValue);
    var textNode = document.createTextNode(checkboxValue);
    div.appendChild(checkbox);
    div.appendChild(textNode);
    checkboxes.push(div);
  }
  return checkboxes;
}

function updateFilters(products) {
  var uniqueColors = getUniqueList(
    products.map(product => product.colour.title)
  );
  var uniqueBrands = getUniqueList(products.map(product => product.brand));
  var colorCheckboxes = getCheckboxes(uniqueColors, "color");
  var brandCheckboxes = getCheckboxes(uniqueBrands, "brand");
  var brandFilters = document.getElementById("brandFilters");
  brandFilters.innerHTML = "";
  brandFilters.append(...brandCheckboxes);
  var colorFilters = document.getElementById("colorFilters");
  colorFilters.innerHTML = "";
  colorFilters.append(...colorCheckboxes);
}

function toggleFilters() {
  var toggleButtons = document.querySelectorAll(".filterBox .title");
  for (let toggleButton of toggleButtons) {
    toggleButton.onclick = function(e) {
      var filter = e.target.nextElementSibling;
      if (!filter.className.includes("show")) {
        filter.className += " show";
      } else {
        filter.className = filter.className.split(" show").join("");
      }
    };
  }
}

function updateShowingText(x, y) {
  document.getElementById("showing").innerHTML = `Showing ${x} of ${y}`;
}
