import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Pk from "./pages/pk";
import PkGet from "./pages/pkget";
import Get from "./pages/get";
import Menu from "./pages/menu";
import Fighting from "./pages/fighting";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path:"/account", element:<div></div>},
  { path:"/registerAccount", element:<div></div>},
  { path:"/forget", element:<div></div>},
  { path:"/menu", element:<Menu/>},
  { path: "/pk", element: <Pk/> },
  { path: "/pkGet", element: <PkGet/> },
  { path: "get", element: <Get/> },
  { path: "fighting", element: <Fighting/> },
  { path:"/result", element:<div></div>},
]);
export default router;
