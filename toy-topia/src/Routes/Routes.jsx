import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login"
import Registration from "../pages/Auth/Registration";
import Profile from "../pages/Profile/Profile"

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/registration",
        Component: Registration,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/*",
        Component: () => <h2>Error 404</h2>,
      }
    ],
  },
]);

export default router;
