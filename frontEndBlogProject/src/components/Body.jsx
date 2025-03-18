import React from "react";
import Header from "./Header";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SignIn from "./SignIn";
import Browse from "./Browse";
import Home from "./Home";
import SignUp from "./SignUp";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/browse",
      element: <Browse />,
    },

    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
