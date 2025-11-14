import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import Profile from "../pages/Profile/Profile";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoutes from "./PrivateRoutes";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import Wishlist from "../pages/Wishlist/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/alltoys",
        element: <AllToys />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoutes>
            <Wishlist></Wishlist>
          </PrivateRoutes>
        ),
      },
      {
        path: "/toy/:toyId",
        element: (
          <PrivateRoutes>
            <ToyDetails></ToyDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/*",
        element: <h2>Error 404</h2>,
      },
    ],
  },
]);

export default router;
