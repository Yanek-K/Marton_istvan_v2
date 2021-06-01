// Check if the item exists in the cart
export const existingCartItem = ({ prevCartItems, nextCartItem }) => {
  return prevCartItems.find(
    (cartItem) => cartItem.imageName === nextCartItem.imageName
  );
};

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  // If the item does exist, we have to find it by mapping through the items in the prevCart
  if (cartItemExists) {
    return prevCartItems.map((cartItem) =>
      cartItem.imageName === nextCartItem.imageName
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantityIncrement,
          }
        : cartItem
    );
  }
  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};
