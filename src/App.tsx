import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import CreatePizza from "./features/admin/pizzas/CreatePizza";
import AddIngredient from "./features/admin/ingredients/AddIngredient";
import Ingredients from "./features/admin/ingredients/Ingredients";
import Pizzas from "./features/admin/pizzas/Pizzas";
import EditPizza from "./features/admin/pizzas/EditPizza";
import {
  editPizzaLoader,
  ingredientLoader,
  ingredientsLoader,
  menuLoader,
  orderLoader,
  ordersLoader,
} from "./services/loaders";
import {
  createIngredientAction,
  createOrderAction,
  updateIngredientAction,
} from "./services/actions";
import Orders from "./features/admin/orders/Orders";
import EditIngredient from "./features/admin/ingredients/EditIngredient";

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
              path: "pizzas",
              children: [
                {
                  path: "",
                  element: <Pizzas />,
                  loader: menuLoader,
                  errorElement: <Error />,
                },
                {
                  path: "create",
                  element: <CreatePizza />,
                  loader: ingredientsLoader,
                  errorElement: <Error />,
                },
                {
                  path: "edit/:id",
                  element: <EditPizza />,
                  loader: editPizzaLoader,
                  errorElement: <Error />,
                },
              ],
            },
            {
              path: "ingredients",
              children: [
                {
                  path: "",
                  element: <Ingredients />,
                  loader: ingredientsLoader,
                  errorElement: <Error />,
                },
                {
                  path: "create",
                  element: <AddIngredient />,
                  errorElement: <Error />,
                  action: createIngredientAction,
                },
                {
                  path: "edit/:id",
                  element: <EditIngredient />,
                  loader: ingredientLoader,
                  errorElement: <Error />,
                  action: updateIngredientAction,
                },
              ],
            },
            {
              path: "orders",
              children: [
                {
                  path: "",
                  element: <Orders />,
                  loader: ordersLoader,
                  errorElement: <Error />,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
