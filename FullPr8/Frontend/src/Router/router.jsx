import AddProduct from "../Pages/AddProduct";
import Detail from "../Pages/Detail";
import Favorites from "../Pages/Favorites";
import Home from "../Pages/Home";
import MainRoot from "../Pages/MainRoot";
import NotFound from "../Pages/NotFound";

export const ROUTER = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "/detail/:id",
                element: <Detail />
            },
            {
                path: "/addproduct",
                element: <AddProduct />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]
export default ROUTER