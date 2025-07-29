import React, { useContext } from "react";
import { productContext } from "../Utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(productContext);
  const categories = [...new Set(products.map((product) => product.category))];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(
      Math.random() * 255
    ).toFixed()}, ${(Math.random() * 255).toFixed()}, 1)`;
  };

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
      <a
        className="py-3 px-5 border rounded border-blue-200 text-blue-300"
        href="/create"
      >
        Add new Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
      <div className="w-[80%]">
        {categories.map((c, index) => {
          return (
            <Link
              key={index}
              to={`/?category=${c}`}
              className="mb-3 flex items-center"
            >
              <span
                style={{ backgroundColor: color() }}
                className="bg-red-300 rounded-full w-[15px] h-[15px] mr-2"
              ></span>
              {c}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Nav;
