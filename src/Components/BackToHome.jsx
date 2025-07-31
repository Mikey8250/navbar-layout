import React from "react";
import { Link } from "react-router-dom";

function BackToHome() {
  return (
    <Link
      to="/"
      className="absolute left-[5%] top-[5%] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
    >
      ← Back to Home
    </Link>
  );
}

export default BackToHome;
