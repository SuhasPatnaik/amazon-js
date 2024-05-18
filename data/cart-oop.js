const cart = {
  cartItems: undefined,

  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem("cart-oop"));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionId: "2",
        },
      ];
    }
  },

  saveToStorage() {
    localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
  },

  addToCart(productId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem;
      }
    });

    const dropdownQuantity = document.querySelector(
      `.js-quantity-selector-${productId}`
    );

    let dropdownQuantityValue = Number(dropdownQuantity.value);

    if (matchingItem) {
      matchingItem.quantity += dropdownQuantityValue;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: dropdownQuantityValue,
        deliveryOptionId: "1",
      });
    }

    this.saveToStorage();
  },

  removeFromCart(productId) {
    const updatedCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        updatedCart.push(cartItem);
      }
    });

    this.cartItems = updatedCart;

    this.saveToStorage();
  },

  calculateCartQuantity() {
    let cartQuantity = 0;
    this.cartItems.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    return cartQuantity;
  },

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId === productId) {
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  },
};

cart.loadFromStorage();