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
    I.waitForVisible(this.fields.productListLabel, 10);
    I.waitForVisible(this.fields.productImage, 10);
    I.waitForVisible(this.fields.productTitle, 10);
    I.waitForVisible(this.fields.productDescription, 10);
    I.waitForVisible(this.fields.productPrice, 10);
    I.waitForVisible(this.fields.addProductButton, 10);
  },
  addProductToCart() {
    I.tap(this.fields.addProductButton);
    I.waitForVisible(this.fields.addProductSuccessMessage, 10);
    I.waitForVisible(this.fields.keepBuyingButton, 10);
    I.waitForVisible(this.fields.goToCartButton, 10);
    I.tap(this.fields.goToCartButton);
  }
}


