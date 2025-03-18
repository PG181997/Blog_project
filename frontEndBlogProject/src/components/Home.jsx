import React from "react";
import Header from "./Header";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-[#5CB85C] h-45 p-4">
        <div className="font-sans font-bold text-white text-6xl text-center pt-5">
          conduit
        </div>
        <div className="font-sans text-white text-2xl text-center pt-2 font-light">
          A place to share your knowledge.
        </div>
      </div>
    </div>
  );
};

export default Home;
