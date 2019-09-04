function updateProductsHtml(products) {
  var productsHtmlContainer = document.getElementById("products");
  var productsHtml = "";
  for (let i = 0; i < products.length; i++) {
    productsHtml += createProductHtml(products[i], i);
  }
  productsHtmlContainer.innerHTML = productsHtml;
}

function createProductHtml(product, index) {
  var productHtml = `<div class='product'> 
    ${createProductImage(product.image, "Product " + index)}
    ${createProductInformation(product)}
    </div>`;
  return productHtml;
}

function createProductImage(imageUrl, altValue) {
  return `<div class='pImage'><img src='
    ${imageUrl}' alt='${altValue}'></img></div>`;
}

function createProductInformation(product) {
  var infoDiv = "<div class='pInfo'>";
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
    infoDiv += item;
  }
  infoDiv += createInfoItem("Add to cart", "addToCart");
  return infoDiv + "</div>";
}

function createInfoItem(info, className) {
  return `<div class='${className}'><span>${info}</span></div>`;
}
