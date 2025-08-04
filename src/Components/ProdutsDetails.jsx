import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../Utils/Axios";
import Loading from "./Loading";
import BackToHome from "./BackToHome";
import { productContext } from "../Utils/Context";

function ProductDetails() {
  const [products, setProducts] = useContext(productContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const productDeleteHandler = (id) => {
    const filteredProduct = products.filter((p) => p.id != id);
    setProducts(filteredProduct);
    localStorage.setItem("products", JSON.stringify(filteredProduct));
    navigate("/");
  };

  useEffect(() => {
    // getSingleProduct();
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }
  }, []);

  if (!product) return <Loading />;

  return (
    <>
      <BackToHome />
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-10 items-center">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[350px] object-contain rounded-xl shadow-md"
          />
        </div>

        {/* Product Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            {product.category}
          </p>
          <p className="text-2xl font-semibold text-red-500">
            ${product.price}
          </p>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          <div className="flex gap-4 mt-6">
            <Link
              className="py-2 px-6 rounded-lg border border-red-300 text-red-500 hover:bg-red-50 transition"
              to={`/edit/${product.id}`}
            >
              Edit
            </Link>
            <button
              onClick={() => productDeleteHandler(product.id)}
              className="py-2 px-6 rounded-lg border border-blue-300 text-blue-500 hover:bg-blue-50 transition"
              to="#"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
