export const addItemToCart = (prevCartItems, newItem) => {
  // prevCartItems is an array
  // newItem is an object

  // Check if the prevCartItem has an existing object with matching id
  // If there is any find( which can only be one ) increase the quantity property by one
  // If there is no matched means its a totaly new item, then add quantity property to it and append it in to the array
  // return that array

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
