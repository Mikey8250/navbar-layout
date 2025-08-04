import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../Utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import BackToHome from "./BackToHome";

function Edit() {
  const [products, setProducts] = useContext(productContext);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id, products]);

  const addProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5 ||
      product.category.trim().length < 1
    ) {
      alert("Each and every input must have 4 characters");
      return;
    }

    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = { ...product };
    setProducts(copyData);
    console.log(product);
    // setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify(copyData));
    navigate(-1);

    console.log(copyData);
  };

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setProduct((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <BackToHome />
      <form
        action=""
        onSubmit={(e) => addProductHandler(e)}
        className="flex flex-col items-center p-[5%] h-screen w-screen"
      >
        <h1 className="text-3xl mb-5 w-1/2">Update products</h1>
        <input
          type="url"
          placeholder="Image url"
          className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
          name="image"
          onChange={changeHandler}
          value={product && product.image}
        />
        <input
          type="text"
          placeholder="title"
          className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
          name="title"
          onChange={changeHandler}
          value={product && product.title}
        />
        <div className="w-1/2 flex justify-between">
          <input
            type="text"
            placeholder="category"
            className="text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3"
            name="category"
            onChange={changeHandler}
            value={product && product.category}
          />
          <input
            type="number"
            placeholder="price"
            className="text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3"
            name="price"
            onChange={changeHandler}
            value={product && product.price}
          />
        </div>
        <textarea
          id=""
          rows="9"
          placeholder="Enter product description here"
          className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
          name="description"
          onChange={changeHandler}
          value={product && product.description}
        ></textarea>
        <button
          type="submit"
          className="py-3 text-lg px-5 border rounded border-blue-200 text-white bg-blue-500 hover:bg-white hover:text-blue-500 transition"
        >
          Add new product
        </button>
      </form>
    </>
  );
}

export default Edit;
