import { Outlet } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { useSelector } from "react-redux";
import { store } from "../store";
import "./appLayout.scss";

function AppLayout() {
  const cart = useSelector((store: store) => store.cart);

  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {cart.quantity !== 0 && <CartOverview />}
    </>
  );
}

export default AppLayout;
