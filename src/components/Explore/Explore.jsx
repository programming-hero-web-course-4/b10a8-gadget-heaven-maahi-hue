import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="my-6">
      <h2 className="text-4xl font-bold text-center">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product product={product} key={product.product_id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Explore;
