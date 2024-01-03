import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./appLayout.scss";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
