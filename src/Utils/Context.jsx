import axios from "./Axios";
import React, { createContext, useEffect, useState } from "react";

export const productContext = createContext();
function Context(props) {
  const [Products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );

  // const getData = async () => {
  //   try {
  //     const res = await axios.get("/products"); // ✅
  //     // console.log(res);
  //     setProducts(res.data); // ✅
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <productContext.Provider value={[Products, setProducts]}>
      {props.children} {/* ✅ This line is VERY important */}
    </productContext.Provider>
  );
}

export default Context;
