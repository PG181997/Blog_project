import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToLoginPage = () => navigate("/signIn");

  const navigateToSignUpPage = () => navigate("/signUp");
  return (
    <div className="flex pt-1 pr-1 pb-6 pl-1 cursor-pointer justify-between h-14">
      <div className="pl-70 pt-1.5">
        <a className=" font-sanas font-bold text-2xl text-[#5CB85C]">conduit</a>
      </div>
      <div className=" justify-between items-center pr-70 pt-2.5 ">
        <a className="pr-3 hover:text-gray-500" onClick={navigateToHome}>
          Home
        </a>
        <a className="pr-3 hover:text-gray-500" onClick={navigateToLoginPage}>
          Sign In
        </a>
        <a className="pr-3 hover:text-gray-500" onClick={navigateToSignUpPage}>
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Header;
