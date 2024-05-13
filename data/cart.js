export let cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
  },
  {
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity: 5,
  },
];

export function addToCart(productId) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  const dropdownQuantity = document.querySelector(
    `.js-quantity-selector-${productId}`
  );

  let dropdownQuantityValue = Number(dropdownQuantity.value);
  console.log(dropdownQuantityValue);

  if (matchingItem) {
    matchingItem.quantity += dropdownQuantityValue;
  } else {
    cart.push({
      productId: productId,
      quantity: dropdownQuantityValue,
    });
  }
}

export function removeFromCart(productId) {
  const updatedCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      updatedCart.push(cartItem);
    }
  });

  cart = updatedCart;
}
