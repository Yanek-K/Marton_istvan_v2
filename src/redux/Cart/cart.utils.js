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

export const handleRemoveCartItem = ({ prevCartItems, cartItemToRemove }) => {
  return prevCartItems.filter(
    (item) => item.imageName !== cartItemToRemove.imageName
  );
};

export const handleReduceCartItem = ({ prevCartItems, cartItemToReduce }) => {
  const existingCartItem = prevCartItems.find(
    (cartItem) => cartItem.imageName === cartItemToReduce.imageName
  );

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.imageName !== existingCartItem.imageName
    );
  }

  return prevCartItems.map((cartItem) =>
    cartItem.imageName === existingCartItem.imageName
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
