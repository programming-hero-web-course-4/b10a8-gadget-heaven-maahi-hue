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
    <div className="my-6 flex">
      <div className="w-1/5 bg-gray-100 p-2 rounded-lg">
        <h2 className="text-4xl font-bold  mb-4">Categories</h2>
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

      <div className="w-4/5 pl-6">
        <h2 className="text-4xl font-bold text-center mb-6">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredProducts.map((product) => (
            <Product product={product} key={product.product_id}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
