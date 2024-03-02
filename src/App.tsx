import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import CreatePizza, {
  loader as ingredientsLoader,
} from "./features/admin/CreatePizza";
import AddIngredient, {
  action as createIngredientAction,
} from "./features/admin/AddIngredient";
import Ingredients from "./features/admin/Ingredients";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order",
          children: [
            {
              path: "new",
              element: <CreateOrder />,
              action: createOrderAction,
            },
            {
              path: ":id",
              element: <Order />,
              loader: orderLoader,
              errorElement: <Error />,
              action: createOrderAction,
            },
          ],
        },
        {
          path: "/admin",
          children: [
            {
              path: "create-pizza",
              element: <CreatePizza />,
              loader: ingredientsLoader,
              errorElement: <Error />,
            },
            {
              path: "add-ingredient",
              element: <AddIngredient />,
              errorElement: <Error />,
              action: createIngredientAction,
            },
            {
              path: "ingredients",
              element: <Ingredients />,
              loader: ingredientsLoader,
              errorElement: <Error />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
