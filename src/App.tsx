import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import { Root } from "./Root";
import Qr from "./Qr";
import Connections from "./Connections";
import Skills from "./pages/Skills";
import Relations from "./pages/Relations";
import Identity from "./pages/Identity";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        children :[
          {
            path: "skills",
            element : <Skills />
          },
          {
            path: "identity",
            element : <Identity />
          },
          {
            path: "relations",
            element : <Relations />
          },
        ]
      },
      {
        path: "/qr",
        element: <Qr />,
      },
      {
        path: "/connections",
        element: <Connections />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
