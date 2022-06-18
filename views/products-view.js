const { I } = inject();

module.exports = {
  fields: {
    productListLabel: '#productListLabel',
    productImage: '#productImage',
    productTitle: '#productTitle',
    productDescription: '#productDescription',
    productPrice: '#productPrice',
    addProductButton: '#addProductButton',
    addProductSuccessMessage: "//android.widget.TextView[contains(@text, 'Product added to cart!')]",
    keepBuyingButton: "//android.widget.TextView[contains(@text, 'Keep buying')]",
    goToCartButton: "//android.widget.TextView[contains(@text, 'Go to cart')]",
  },
  isLoaded() {
    I.waitForVisible("#productListLabel", 10);
    I.waitForVisible("#productImage", 10);
    I.waitForVisible("#productTitle", 10);
    I.waitForVisible("#productDescription", 10);
    I.waitForVisible("#productPrice", 10);
    I.waitForVisible("#addProductButton", 10);
  },
  addProductToCart() {
    I.tap("#addProductButton");
    I.waitForVisible("//android.widget.TextView[contains(@text, 'Product added to cart!')]", 10);
    I.waitForVisible("//android.widget.TextView[contains(@text, 'Keep buying')]", 10);
    I.waitForVisible("//android.widget.TextView[contains(@text, 'Go to cart')]", 10);
  }
}


