import { AddToCart } from "../../utility/addToDb";

const WishlistItem = ({ product, cartList, addToCart }) => {
  const isInCart = cartList.some(
    (item) => item.product_id === product.product_id
  );

  const handleAddToCart = () => {
    if (!isInCart) {
      AddToCart(product.product_id);
      addToCart();
    }
  };

  return (
    <div className="bg-base-200">
      <div className="hero bg-white w-2/3 h-auto  mx-auto rounded-xl p-5 my-3">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product.product_image}
            className="h-[ 615px] w-[424.31px] object-cover rounded-xl shadow-2xl"
          />
          <div className="">
            <h1 className="text-2xl font-semibold my-3">
              {product.product_title}
            </h1>
            <p className="text-xl font-semibold">Price: $ {product.price}</p>
            <p className="font-normal text-base text-[#09080F99]">
              Description:
              {product.description}
            </p>

            <div className=" ">
              <button
                onClick={handleAddToCart}
                disabled={isInCart}
                className={`${
                  isInCart ? "bg-gray-400" : "bg-[#9538E2]"
                } p-3 mb-3 text-white rounded-3xl flex text-base font-bold gap-2`}
              >
                {isInCart ? "In Cart" : "Add To Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
