export const cart = [];

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
