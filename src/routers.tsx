// "routers.tsx"
import { createBrowserRouter } from "react-router";
import TodolistPage from "./pages/TodolistPage";
import HelloMyNamePage from "./pages/HelloMyNamePage";
import CounterPage from "./pages/CounterPage";
import MainLayout from "./layout/MainLayout"; 
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  // array of objects
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/
      { index: true, element: <CounterPage /> },
      //{ path: "todolistpage", element: <TodolistPage /> },
    ],
  },
  {
    path: "/my",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      // localhost:xxxx/my/hellomynamepage
      { path: "hellomynamepage", element: <HelloMyNamePage /> },
      // localhost:xxxx/my/todolistpage
      { path: "todolistpage", element: <TodolistPage /> },
    ],
  },
]);