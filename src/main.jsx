import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Explore></Explore>,
          },
          {
            path: ":category",
            element: <Explore></Explore>,
          },
        ],
      },
      {
        path: "products/:product_id",
        element: <Details></Details>,
        loader: () => fetch("/fakeData.json"),
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
