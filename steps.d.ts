/// <reference types='codeceptjs' />
type productsView = typeof import('./views/products-view.js');
type cartView = typeof import('./views/cart-view.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, productsView: productsView, cartView: cartView }
  interface Methods extends Appium {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
