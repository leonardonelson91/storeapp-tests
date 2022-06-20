Feature: Cart

  As customer
  I want to be able to select the products I want
  So that I can purchase them

  Scenario: Add product to Cart
    Given I am at the products view
    When I add a product to the Cart
    Then I must see the product in the Cart
