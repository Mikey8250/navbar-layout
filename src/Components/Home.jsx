import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { productContext } from "../Utils/Context";
import Loading from "./Loading";
function Home() {
  const [products] = useContext(productContext);
  // console.log(products);
  return products ? (
    <>
      <Nav></Nav>
      <div className="w-[85%] mx-auto p-5 pt-[5%] flex flex-wrap gap-5 justify-start overflow-y-scroll">
        {products.map((product, index) => {
          return (
            <Link
              to={`/details/${product.id}`}
              key={product.id}
              className="w-[180px] sm:w-[200px] md:w-[220px] bg-white border rounded-xl shadow-sm hover:shadow-lg transition duration-300 transform hover:scale-105 p-3 flex flex-col items-center"
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
