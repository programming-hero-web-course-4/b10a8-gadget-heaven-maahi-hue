import { useLoaderData, useParams } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const Details = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  const product = data.find((product) => product.product_id === product_id);

  const {
    product_id: id,
    product_title,
    product_image,
    price,
    availability,
    description,
    Specification,
    rating,
  } = product;

  return (
    <div className="bg-base-200 ">
      <div className="bg-[#9538E2] text-white text-center pb-36 mb-3 gap-2 ">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <br></br>
        <p className="text-base font-normal">
          Explore the latest gadgets that will take your experience to
        </p>
        <p className="text-base font-normal">
          the coolest accessories, we have it all!
        </p>
      </div>
      <div
        className="hero bg-white w-2/3 h-auto  mx-auto z-20 rounded-xl p-5"
        style={{
          position: "relative",
          top: "-120px",
        }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={product_image}
            className="h-[ 615px] w-[424.31px] object-cover rounded-xl shadow-2xl"
          />
          <div className="">
            <h1 className="text-2xl font-semibold my-3">{product_title}</h1>
            <p className="text-xl font-semibold">Price: $ {price}</p>
            <button className="my-3 rounded-3xl border border-green-500 text-green-500 bg-green-100 text-xs font-medium p-2">
              {availability ? "In Stock" : "Out of Stock"}
            </button>
            <p className="font-normal text-base text-[#09080F99]">
              {description}
            </p>
            <h2 className="mb-3 text-base font-bold">Specifications:</h2>
            <ol className="list-decimal list-inside py-2 text-[#09080F99] text-base font-normal">
              {Specification.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ol>
            <h2 className="mt-3 font-bold text-base">Rating:</h2>
            <div className="flex items-center gap-8 my-3">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <button className="bg-base-200 rounded-3xl text-xs font-medium px-4 py-2">
                {rating}
              </button>
            </div>

            <div className="flex gap-3 ">
              <button className="bg-[#9538E2] p-3 mb-3 text-white rounded-3xl flex text-base font-bold gap-2">
                Add To Cart <BsCart3 />
              </button>
              <button className=" bg-white px-3 py-2 rounded-3xl border border-inherit">
                <FiHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
