export const addItemToCart = (prevCartItems, newItem) => {
  const existingCartItem = prevCartItems.find(
    (cartItem) => cartItem.id === newItem.id // return true or false
  );

  if (existingCartItem) {
    return prevCartItems.map((cartItem) => {
      return cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  } else {
    return [...prevCartItems, { ...newItem, quantity: 1 }];
  }
};

export const decrementFromCartFunc = (prevCartItems, newItem) => {
  if (newItem.quantity === 1) {
    return prevCartItems.filter((item) => item.id !== newItem.id);
  } else {
    return prevCartItems.map((cartItem) => {
      return cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem;
    });
  }
};
