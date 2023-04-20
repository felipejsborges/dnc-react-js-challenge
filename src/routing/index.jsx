import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CommonLayout } from "./CommonLayout";

import { TaskList } from "../pages/TaskList";
import { TaskDetails } from "../pages/TaskDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        path: "/",
        element: <TaskList />,
      },
      {
        path: "/tasks/:id",
        element: <TaskDetails />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
