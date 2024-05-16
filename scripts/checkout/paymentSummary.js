import { calculateCartQuantity } from "../../data/cart.js";
import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";

export function renderPaymentSummary() {
  let totalProductsCost = 0;
  let totalShippingCost = 0;
  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);

    totalProductsCost += (cartItem.quantity * product.priceCents) / 100;

    console.log(totalProductsCost);

    let deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);

    totalShippingCost += deliveryOption.priceCents / 100;

    console.log(totalShippingCost);

    let totalBeforeTax = totalProductsCost + totalShippingCost;

    let estimatedTax = 0.1 * totalBeforeTax;

    let orderTotal = totalBeforeTax + estimatedTax;

    let html = `
    <div class="payment-summary-title">Order Summary</div>
    <div class="payment-summary-row">
      <div>Items (${calculateCartQuantity()}):</div>
      <div class="payment-summary-money">$${totalProductsCost}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${totalShippingCost}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${totalBeforeTax.toFixed(2)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${estimatedTax.toFixed(2)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${orderTotal.toFixed(2)}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `;

    const paymentSummaryHTML = document.querySelector(".js-payment-summary");
    paymentSummaryHTML.innerHTML = html;
  });
}
