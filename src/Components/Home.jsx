import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Nav></Nav>
      <Link
        to={"/details/1"}
        className="w-[85%] p-5 pt-[5%] flex flex-wrap overflow-y-scroll"
      >
        <div className="mb-3 mr-3 CARD p-3 border shadow w-[18%] h-[30vh] flex flex-col justify-center items-center">
          <div
            className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110"
            style={{
              backgroundImage:
                'url("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")',
            }}
          ></div>
          <h1 className="hover:text-blue-300">Lorem ipsum dolor sit amet.</h1>
        </div>
      </Link>
    </>
  );
}

export default Home;
