const { I, productsView } = inject();

Feature('Cart');

Scenario('Add product to Cart', ({ I }) => {
    productsView.isLoaded();
    productsView.addProductToCart();
});
