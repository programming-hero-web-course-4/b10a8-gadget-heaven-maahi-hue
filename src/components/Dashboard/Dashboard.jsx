import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import cardImage from "../../assets/images/Group.png";
import {
  getAddedCartProducts,
  getAddedWishProducts,
} from "../../utility/addToDb";
import WishlistItem from "../WishlistItem/WishlistItem";
import CartItem from "../CartItem/CartItem";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cartList, setCartList] = useState([]);
  const [wishList, setWishtList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const allProducts = useLoaderData();

  useEffect(() => {
    const storedCartList = getAddedCartProducts();
    const cartProductList = allProducts.filter((product) =>
      storedCartList.includes(String(product.product_id))
    );
    setCartList(cartProductList);
  }, [allProducts]);

  useEffect(() => {
    const storedWishList = getAddedWishProducts();
    const wishProductList = allProducts.filter((product) =>
      storedWishList.includes(product.product_id)
    );
    setWishtList(wishProductList);
  }, [allProducts]);

  const addToCartFromWishlist = (product) => {
    if (!cartList.some((item) => item.product_id === product.product_id)) {
      setCartList((prevCartList) => [...prevCartList, product]);
      removeFromWishlist(product.product_id);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishtList((prevWishList) =>
      prevWishList.filter((item) => item.product_id !== productId)
    );
  };

  const handleSort = (sortType) => {
    const sortedCartList = [...cartList].sort((a, b) => b.price - a.price);
    setCartList(sortedCartList);
  };

  const totalPrice = cartList.reduce((total, item) => total + item.price, 0);

  const handlePurchase = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setCartList([]);
    setModalOpen(false);
    navigate("/");
  };

  return (
    <div>
      <div className="text-center bg-[#9538E2] py-6">
        <h2 className="my-6 text-white text-3xl font-bold">Dashboard</h2>
        <p className="text-white text-base font-normal">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to
        </p>
        <p className="text-white text-base font-normal">
          the coolest accessories, we have it all!
        </p>
        <Tabs>
          <TabList className="text-xl font-medium mt-4 flex justify-center gap-4">
            <Tab>
              <button className="border border-white rounded-3xl bg-[#9538E2] px-5 py-2 text-white hover:bg-white hover:text-[#9538E2] hover:font-extrabold">
                Cart
              </button>
            </Tab>
            <Tab>
              <button className="border border-white rounded-3xl bg-[#9538E2] px-3 py-2 text-white hover:bg-white hover:text-[#9538E2] hover:font-extrabold">
                Wishlist
              </button>
            </Tab>
          </TabList>
        </Tabs>
      </div>

      <Tabs>
        <TabPanel className="text-2xl font-bold flex flex-col gap-6 my-3">
          <div className="flex justify-between items-center">
            <h2>Cart: {cartList.length}</h2>
            <div className="flex gap-3 justify-end">
              <p>Total cost: ${totalPrice.toFixed(2)}</p>
              <button
                onClick={() => handleSort("Price")}
                className="text-[#9538E2] hover:text-white text-base font-semibold bg-white border hover:bg-[#9538E2] border-[#9538E2] py-2 px-5 rounded-3xl"
              >
                Sort by Price
              </button>
              <button
                onClick={handlePurchase}
                disabled={cartList.length === 0 || totalPrice === 0}
                className="text-white hover:text-[#9538E2] text-base font-semibold bg-[#9538E2] hover:border hover:border-[#9538E2] hover:bg-white py-2 px-5 rounded-3xl"
              >
                Purchase
              </button>
            </div>
          </div>

          {cartList.map((product) => (
            <CartItem key={product.product_id} product={product} />
          ))}
        </TabPanel>

        <TabPanel className="text-2xl font-bold">
          <h2>WishList: {wishList.length}</h2>
          {wishList.map((product) => (
            <WishlistItem
              key={product.product_id}
              product={product}
              cartList={cartList}
              addToCart={() => addToCartFromWishlist(product)}
            />
          ))}
        </TabPanel>
      </Tabs>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img src={cardImage} alt="" />
            <h2 className="text-2xl font-bold mb-4">Payment Successful</h2>
            <hr></hr>
            <p className="text-lg">Thanks for purchasing.</p>
            <p className="text-lg mb-6">Total: {totalPrice}</p>
            <button
              onClick={handleCloseModal}
              className="bg-base-200 w-full py-2 px-6 rounded-3xl hover:text-white hover:bg-[#9538E2] font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
