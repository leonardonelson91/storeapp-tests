const { I } = inject();

module.exports = {
  fields: {
    cartNavigationLabel: "//android.view.View[contains(@text, 'Cart')]",
    productImage: '#productImage',
    productTitle: '#productTitle',
    productPrice: '#productPrice',
    quantityButtons: '#quantityButtons',
    totalLabel: '#totalLabel',
    totalPriceLabel: '#totalPriceLabel',
    paymentButton: '#paymentButton'
  },
  isLoaded() {
    I.waitForVisible(this.fields.cartNavigationLabel, 10);
  },
  hasProducts() {
    I.waitForVisible(this.fields.productImage, 10);
    I.waitForVisible(this.fields.productTitle, 10);
    I.waitForVisible(this.fields.productPrice, 10);
    I.waitForVisible(this.fields.quantityButtons, 10);
    I.waitForVisible(this.fields.totalLabel, 10);
    I.waitForVisible(this.fields.totalPriceLabel, 10);
    I.waitForVisible(this.fields.paymentButton, 10);
  }
}
