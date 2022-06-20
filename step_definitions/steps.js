const { I, productsView, cartView } = inject();

Given('I am at the products view', () => {
  productsView.isLoaded();
});

When('I add a product to the Cart', () => {
  productsView.addProductToCart();
});

Then('I must see the product in the Cart', () => {
  cartView.isLoaded();
  cartView.hasProducts();
});
