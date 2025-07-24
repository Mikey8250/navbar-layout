import React from "react";

function App() {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
        <a
          className="py-3 px-5 border rounded border-blue-200 text-blue-300"
          href="/create"
        >
          Add new Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl w-[80%] mb-3">Category Filter</h1>
        <ul className="w-[80%]">
          <li className="mb-3 flex items-center">
            <span className="bg-red-300 rounded-full w-[15px] h-[15px] mr-2"></span>
            cat4
          </li>
          <li className="mb-3 flex items-center">
            <span className="bg-green-300 rounded-full w-[15px] h-[15px] mr-2"></span>
            cat 2
          </li>
          <li className="mb-3 flex items-center">
            <span className="bg-blue-300 rounded-full w-[15px] h-[15px] mr-2"></span>
            cat3
          </li>
          <li className="mb-3 flex items-center">
            <span className="bg-yellow-300 rounded-full w-[15px] h-[15px] mr-2"></span>
            cat4
          </li>
        </ul>
      </nav>

      <div className="w-[85%] p-5 pt-[5%] flex flex-wrap overflow-y-scroll">
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
      </div>
    </div>
  );
}

export default App;
