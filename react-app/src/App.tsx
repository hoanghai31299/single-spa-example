import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <h1>React About</h1>,
  },
  {
    path: "/contact",
    element: <h1>React Contact</h1>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
