import { Outlet, useNavigation } from "react-router";
import Loader from "../../Loader";
import Header from "./Header";
import "./adminAppLayout.scss";

function AdminAppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      {isLoading && <Loader />}
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default AdminAppLayout;
