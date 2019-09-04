var getSearchProducts = (searchText, products) =>
  products.filter(
    product =>
      product.title.toLocaleLowerCase().includes(searchText) ||
      product.brand.toLocaleLowerCase().includes(searchText) ||
      product.colour.title.toLocaleLowerCase().includes(searchText)
  );

function search() {
  var searchText = document
    .getElementById("searchInput")
    .value.toLocaleLowerCase();
  var filteredProducts = getSearchProducts(searchText, globalFilteredProducts);
  updateProductsHtml(filteredProducts);
  updateShowingText(filteredProducts.length, products.length);
}

function getSelectedDropdown(dropdown) {
  return dropdown[dropdown.selectedIndex].value;
}

function getSelectedCheckboxes(checkboxGroup) {
  let selectedCheckboxes = [];
  for (let checkbox of checkboxGroup) {
    if (checkbox.checked) {
      selectedCheckboxes.push(checkbox.value);
    }
  }
  return selectedCheckboxes;
}

function getFilteredProducts(filters, products) {
  return products.filter(product => {
    var isRequiredBrand = filters.brands.length
      ? filters.brands.some(brand => {
          return brand === product.brand;
        })
      : true;
    var isRequiredColor = filters.colors.length
      ? filters.colors.some(color => {
          return color === product.colour.title;
        })
      : true;
    var isAboveMinPrice = filters.price[0]
      ? filters.price[0] <= product.price.final_price
      : true;
    var isBelowMaxPrice = filters.price[1]
      ? filters.price[1] >= product.price.final_price
      : true;
    var isAboveMinDiscount = filters.discount[0]
      ? filters.discount[0] <= product.discount
      : true;
    var isBelowMaxDiscount = filters.discount[1]
      ? filters.discount[1] >= product.discount
      : true;
    return (
      isRequiredBrand &&
      isRequiredColor &&
      isAboveMinPrice &&
      isBelowMaxPrice &&
      isAboveMinDiscount &&
      isBelowMaxDiscount
    );
  });
}

function filterProducts(target) {
  var brands = getSelectedCheckboxes(target.elements["brand"]);
  var colors = getSelectedCheckboxes(target.elements["color"]);
  var minPrice = getSelectedDropdown(target.elements["minPrice"]);
  var maxPrice = getSelectedDropdown(target.elements["maxPrice"]);
  var minDiscount = getSelectedDropdown(target.elements["minDiscount"]);
  var maxDiscount = getSelectedDropdown(target.elements["maxDiscount"]);
  var filters = {
    brands,
    colors,
    price: [minPrice, maxPrice],
    discount: [minDiscount, maxDiscount]
  };
  globalFilteredProducts = getFilteredProducts(filters, products);
  updateProductsHtml(globalFilteredProducts);
  updateShowingText(globalFilteredProducts.length, products.length);
  return false;
}

function refreshFilters() {
  globalFilteredProducts = [...products];
  updateProductsHtml(globalFilteredProducts);
  updateShowingText(globalFilteredProducts.length, products.length);
  var filters = document.forms["filter"];
  filters.reset();
}
