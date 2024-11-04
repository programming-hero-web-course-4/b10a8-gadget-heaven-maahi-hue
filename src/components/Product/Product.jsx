import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_id, product_title, product_image, category, price } = product;
  return (
    <div className="">
      <div className="card bg-base-100 w-80 h-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={product_image} className="rounded-xl" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions">
            <Link to={`/products/${product_id}`}>
              <button className="text-[#9538E2] text-xs bg-white rounded-3xl p-3 font-semibold border border-[#9538E2] hover:bg-[#9538E2] hover:text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
