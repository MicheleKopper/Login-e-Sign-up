import { createBrowserRouter, RouterProvider } from "react-router";
import { Login } from "../../pages/Login";
import { SignUp } from "../../pages/SignUp";
import { Logout } from "../../pages/Logout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/*",
    element: <h1>Not found</h1>,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
