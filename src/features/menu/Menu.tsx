import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { menuItem } from "../../utils/types";

function Menu() {
  const menu: Array<menuItem> = useLoaderData() as Array<menuItem>;

  return (
    <>
      <ul>
        {menu.map((pizza) => {
          return <MenuItem item={{ ...pizza }} key={pizza.id} />;
        })}
      </ul>
    </>
  );
}

export default Menu;
