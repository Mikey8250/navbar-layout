import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { productContext } from "../Utils/Context";
import Loading from "./Loading";
import axios from "../Utils/Axios";

function Home() {
  const [products] = useContext(productContext);
  const [filteredProduct, setfilteredProduct] = useState(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  // console.log(typeof queryParams);
  const category = queryParams.get("category");
  // console.log(category);

  const getProducts = async () => {
    try {
      const res = await axios.get(`/products/category/${category}`);
      setfilteredProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (category) {
      getProducts();
    } else {
      setfilteredProduct(products);
    }
  }, [category, products]);

  return products ? (
    <>
      <Nav></Nav>
      <div className="w-[85%] mx-auto p-5 pt-[5%] flex flex-wrap gap-5 justify-start overflow-y-scroll">
        {filteredProduct &&
          filteredProduct.map((product, index) => {
            return (
              <Link
                to={`/details/${product.id}`}
                key={product.id}
                className="w-[180px] sm:w-[200px] md:w-[220px] h-[45%] bg-white border rounded-xl shadow-sm hover:shadow-lg transition duration-300 transform hover:scale-105 p-3 flex flex-col items-center"
              >
                <div
                  className="w-full h-[160px] bg-contain bg-no-repeat bg-center mb-3"
                  style={{ backgroundImage: `url(${product.image})` }}
                ></div>
                <h1 className="text-sm text-center font-medium text-gray-700 line-clamp-2 hover:text-blue-500">
                  {product.title}
                </h1>
                <p className="text-md mt-2 font-semibold text-green-600">
                  ${product.price}
                </p>
              </Link>
            );
          })}
      </div>
    </>
  ) : (
    <Loading></Loading>
  );
}

export default Home;
