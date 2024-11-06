import { toast } from "react-toastify";

const getAddedCartProducts = () => {
  const cartListStr = localStorage.getItem("cart-list");
  if (cartListStr) {
    const cartList = JSON.parse(cartListStr);
    return cartList;
  } else {
    return [];
  }
};

const AddToCart = (id) => {
  const cartList = getAddedCartProducts();
  if (cartList.includes(id)) {
    alert(id, "already exist");
  } else {
    cartList.push(id);
    const cartListStr = JSON.stringify(cartList);
    localStorage.setItem("cart-list", cartListStr);
    toast("Successfully added to the cart");
  }
};

const getAddedWishProducts = () => {
  const wishListStr = localStorage.getItem("wish-list");
  if (wishListStr) {
    const wishList = JSON.parse(wishListStr);
    return wishList;
  } else {
    return [];
  }
};

const AddToWish = (id) => {
  const wishList = getAddedWishProducts();
  if (wishList.includes(id)) {
    alert(id, "already exist");
  } else {
    wishList.push(id);
    const wishListStr = JSON.stringify(wishList);
    localStorage.setItem("wish-list", wishListStr);
    toast("Successfully added to the wishlist");
  }
};

export { AddToCart, AddToWish, getAddedCartProducts, getAddedWishProducts };
