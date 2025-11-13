import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Registration from "../pages/Auth/Registration";
import Profile from "../pages/Profile/Profile";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import ToyDetails from "../pages/ToyDetails/ToyDetails";

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
        path: "/mytoys",
        element: (
          <PrivateRoutes>
            <MyToys></MyToys>
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
