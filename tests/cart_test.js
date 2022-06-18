Feature('Cart');

Scenario('Add product to Cart', ({ I }) => {
    I.waitForVisible("#productListLabel", 10);
    I.waitForVisible("#productImage", 10);
    I.waitForVisible("#productTitle", 10);
    I.waitForVisible("#productDescription", 10);
    I.waitForVisible("#productPrice", 10);
    I.waitForVisible("#addProductButton", 10);
    I.tap("#addProductButton");
    I.waitForVisible("//android.widget.TextView[contains(@text, 'Product added to cart!')]", 10);
    I.waitForVisible("//android.widget.TextView[contains(@text, 'Keep buying')]", 10);
    I.waitForVisible("//android.widget.TextView[contains(@text, 'Go to cart')]", 10);
});
