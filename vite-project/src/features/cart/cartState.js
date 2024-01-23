import { atom, selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const addToCart = (cart, item) => {
  const newCart = [...cart];
  const index = newCart.findIndex((x) => x.id === item.id);

  if (index !== -1) {
    newCart[index] = { ...newCart[index], quantity: newCart[index].quantity + 1 };
    return newCart;
  } else {
    newCart.push({
      id: item.id,
      product: item,
      quantity: 1,
    });
    return newCart;
  }
};

export const cartTotal = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const total = get(cartState);
    return total.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  },
});
