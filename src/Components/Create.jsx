import React, { useState } from "react";

function Create() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addProductHandler = (e) => {
    e.preventDefault();
    const product = { title, category, price, image, description };
    console.log(product);
  };

  return (
    <form
      action=""
      onSubmit={(e) => addProductHandler(e)}
      className="flex flex-col items-center p-[5%] h-screen w-screen"
    >
      <h1 className="text-3xl mb-5 w-1/2">Add new products</h1>
      <input
        type="url"
        placeholder="Image url"
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        onChange={(e) => {
          setImage(e.target.value);
        }}
        value={image}
      />
      <input
        type="text"
        placeholder="title"
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="category"
          className="text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="text-1xl bg-zinc-200 rounded p-3 w-[48%] mb-3"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
      </div>
      <textarea
        name=""
        id=""
        rows="9"
        placeholder="Enter product description here"
        className="text-1xl bg-zinc-200 rounded p-3 w-1/2 mb-3"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      ></textarea>
      <button
        type="submit"
        className="py-3 text-lg px-5 border rounded border-blue-200 text-white bg-blue-500 hover:bg-white hover:text-blue-500 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default Create;
