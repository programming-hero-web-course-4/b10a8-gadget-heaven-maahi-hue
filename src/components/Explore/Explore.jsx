import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Product from "../Product/Product";

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setCategories([...new Set(data.map((product) => product.category))]);
      });
  }, []);

  const filteredProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <div className="my-6 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-lg mb-6 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Categories</h2>
        <div className="space-y-4">
          {categories.map((categoryName) => (
            <Link
              key={categoryName}
              to={`/${categoryName.toLowerCase()}`}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-[#9538E2] hover:text-white block"
            >
              <p className="text-lg font-semibold">{categoryName}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-3/4 pl-0 lg:pl-6">
        <h2 className="text-4xl font-bold text-center mb-6">
          {category
            ? `Explore ${category} Gadgets`
            : "Explore Cutting-Edge Gadgets"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {filteredProducts.map((product) => (
            <div className="mx-auto">
              <Product product={product} key={product.product_id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
