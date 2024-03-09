import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import CartOverview from "../../../features/cart/CartOverview";
import { useSelector } from "react-redux";
import { store } from "../../../store";
import { getCartQuantity } from "../../../utils/cartGetters";
import Loader from "../../Loader";
import "./appLayout.scss";

function AppLayout() {
  const cart = useSelector((store: store) => store.cart);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {getCartQuantity(cart) !== 0 && <CartOverview />}
    </>
  );
}

export default AppLayout;
