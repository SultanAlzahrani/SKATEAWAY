export let cartArray = [];

export function removeItemFromArray(index) {
  delete cartArray[index];
}
export function getItemQuantity(index) {
  console.log(cartArray[index]);
  return cartArray[index].quantity;
}
