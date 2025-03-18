import React from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const navigateToSignUpPage = () => navigate("/signUp");
  return (
    <div>
      <Header />
      <div className="text-center">
        <div className="text-4xl ">Sign in</div>
        <div className="pt-4 text-green-500 text-xl cursor-pointer hover:text-green-400">
          <a onClick={navigateToSignUpPage}>Need an account?</a>
        </div>
        <div className="pt-6 ">
          <div className="">
            <input
              className="border border-gray-200 outline-2 rounded-lg"
              type="text"
              placeholder=" Email"
            />
          </div>
          <div className="pt-4">
            <input
              className="border border-gray-200 outline-2 rounded-lg"
              type="password"
              placeholder=" Password"
            />
          </div>
        </div>
        <div className="pt-4 ">
          <button className="p-2 bg-green-500 text-white rounded-lg text-l hover:bg-green-400 cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
