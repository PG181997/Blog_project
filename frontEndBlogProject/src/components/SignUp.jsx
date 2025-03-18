import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const navigateToLoginPage = () => navigate("/signIn");
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUpButton = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      userName.current.value
    );
    setErrorMessage(message);

    //sign up
  };
  return (
    <div>
      <Header />
      <div className="text-center">
        <div className="text-4xl ">Sign in</div>
        <div className="pt-4 text-green-500 text-xl cursor-pointer hover:text-green-400">
          <a onClick={navigateToLoginPage}>Have an account?</a>
        </div>
        <div className="pt-6 ">
          <div className="">
            <input
              ref={userName}
              className="border border-gray-200 outline-2 rounded-lg"
              type="text"
              placeholder=" UserName"
            />
          </div>
          <div className="pt-4">
            <input
              ref={email}
              className="border border-gray-200 outline-2 rounded-lg"
              type="text"
              placeholder=" Email"
            />
          </div>
          <div className="pt-4">
            <input
              ref={password}
              className="border border-gray-200 outline-2 rounded-lg"
              type="password"
              placeholder=" Password"
            />
          </div>
        </div>
        <p className="text-red-500 pt-2">{errorMessage}</p>
        <div className="pt-4 ">
          <button
            className="p-2 bg-green-500 text-white rounded-lg text-l hover:bg-green-400 cursor-pointer"
            onClick={handleSignUpButton}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
